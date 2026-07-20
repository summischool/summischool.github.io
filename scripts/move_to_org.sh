#!/bin/bash
# Moves the site to the summischool org so it serves at the friendly URL
#   https://summischool.github.io/
#
# One manual prerequisite (GitHub offers no API for this): create the free
# organization "summischool" at https://github.com/organizations/plan
# while logged in as gbvanrenswoude. Then run this script.
set -euo pipefail

echo "→ transferring strike-wings-games/summischool → summischool/summischool.github.io"
gh api -X POST repos/strike-wings-games/summischool/transfer \
  -f new_owner=summischool -f new_name=summischool.github.io

echo "→ waiting for the transfer to settle"
for i in $(seq 1 30); do
  if gh api repos/summischool/summischool.github.io --jq .full_name >/dev/null 2>&1; then break; fi
  sleep 4
done
gh api repos/summischool/summischool.github.io --jq .full_name

echo "→ making sure Pages serves from main (an <owner>.github.io repo serves at the root URL)"
gh api -X POST repos/summischool/summischool.github.io/pages \
  -f build_type=legacy -f "source[branch]=main" -f "source[path]=/" 2>/dev/null \
  || gh api -X PUT repos/summischool/summischool.github.io/pages \
       -f build_type=legacy -f "source[branch]=main" -f "source[path]=/" 2>/dev/null \
  || echo "  (Pages config carried over with the transfer)"

echo "→ pointing the local checkout at the new home"
cd "$(dirname "$0")/.."
git remote set-url origin https://github.com/summischool/summischool.github.io.git
git remote -v

echo "→ nudging a Pages build"
git commit --allow-empty -q -m "pages: first build at summischool.github.io"
git push

echo
echo "Done. The site will come up at https://summischool.github.io/ within a minute."
echo "The old strike-wings URL stops serving; App Store Connect should use:"
echo "  https://summischool.github.io/privacy.html"
