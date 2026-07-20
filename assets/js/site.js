/* Summi School site — parade, shelves, i18n, reveals, parallax, lightbox. */
(function () {
  "use strict";

  /* ?capture — QA hook: settle every animation/reveal for headless
     full-page screenshots (the site's SNAPSHOT_SETTLED). */
  var captureMode = new URLSearchParams(window.location.search).has("capture");
  if (captureMode) {
    document.documentElement.classList.add("capture");
  }

  /* ================= i18n ================= */
  var I18N = {
    nl: {
      docTitle: "Summi School · samen leren en spelen",
      heroTitle: "Summi School",
      heroTagline: "samen leren en spelen",
      heroSub: "Zeven vrolijke leerreizen voor kinderen van 3 tot 5 jaar: schrijven, rekenen, lezen, puzzelen, speuren, muziek en de wereld ontdekken. Alles wordt voorgelezen, in het Nederlands, Engels en Spaans.",
      heroCta: "Binnenkort in de App Store",
      heroCtaNote: "Geen account · geen reclame · geen tracking",
      statJourneys: "leerreizen", statLevels: "levels", statLanguages: "talen", statTracking: "tracking",
      writeChip: "leerreis 1", writeTitle: "Schrijven",
      writeSub: "Grote letters op het schoolbord",
      writeText: "Een vrolijk krijtje doet elke lijn voor, en dan is je kind aan de beurt. In 250 levels groeit dat van de allereerste <b>a</b> naar hele woorden. Bij drie sterren regent het confetti en klappen de vriendjes.",
      writeP1: "Elke letterstreek wordt eerst voorgedaan",
      writeP2: "Echte schoolschrijfletters",
      writeP3: "Geen foutschermen, je mag gewoon nog een keer",
      mathChip: "leerreis 2", mathTitle: "Rekenen",
      mathSub: "Tellen met appels en eieren",
      mathText: "Je kind sleept appels in het mandje en telt hardop mee: eerst tot 3, later tot 20. Halverwege komen de echte cijfers erbij, en het eindigt groots met 10 + 10 = 20.",
      mathP1: "Tellen, vergelijken, erbij en eraf",
      mathP2: "Elke som met papieren spulletjes",
      mathP3: "Cijfers verschijnen precies op tijd",
      wordsChip: "leerreis 3", wordsTitle: "Woordjes",
      wordsSub: "Leren lezen in het Toverbos",
      wordsText: "Van <b>mama</b> en <b>papa</b> naar <b>boom</b>, <b>roos</b> en <b>vos</b>: je kind leert woordjes herkennen, bouwen en lezen, letter voor letter. Helemaal aan het eind worden twee woordjes één: regen + boog = regenboog!",
      wordsP1: "Plaatje en woord horen bij elkaar",
      wordsP2: "Woorden bouwen, letter voor letter",
      wordsP3: "Elke letter wordt voorgelezen",
      wkChip: "leerreis 4", wkTitle: "Wereld",
      wkSub: "Weten hoe alles heet",
      wkText: "Wat eet de muis? Bij wie hoort het kuiken? Tien werelden vol weetjes over de boerderij, je eigen lijf, het bos, het weer, de zee en de ruimte, helemaal tot aan de regenboog.",
      wkP1: "Luister-, sleep- en zoekvragen",
      wkP2: "Trek de lijn van het kuiken naar de kip",
      wkP3: "De vulkaan barst écht uit",
      trioTitle: "En er kwamen er nog drie bij",
      trioSub: "Puzzels, speurtochten en muziek: samen nog eens 750 levels.",
      pzChip: "leerreis 5", pzCardTitle: "Puzzels",
      pzCardText: "Patronen afmaken, memory, sorteren op grootte en echte legpuzzels met wiebelrandjes. Het laatste level is een regenboog in zes stukken.",
      speurChip: "leerreis 6", speurCardTitle: "Speurtocht",
      speurCardText: "Doolhoven, zoekplaten en schaduwen raden. De allerjongsten oefenen er ongemerkt hun schrijfhand mee.",
      musicChip: "leerreis 7", musicCardTitle: "Muziek",
      musicCardText: "Ritmes natrommelen, liedjes spelen op de regenboogxylofoon en een slaperige dierenband wakker tikken. Geluid is hier de beloning.",
      videoTitle: "Kijk eens mee",
      videoSub: "Zo speelt Summi School: rustig en zonder haast.",
      galleryTitle: "Uit het prentenboek",
      gallerySub: "Elke wereld is met de hand geknipt en geplakt. Blader maar door.",
      extrasTitle: "En er is nog meer",
      extraColorTitle: "Vrij kleuren",
      extraColorText: "30 kleurplaten, een glitterpen, stickers en toverfilters. De tekening bewaar je daarna als echte foto.",
      extraAbcTitle: "Echte schoolletters",
      extraAbcText: "De letters volgen het Nederlandse schoolschrift en zijn stuk voor stuk met de hand gemaakt.",
      extraLangTitle: "Drie talen",
      extraLangText: "Nederlands, Engels of Spaans: één knop in het ouderpaneel en het hele spel wisselt mee, stem en al.",
      extraStarTitle: "De Sterrenboom",
      extraStarText: "Sterren sparen loont. Bij elke mijlpaal valt er een pakje uit de boom, met nieuw speelgoed of een kleurplaat erin.",
      friendsTitle: "De vriendjes doen mee",
      friendsSub: "Charlie, Dilbi, Kaazie en Summi kijken mee bij elk level. Drie sterren? Applaus!",
      oceanTitle: "Veilig als de diepe zee",
      oceanSub: "Summi School verzamelt niets. Alles blijft op jullie eigen apparaat.",
      promiseAds: "Geen reclame", promiseTracking: "Geen tracking",
      promiseAccount: "Geen account",
      oceanCta: "Lees het hele privacybeleid",
      footerLine: "Gemaakt met liefde en heel veel gekleurd papier.",
      footerPrivacy: "Privacybeleid", footerContact: "Contact"
    },
    en: {
      docTitle: "Summi School · learning and playing together",
      heroTitle: "Summi School",
      heroTagline: "learning and playing together",
      heroSub: "Seven cheerful learning journeys for children aged 3 to 5: writing, counting, reading, puzzles, treasure hunts, music and discovering the world. Every word is spoken aloud, in Dutch, English and Spanish.",
      heroCta: "Coming soon to the App Store",
      heroCtaNote: "No account · no ads · no tracking",
      statJourneys: "journeys", statLevels: "levels", statLanguages: "languages", statTracking: "tracking",
      writeChip: "journey 1", writeTitle: "Writing",
      writeSub: "Big letters on the school board",
      writeText: "A cheerful crayon draws every line first, then it's your child's turn. Over 250 levels that grows from the very first <b>a</b> into whole words. Three stars means confetti and applause from the friends.",
      writeP1: "Every stroke is shown first",
      writeP2: "Real school handwriting shapes",
      writeP3: "No fail screens, you simply try again",
      mathChip: "journey 2", mathTitle: "Math",
      mathSub: "Counting with apples and eggs",
      mathText: "Your child drags apples into the basket and counts along out loud: first to 3, later to 20. Halfway through the real digits join in, and it all ends big with 10 + 10 = 20.",
      mathP1: "Counting, comparing, adding, taking away",
      mathP2: "Every sum uses paper things",
      mathP3: "Digits arrive exactly on time",
      wordsChip: "journey 3", wordsTitle: "Words",
      wordsSub: "Learning to read in the Magic Forest",
      wordsText: "From <b>mom</b> and <b>dad</b> to <b>tree</b>, <b>rose</b> and <b>fox</b>: your child learns to recognize, build and read words, letter by letter. At the very end two little words become one: rain + bow = rainbow!",
      wordsP1: "Picture and word belong together",
      wordsP2: "Build words letter by letter",
      wordsP3: "Every letter is read aloud",
      wkChip: "journey 4", wkTitle: "World",
      wkSub: "Knowing what everything is called",
      wkText: "What does the mouse eat? Who does the chick belong to? Ten worlds full of things to know: the farm, your own body, the forest, the weather, the sea and space, all the way up to the rainbow.",
      wkP1: "Listen, drag and search questions",
      wkP2: "Draw the line from chick to hen",
      wkP3: "The volcano really erupts",
      trioTitle: "Then three more came along",
      trioSub: "Puzzles, treasure hunts and music: another 750 levels.",
      pzChip: "journey 5", pzCardTitle: "Puzzles",
      pzCardText: "Finish the pattern, play memory, sort by size and build real jigsaws with wobbly edges. The last level is a rainbow in six pieces.",
      speurChip: "journey 6", speurCardTitle: "Treasure hunt",
      speurCardText: "Mazes, seek-and-find scenes and shadow matching. The youngest players are secretly training their writing hand.",
      musicChip: "journey 7", musicCardTitle: "Music",
      musicCardText: "Drum rhythms back, play tunes on the rainbow xylophone and tap a sleepy animal band awake. Here, sound itself is the reward.",
      videoTitle: "Come take a look",
      videoSub: "This is how Summi School plays: calm and unhurried.",
      galleryTitle: "From the picture book",
      gallerySub: "Every world is cut and glued by hand. Have a browse.",
      extrasTitle: "And there is more",
      extraColorTitle: "Free coloring",
      extraColorText: "30 coloring pages, a glitter pen, stickers and magic filters. Finished drawings save as real photos.",
      extraAbcTitle: "Real school letters",
      extraAbcText: "The letterforms follow Dutch school handwriting, each one made by hand.",
      extraLangTitle: "Three languages",
      extraLangText: "Dutch, English or Spanish: one switch in the parents' panel and the whole game follows, voice and all.",
      extraStarTitle: "The Star Tree",
      extraStarText: "Stars add up. At every milestone a wrapped present drops from the tree, with a new toy or coloring page inside.",
      friendsTitle: "The friends play along",
      friendsSub: "Charlie, Dilbi, Kaazie and Summi watch every level. Three stars? Applause!",
      oceanTitle: "Safe as the deep sea",
      oceanSub: "Summi School collects nothing. Everything stays on your own device.",
      promiseAds: "No ads", promiseTracking: "No tracking",
      promiseAccount: "No account",
      oceanCta: "Read the full privacy policy",
      footerLine: "Made with love and a whole lot of colored paper.",
      footerPrivacy: "Privacy policy", footerContact: "Contact"
    },
    es: {
      docTitle: "Summi School · aprendemos y jugamos juntos",
      heroTitle: "Summi School",
      heroTagline: "aprendemos y jugamos juntos",
      heroSub: "Siete alegres viajes de aprendizaje para niños de 3 a 5 años: escribir, contar, leer, resolver puzles, buscar, hacer música y descubrir el mundo. Todo se lee en voz alta, en neerlandés, inglés y español.",
      heroCta: "Muy pronto en el App Store",
      heroCtaNote: "Sin cuenta · sin anuncios · sin rastreo",
      statJourneys: "viajes", statLevels: "niveles", statLanguages: "idiomas", statTracking: "rastreo",
      writeChip: "viaje 1", writeTitle: "Escribir",
      writeSub: "Letras grandes en la pizarra",
      writeText: "Una cera alegre dibuja cada línea primero, y luego le toca a tu peque. En 250 niveles pasa de la primera <b>a</b> a palabras enteras. Con tres estrellas llueve confeti y los amiguitos aplauden.",
      writeP1: "Cada trazo se muestra primero",
      writeP2: "Letra escolar de verdad",
      writeP3: "Sin pantallas de error: se intenta otra vez",
      mathChip: "viaje 2", mathTitle: "Contar",
      mathSub: "Contamos con manzanas y huevos",
      mathText: "Tu peque arrastra manzanas a la cesta y cuenta en voz alta: primero hasta 3, luego hasta 20. A mitad de camino llegan los números de verdad, y el final es a lo grande: 10 + 10 = 20.",
      mathP1: "Contar, comparar, sumar y restar",
      mathP2: "Cada suma con cositas de papel",
      mathP3: "Los números llegan justo a tiempo",
      wordsChip: "viaje 3", wordsTitle: "Palabritas",
      wordsSub: "Aprender a leer en el Bosque Mágico",
      wordsText: "De <b>mamá</b> y <b>papá</b> a <b>árbol</b>, <b>rosa</b> y <b>zorro</b>: tu peque aprende a reconocer, construir y leer palabritas, letra por letra, hasta el arcoíris entero.",
      wordsP1: "El dibujo y la palabra van juntos",
      wordsP2: "Construye palabras letra a letra",
      wordsP3: "Cada letra se lee en voz alta",
      wkChip: "viaje 4", wkTitle: "Mundo",
      wkSub: "Saber cómo se llama todo",
      wkText: "¿Qué come el ratón? ¿De quién es el pollito? Diez mundos llenos de cosas por saber: la granja, tu propio cuerpo, el bosque, el tiempo, el mar y el espacio, hasta llegar al arcoíris.",
      wkP1: "Preguntas de escuchar, arrastrar y buscar",
      wkP2: "Une el pollito con la gallina",
      wkP3: "El volcán entra en erupción de verdad",
      trioTitle: "Y llegaron tres viajes más",
      trioSub: "Puzles, búsquedas y música: otros 750 niveles.",
      pzChip: "viaje 5", pzCardTitle: "Puzles",
      pzCardText: "Completar patrones, memory, ordenar por tamaño y puzles de verdad con bordes ondulados. El último nivel es un arcoíris en seis piezas.",
      speurChip: "viaje 6", speurCardTitle: "Exploradores",
      speurCardText: "Laberintos, láminas de buscar y sombras por adivinar. Los más pequeños entrenan sin darse cuenta la mano de escribir.",
      musicChip: "viaje 7", musicCardTitle: "Música",
      musicCardText: "Repetir ritmos en el tambor, tocar melodías en el xilófono arcoíris y despertar a una banda de animales dormilones. Aquí el premio es el sonido.",
      videoTitle: "Ven a mirar",
      videoSub: "Así se juega Summi School: con calma y sin prisa.",
      galleryTitle: "Del libro de dibujos",
      gallerySub: "Cada mundo está recortado y pegado a mano. Echa un vistazo.",
      extrasTitle: "Y hay más",
      extraColorTitle: "Colorear",
      extraColorText: "30 dibujos para colorear, un boli de purpurina, pegatinas y filtros mágicos. El dibujo terminado se guarda como una foto de verdad.",
      extraAbcTitle: "Letras escolares de verdad",
      extraAbcText: "Las letras siguen la letra escolar neerlandesa y están hechas a mano, una por una.",
      extraLangTitle: "Tres idiomas",
      extraLangText: "Neerlandés, inglés o español: un botón en el panel de padres y todo el juego cambia, voz incluida.",
      extraStarTitle: "El Árbol de Estrellas",
      extraStarText: "Las estrellas suman. En cada meta cae un regalito del árbol, con un juguete nuevo o un dibujo para colorear dentro.",
      friendsTitle: "Los amiguitos te acompañan",
      friendsSub: "Charlie, Dilbi, Kaazie y Summi miran cada nivel. ¿Tres estrellas? ¡Aplausos!",
      oceanTitle: "Seguro como el fondo del mar",
      oceanSub: "Summi School no recopila nada. Todo se queda en vuestro dispositivo.",
      promiseAds: "Sin anuncios", promiseTracking: "Sin rastreo",
      promiseAccount: "Sin cuenta",
      oceanCta: "Lee la política de privacidad completa",
      footerLine: "Hecho con amor y muchísimo papel de colores.",
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
              "kikker", "toekan", "papegaai", "draak", "zwaan", "dolfijn"];
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

  /* ================= stat count-up (paper odometer) ================= */
  function countUp(el) {
    var target = parseInt(el.getAttribute("data-count"), 10) || 0;
    var duration = 1400;
    var start = null;
    function tick(ts) {
      if (start === null) start = ts;
      var t = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.round(target * eased);
      if (t < 1) window.requestAnimationFrame(tick);
    }
    window.requestAnimationFrame(tick);
  }
  var counters = document.querySelectorAll("[data-count]");
  if (captureMode) {
    counters.forEach(function (el) { el.textContent = el.getAttribute("data-count"); });
  } else if (counters.length) {
    var countIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          countUp(entry.target);
          countIO.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { countIO.observe(el); });
  }

  /* ================= gallery shelves ================= */
  var SHELF1 = ["menu_nl", "worldmap", "write_word", "math_build", "wk_farm",
                "words_pick", "levels_eenhoornwei", "pz_jigsaw", "math_compare",
                "write_snow", "coloring_stickers", "wordsmap", "music_band",
                "math_celebration", "wk_sea", "write_celebration", "speur_seek",
                "math_add", "menu_en"];
  var SHELF2 = ["words_compound", "mathmap", "wk_volcano", "speur_maze",
                "write_space", "math_egg_carton", "words_leesplankje", "wkmap",
                "music_circus", "math_subtract", "coloring_demo", "words_build",
                "pz_pattern", "alphabet", "wk_celebration", "write_letter",
                "rewardroom", "math_space_sum", "menu_es"];
  var SHELF3 = ["ph_menu", "ph_write", "ph_math", "ph_words", "ph_wk"];

  function fillShelf(id, names) {
    var track = document.getElementById(id);
    if (!track) return;
    var addAll = function () {
      names.forEach(function (name, i) {
        var img = document.createElement("img");
        img.src = "assets/shots/" + name + ".jpg";
        img.alt = "Summi School · " + name.replace(/_/g, " ");
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
  var starField = document.querySelector(".stars");
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

  /* ================= confetti dots (deterministic paper snippets) ================= */
  document.querySelectorAll("[data-confetti]").forEach(function (host) {
    var COLORS = ["#F2669C", "#63C4EB", "#7ACA4F", "#FFC93D", "#8B6ED0", "#3BB89F"];
    var PHI2 = 0.6180339887;
    for (var c = 0; c < 26; c++) {
      var dot = document.createElement("i");
      dot.className = "confetti-dot";
      dot.style.left = ((c * PHI2) % 1 * 100).toFixed(2) + "%";
      dot.style.top = ((c * PHI2 * PHI2 + 0.31) % 1 * 100).toFixed(2) + "%";
      dot.style.background = COLORS[c % COLORS.length];
      dot.style.setProperty("--tilt", (((c * 37) % 44) - 22) + "deg");
      dot.style.animationDelay = ((c % 7) * 0.8).toFixed(2) + "s";
      host.appendChild(dot);
    }
  });

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
