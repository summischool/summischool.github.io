/* Summi School site — parade, shelves, i18n, reveals, parallax, lightbox. */
(function () {
  "use strict";

  /* ?capture — QA hook: settle every animation/reveal for headless
     full-page screenshots (the site's SNAPSHOT_SETTLED). */
  if (new URLSearchParams(window.location.search).has("capture")) {
    document.documentElement.classList.add("capture");
  }

  /* ================= i18n ================= */
  var I18N = {
    nl: {
      docTitle: "Summi School — samen leren en spelen",
      heroTitle: "Summi School",
      heroTagline: "samen leren en spelen",
      heroSub: "Vier vrolijke leerreizen voor kinderen van 3–5 jaar — schrijven, rekenen, lezen en de wereld ontdekken. Volledig ingesproken in het Nederlands, Engels en Spaans.",
      heroCta: "Binnenkort in de App Store",
      heroCtaNote: "Geen account · geen reclame · geen tracking",
      statJourneys: "leerreizen", statLevels: "levels", statLanguages: "talen", statTracking: "tracking",
      writeChip: "leerreis 1", writeTitle: "Schrijven",
      writeSub: "Grote letters op het schoolbord",
      writeText: "Een vrolijk krijtje doet elke lijn voor — en dan is je kind aan de beurt. 250 levels lang, van de allereerste <b>a</b> tot hele woorden schrijven, met sterren, confetti en applaus van de vriendjes.",
      writeP1: "Elke letterstreek wordt voorgedaan",
      writeP2: "Echte schoolschrijfletters",
      writeP3: "Nooit een foutscherm — gewoon nog een keer",
      mathChip: "leerreis 2", mathTitle: "Rekenen",
      mathSub: "Tellen met appels en eieren",
      mathText: "Slepen, tikken en tellen met echte papieren spulletjes: eerst tot 3, dan tot 20. Plus en min komen vanzelf — en halverwege verschijnen de echte cijfers, tot aan 10 + 10 = 20.",
      mathP1: "Tellen, vergelijken, erbij en eraf",
      mathP2: "Elke som met vrolijke voorwerpen",
      mathP3: "Cijfers verschijnen precies op tijd",
      wordsChip: "leerreis 3", wordsTitle: "Woordjes",
      wordsSub: "Leren lezen in het Toverbos",
      wordsText: "Van <b>mama</b> en <b>papa</b> tot <b>boom</b>, <b>roos</b> en <b>vos</b>: je kind leert woordjes herkennen, bouwen en lezen, letter voor letter. En helemaal aan het eind worden twee woordjes één — regen + boog = regenboog!",
      wordsP1: "Plaatje en woord horen bij elkaar",
      wordsP2: "Woorden bouwen, letter voor letter",
      wordsP3: "Elke letter wordt voorgelezen",
      wkChip: "leerreis 4", wkTitle: "Wereld",
      wkSub: "Weten hoe alles heet",
      wkText: "Wat eet de muis? Bij wie hoort het kuiken? Tien werelden vol weetjes: de boerderij, je eigen lijf, het bos en het weer, de zee, de ruimte — tot aan de regenboog.",
      wkP1: "Luister-, sleep- en zoekvragen",
      wkP2: "Trek de lijn van het kuiken naar de kip",
      wkP3: "De vulkaan barst écht uit",
      videoTitle: "Kijk eens mee",
      videoSub: "Zo speelt Summi School: rustig, vrolijk en zonder haast.",
      galleryTitle: "Uit het prentenboek",
      gallerySub: "Elke wereld is met de hand geknipt en geplakt — blader maar door.",
      extrasTitle: "En er is nog meer",
      extraColorTitle: "Vrij kleuren",
      extraColorText: "30 kleurplaten, een glitterpen, stickers en toverfilters — en de tekening bewaar je als echte foto.",
      extraAbcTitle: "Echte schoolletters",
      extraAbcText: "Alle letters zijn met de hand gemaakt in het Nederlandse schoolschrift — geen computerletter.",
      extraLangTitle: "Drie talen",
      extraLangText: "Nederlands, Engels of Spaans — één knop in het ouderpaneel en het hele spel, stem en al, wisselt mee.",
      friendsTitle: "De vriendjes doen mee",
      friendsSub: "Charlie, Dilbi, Kaazie en Summi kijken mee bij elk level. Drie sterren? Applaus!",
      oceanTitle: "Veilig als de diepe zee",
      oceanSub: "Summi School verzamelt niets. Alles blijft op jullie eigen apparaat.",
      promiseAds: "Geen reclame", promiseTracking: "Geen tracking",
      promiseAccount: "Geen account", promisePurchases: "Geen aankopen",
      oceanCta: "Lees het hele privacybeleid",
      footerLine: "Gemaakt met liefde — en heel veel gekleurd papier.",
      footerPrivacy: "Privacybeleid", footerContact: "Contact"
    },
    en: {
      docTitle: "Summi School — learning and playing together",
      heroTitle: "Summi School",
      heroTagline: "learning and playing together",
      heroSub: "Four cheerful learning journeys for children aged 3–5 — writing, math, reading and discovering the world. Fully voiced in Dutch, English and Spanish.",
      heroCta: "Coming soon to the App Store",
      heroCtaNote: "No account · no ads · no tracking",
      statJourneys: "journeys", statLevels: "levels", statLanguages: "languages", statTracking: "tracking",
      writeChip: "journey 1", writeTitle: "Writing",
      writeSub: "Big letters on the school board",
      writeText: "A cheerful crayon draws every line first — then it's your child's turn. 250 levels, from the very first <b>a</b> to writing whole words, with stars, confetti and applause from the friends.",
      writeP1: "Every stroke is demonstrated first",
      writeP2: "Real school handwriting shapes",
      writeP3: "Never a fail screen — just try again",
      mathChip: "journey 2", mathTitle: "Math",
      mathSub: "Counting with apples and eggs",
      mathText: "Drag, tap and count with real paper things: first to 3, then to 20. Plus and minus come naturally — and halfway through, the real digits appear, all the way to 10 + 10 = 20.",
      mathP1: "Counting, comparing, adding, taking away",
      mathP2: "Every sum with cheerful objects",
      mathP3: "Digits appear exactly on time",
      wordsChip: "journey 3", wordsTitle: "Words",
      wordsSub: "Learning to read in the Magic Forest",
      wordsText: "From <b>mom</b> and <b>dad</b> to <b>tree</b>, <b>rose</b> and <b>fox</b>: your child learns to recognize, build and read words, letter by letter. And at the very end two little words become one — rain + bow = rainbow!",
      wordsP1: "Picture and word belong together",
      wordsP2: "Build words letter by letter",
      wordsP3: "Every letter is read aloud",
      wkChip: "journey 4", wkTitle: "World",
      wkSub: "Knowing what everything is called",
      wkText: "What does the mouse eat? Who does the chick belong to? Ten worlds full of things to know: the farm, your own body, the forest and the weather, the sea, space — all the way to the rainbow.",
      wkP1: "Listen, drag and search questions",
      wkP2: "Draw the line from chick to hen",
      wkP3: "The volcano really erupts",
      videoTitle: "Come take a look",
      videoSub: "This is how Summi School plays: calm, cheerful and unhurried.",
      galleryTitle: "From the picture book",
      gallerySub: "Every world is cut and glued by hand — have a browse.",
      extrasTitle: "And there is more",
      extraColorTitle: "Free coloring",
      extraColorText: "30 coloring pages, a glitter pen, stickers and magic filters — and drawings save as real photos.",
      extraAbcTitle: "Real school letters",
      extraAbcText: "Every letterform is hand-made in school handwriting style — not a computer font.",
      extraLangTitle: "Three languages",
      extraLangText: "Dutch, English or Spanish — one switch in the parents' panel and the whole game, voice and all, follows.",
      friendsTitle: "The friends play along",
      friendsSub: "Charlie, Dilbi, Kaazie and Summi watch every level. Three stars? Applause!",
      oceanTitle: "Safe as the deep sea",
      oceanSub: "Summi School collects nothing. Everything stays on your own device.",
      promiseAds: "No ads", promiseTracking: "No tracking",
      promiseAccount: "No account", promisePurchases: "No purchases",
      oceanCta: "Read the full privacy policy",
      footerLine: "Made with love — and a whole lot of colored paper.",
      footerPrivacy: "Privacy policy", footerContact: "Contact"
    },
    es: {
      docTitle: "Summi School — aprendemos y jugamos juntos",
      heroTitle: "Summi School",
      heroTagline: "aprendemos y jugamos juntos",
      heroSub: "Cuatro alegres viajes de aprendizaje para niños de 3 a 5 años: escribir, contar, leer y descubrir el mundo. Con voces en neerlandés, inglés y español.",
      heroCta: "Muy pronto en el App Store",
      heroCtaNote: "Sin cuenta · sin anuncios · sin rastreo",
      statJourneys: "viajes", statLevels: "niveles", statLanguages: "idiomas", statTracking: "rastreo",
      writeChip: "viaje 1", writeTitle: "Escribir",
      writeSub: "Letras grandes en la pizarra",
      writeText: "Una cera alegre dibuja cada línea primero — y luego le toca a tu peque. 250 niveles, desde la primera <b>a</b> hasta escribir palabras enteras, con estrellas, confeti y los aplausos de los amiguitos.",
      writeP1: "Cada trazo se demuestra primero",
      writeP2: "Letra escolar de verdad",
      writeP3: "Nunca una pantalla de error: se intenta otra vez",
      mathChip: "viaje 2", mathTitle: "Contar",
      mathSub: "Contamos con manzanas y huevos",
      mathText: "Arrastra, toca y cuenta con cositas de papel: primero hasta 3, luego hasta 20. Sumar y restar llegan solos — y a mitad de camino aparecen los números de verdad, hasta 10 + 10 = 20.",
      mathP1: "Contar, comparar, sumar y restar",
      mathP2: "Cada suma con objetos alegres",
      mathP3: "Los números llegan justo a tiempo",
      wordsChip: "viaje 3", wordsTitle: "Palabritas",
      wordsSub: "Aprender a leer en el Bosque Mágico",
      wordsText: "De <b>mamá</b> y <b>papá</b> a <b>árbol</b>, <b>rosa</b> y <b>zorro</b>: tu peque aprende a reconocer, construir y leer palabritas, letra por letra — hasta el arcoíris entero.",
      wordsP1: "El dibujo y la palabra van juntos",
      wordsP2: "Construye palabras letra a letra",
      wordsP3: "Cada letra se lee en voz alta",
      wkChip: "viaje 4", wkTitle: "Mundo",
      wkSub: "Saber cómo se llama todo",
      wkText: "¿Qué come el ratón? ¿De quién es el pollito? Diez mundos llenos de cosas por saber: la granja, tu propio cuerpo, el bosque y el tiempo, el mar, el espacio — hasta el arcoíris.",
      wkP1: "Preguntas de escuchar, arrastrar y buscar",
      wkP2: "Une el pollito con la gallina",
      wkP3: "El volcán entra en erupción de verdad",
      videoTitle: "Ven a mirar",
      videoSub: "Así se juega Summi School: con calma, alegría y sin prisa.",
      galleryTitle: "Del libro de dibujos",
      gallerySub: "Cada mundo está recortado y pegado a mano — echa un vistazo.",
      extrasTitle: "Y hay más",
      extraColorTitle: "Colorear",
      extraColorText: "30 dibujos para colorear, un boli de purpurina, pegatinas y filtros mágicos — y el dibujo se guarda como foto de verdad.",
      extraAbcTitle: "Letras escolares de verdad",
      extraAbcText: "Cada letra está hecha a mano con formas de letra escolar — no es una fuente de ordenador.",
      extraLangTitle: "Tres idiomas",
      extraLangText: "Neerlandés, inglés o español: un botón en el panel de padres y todo el juego cambia, voz incluida.",
      friendsTitle: "Los amiguitos te acompañan",
      friendsSub: "Charlie, Dilbi, Kaazie y Summi miran cada nivel. ¿Tres estrellas? ¡Aplausos!",
      oceanTitle: "Seguro como el fondo del mar",
      oceanSub: "Summi School no recopila nada. Todo se queda en vuestro dispositivo.",
      promiseAds: "Sin anuncios", promiseTracking: "Sin rastreo",
      promiseAccount: "Sin cuenta", promisePurchases: "Sin compras",
      oceanCta: "Lee la política de privacidad completa",
      footerLine: "Hecho con amor — y muchísimo papel de colores.",
      footerPrivacy: "Política de privacidad", footerContact: "Contacto"
    }
  };

  /* playful titles: per-letter hand-placed tilt, like PlayfulTitle */
  function playfulize(el) {
    var text = el.textContent;
    el.textContent = "";
    var words = text.split(" ");
    words.forEach(function (word, w) {
      var wordSpan = document.createElement("span");
      wordSpan.style.display = "inline-block";
      wordSpan.style.whiteSpace = "nowrap";
      for (var i = 0; i < word.length; i++) {
        var s = document.createElement("span");
        s.className = "pl";
        s.textContent = word[i];
        var idx = w * 7 + i;
        s.style.setProperty("--pl-tilt", (idx % 2 === 0 ? 2.4 : -2.4) + "deg");
        s.style.setProperty("--pl-y", (idx % 2 === 0 ? -2 : 2) + "px");
        wordSpan.appendChild(s);
      }
      el.appendChild(wordSpan);
      if (w < words.length - 1) el.appendChild(document.createTextNode(" "));
    });
  }

  function applyLanguage(lang) {
    var dict = I18N[lang] || I18N.nl;
    document.documentElement.lang = lang;
    document.title = dict.docTitle;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });
    document.querySelectorAll(".playful").forEach(playfulize);
    document.querySelectorAll(".lang-pill").forEach(function (pill) {
      pill.classList.toggle("active", pill.getAttribute("data-lang") === lang);
    });
    try { localStorage.setItem("summi_lang", lang); } catch (e) {}
  }

  function initialLanguage() {
    try {
      var saved = localStorage.getItem("summi_lang");
      if (saved && I18N[saved]) return saved;
    } catch (e) {}
    var langs = navigator.languages || [navigator.language || "en"];
    for (var i = 0; i < langs.length; i++) {
      var code = String(langs[i]).toLowerCase();
      if (code.indexOf("nl") === 0) return "nl";
      if (code.indexOf("es") === 0) return "es";
    }
    return "en";
  }

  document.querySelectorAll(".lang-pill").forEach(function (pill) {
    pill.addEventListener("click", function () {
      applyLanguage(pill.getAttribute("data-lang"));
    });
  });

  /* ================= the parade — same cast as in the game ================= */
  var CAST = ["vos", "konijn", "schaap", "eend", "uil", "poes", "hond", "egel",
              "pinguin", "leeuw", "aap", "schildpad", "flamingo", "eekhoorn",
              "zwaan", "dolfijn"];
  var paradeTrack = document.getElementById("parade");
  if (paradeTrack) {
    var makeRow = function () {
      CAST.forEach(function (key) {
        var img = document.createElement("img");
        img.src = "assets/art/cut_" + key + ".png";
        img.alt = "";
        img.loading = "lazy";
        paradeTrack.appendChild(img);
      });
    };
    makeRow();
    makeRow(); /* duplicated for the seamless -50% loop */
  }

  /* ================= gallery shelves ================= */
  var SHELF1 = ["menu_nl", "worldmap", "write_word", "math_build", "wk_farm",
                "words_pick", "levels_eenhoornwei", "math_compare", "write_snow",
                "coloring_stickers", "wordsmap", "math_celebration", "wk_sea",
                "write_celebration", "math_add", "menu_en"];
  var SHELF2 = ["words_compound", "mathmap", "wk_volcano", "write_space",
                "math_egg_carton", "words_leesplankje", "wkmap", "math_subtract",
                "coloring_demo", "words_build", "alphabet", "wk_celebration",
                "write_letter", "math_space_sum", "menu_es"];
  var SHELF3 = ["ph_menu", "ph_write", "ph_math", "ph_words", "ph_wk"];

  function fillShelf(id, names) {
    var track = document.getElementById(id);
    if (!track) return;
    var addAll = function () {
      names.forEach(function (name, i) {
        var img = document.createElement("img");
        img.src = "assets/shots/" + name + ".jpg";
        img.alt = "Summi School — " + name.replace(/_/g, " ");
        img.className = "shot";
        img.loading = "lazy";
        img.decoding = "async";
        img.style.setProperty("--tilt", ((i % 2 === 0 ? 1 : -1) * (0.8 + (i % 3) * 0.5)) + "deg");
        img.addEventListener("click", function () { openLightbox(img.src, img.alt); });
        track.appendChild(img);
      });
    };
    addAll();
    addAll(); /* duplicated for the seamless loop */
  }
  fillShelf("shelf1", SHELF1);
  fillShelf("shelf2", SHELF2);
  fillShelf("shelf3", SHELF3);

  /* ================= lightbox ================= */
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightboxImg");
  function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt || "";
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
  }
  function closeLightbox() {
    lightbox.hidden = true;
    lightboxImg.src = "";
    document.body.style.overflow = "";
  }
  document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !lightbox.hidden) closeLightbox();
  });

  /* ================= stars in the footer (index-hashed, deterministic) ================= */
  var starField = document.getElementById ? document.querySelector(".stars") : null;
  if (starField) {
    var PHI = 0.6180339887;
    for (var s = 0; s < 64; s++) {
      var star = document.createElement("i");
      var fx = (s * PHI) % 1;
      var fy = (s * PHI * PHI + 0.17) % 1;
      star.style.left = (fx * 100).toFixed(2) + "%";
      star.style.top = (fy * 100).toFixed(2) + "%";
      var size = 2 + ((s * 7) % 4);
      star.style.width = size + "px";
      star.style.height = size + "px";
      star.style.animationDelay = ((s % 9) * 0.45).toFixed(2) + "s";
      starField.appendChild(star);
    }
  }

  /* ================= reveal on scroll ================= */
  var revealIO = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        revealIO.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });
  document.querySelectorAll(".reveal").forEach(function (el) { revealIO.observe(el); });

  /* ================= top bar ================= */
  var topbar = document.getElementById("topbar");
  function onScrollTopbar() {
    topbar.classList.toggle("scrolled", window.scrollY > 40);
  }
  onScrollTopbar();

  /* ================= parallax (soft, layered-paper drift) ================= */
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var parallaxEls = reduceMotion ? [] :
    Array.prototype.slice.call(document.querySelectorAll("[data-parallax]"));
  var ticking = false;
  function applyParallax() {
    ticking = false;
    var vh = window.innerHeight;
    parallaxEls.forEach(function (el) {
      var rect = el.getBoundingClientRect();
      if (rect.bottom < -200 || rect.top > vh + 200) return;
      var f = parseFloat(el.getAttribute("data-parallax")) || 0;
      var delta = (rect.top + rect.height / 2 - vh / 2) * -f;
      el.style.setProperty("--par", delta.toFixed(1) + "px");
    });
  }
  window.addEventListener("scroll", function () {
    onScrollTopbar();
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(applyParallax);
    }
  }, { passive: true });
  applyParallax();

  /* ================= gameplay video: play only in view ================= */
  var video = document.getElementById("gameplay");
  if (video) {
    var videoIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          video.play().catch(function () {});
        } else {
          video.pause();
        }
      });
    }, { threshold: 0.3 });
    videoIO.observe(video);
  }

  /* ================= go ================= */
  applyLanguage(initialLanguage());
})();
