/* ===========================================================
   感情 — shared nav / footer / behaviors
   <body data-nav="home|joy|trust|fear|surprise|sadness|disgust|anger|anticipation|desire">
   =========================================================== */
(function () {
  var wheel = [
    ["joy.html", "joy", "喜び"],
    ["trust.html", "trust", "信頼"],
    ["fear.html", "fear", "恐れ"],
    ["surprise.html", "surprise", "驚き"],
    ["sadness.html", "sadness", "悲しみ"],
    ["disgust.html", "disgust", "嫌悪"],
    ["anger.html", "anger", "怒り"],
    ["anticipation.html", "anticipation", "期待"]
  ];

  var navHTML =
    '<header class="nav" id="nav"><div class="nav-inner">' +
    '<a class="brand" href="index.html"><small>人間の</small>感情</a>' +
    '<nav class="nav-links" id="navlinks">' +
      '<a href="index.html" data-key="home">感情の輪</a>' +
      '<a href="desire.html" data-key="desire" style="border-left:1px solid var(--line);padding-left:20px;margin-left:-4px">渇愛・執着</a>' +
    '</nav>' +
    '<button class="burger" id="burger" aria-label="メニュー"><span></span><span></span><span></span></button>' +
    '</div></header>';

  var footWheelLinks = wheel.map(function (e) {
    return '<a href="' + e[0] + '">' + e[2] + '</a>';
  }).join("");

  var footHTML =
    '<footer><div class="wrap">' +
      '<div class="foot-grid">' +
        '<div class="foot-brand"><div class="brand" style="font-family:var(--font-serif);font-weight:700;font-size:1.05rem">人間の感情</div>' +
          '<p>プルチックの感情の輪を手がかりに、感情そのものではなく、感情と自分を同一視しないための考え方を個人的に整理したノートです。</p></div>' +
        '<div class="foot-col"><h4>感情の輪(8つ)</h4>' + footWheelLinks + '</div>' +
        '<div class="foot-col"><h4>輪の外側</h4><a href="desire.html">欲・渇愛・執着</a></div>' +
      '</div>' +
      '<div class="foot-bottom">' +
        '<p class="foot-disc">このサイトは、専門家ではない個人が、心理学のロバート・プルチックによる感情の輪の考え方や、仏教の一般的な枠組みを参照しながら、感情と執着について自分で考えたことを整理した個人的なノートです。特定の研究や統計を主張するものではなく、内容の正確性を保証するものでもありません。診断・治療・医学的助言に代わるものではありません。心身の不調がある場合は、医療機関や専門家にご相談ください。</p>' +
        '<p class="foot-copy">© 2026 人間の感情 ／ 個人ノート ・ <a href="../">← m-note トップ</a></p>' +
      '</div>' +
    '</div></footer>';

  var topbar = document.querySelector(".mnote-topbar");
  if (topbar) {
    topbar.insertAdjacentHTML("afterend", navHTML);
  } else {
    document.body.insertAdjacentHTML("afterbegin", navHTML);
  }
  document.body.insertAdjacentHTML("beforeend", footHTML);

  var key = document.body.getAttribute("data-nav");
  if (key === "home" || key === "desire") {
    var active = document.querySelector('.nav-links a[data-key="' + key + '"]');
    if (active) active.classList.add("active");
  }

  var nav = document.getElementById("nav");
  window.addEventListener("scroll", function () {
    nav.classList.toggle("scrolled", window.scrollY > 20);
  });

  var burger = document.getElementById("burger");
  var links = document.getElementById("navlinks");
  burger.addEventListener("click", function () { links.classList.toggle("open"); });
  links.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () { links.classList.remove("open"); });
  });

  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: .12 });
  document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
})();
