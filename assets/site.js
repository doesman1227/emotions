/* ===========================================================
   感情 — shared nav / footer / behaviors
   <body data-nav="home|desire|anger|sadness|joy|anxiety|disgust">
   =========================================================== */
(function () {
  var emotions = [
    ["desire.html", "desire", "欲"],
    ["anger.html", "anger", "怒り"],
    ["sadness.html", "sadness", "悲しみ"],
    ["joy.html", "joy", "喜び"],
    ["anxiety.html", "anxiety", "不安"],
    ["disgust.html", "disgust", "嫌悪"]
  ];

  var navLinks = emotions.map(function (e) {
    return '<a href="' + e[0] + '" data-key="' + e[1] + '">' + e[2] + '</a>';
  }).join("");

  var navHTML =
    '<header class="nav" id="nav"><div class="nav-inner">' +
    '<a class="brand" href="index.html"><small>人間の</small>感情</a>' +
    '<nav class="nav-links" id="navlinks"><a href="index.html" data-key="home">感情の環</a>' + navLinks + '</nav>' +
    '<button class="burger" id="burger" aria-label="メニュー"><span></span><span></span><span></span></button>' +
    '</div></header>';

  var footHTML =
    '<footer><div class="wrap">' +
      '<div class="foot-grid">' +
        '<div class="foot-brand"><div class="brand" style="font-family:var(--font-serif);font-weight:700;font-size:1.05rem">人間の感情</div>' +
          '<p>感情そのものを消すのではなく、感情と自分を同一視しないための考え方を、6つの感情から個人的に整理したノートです。</p></div>' +
        '<div class="foot-col"><h4>6つの感情</h4>' +
          '<a href="desire.html">欲</a><a href="anger.html">怒り</a><a href="sadness.html">悲しみ</a></div>' +
        '<div class="foot-col"><h4>&nbsp;</h4>' +
          '<a href="joy.html">喜び</a><a href="anxiety.html">不安</a><a href="disgust.html">嫌悪</a></div>' +
      '</div>' +
      '<div class="foot-bottom">' +
        '<p class="foot-disc">このサイトは、専門家ではない個人が、仏教の考え方や心理学の一般的な枠組みを参照しながら、感情と執着について自分で考えたことを整理した個人的なノートです。特定の研究や統計を主張するものではなく、内容の正確性を保証するものでもありません。診断・治療・医学的助言に代わるものではありません。心身の不調がある場合は、医療機関や専門家にご相談ください。</p>' +
        '<p class="foot-copy">© 2026 人間の感情 ／ 個人ノート ・ <a href="../">← m-note トップ</a></p>' +
      '</div>' +
    '</div></footer>';

  document.body.insertAdjacentHTML("afterbegin", navHTML);
  document.body.insertAdjacentHTML("beforeend", footHTML);

  var key = document.body.getAttribute("data-nav");
  if (key) {
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
