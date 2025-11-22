/* intro部分 */
$(window).on('load', function(){
  // まずふわっと表示
  $('#intro').addClass('show');

  // 1秒後にフェードアウト
  setTimeout(function(){
    $('#intro').addClass('fade-out');
  }, 2000); // 2秒くらいにすると自然
});


/* ページスクロール */
document.addEventListener("scroll", function() {
  const elements = document.querySelectorAll(".fade-in");
  const windowHeight = window.innerHeight;

  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    if (position < windowHeight - 100) {
      el.classList.add("visible");
    }
  });
});

let lastScroll = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", function() {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    // 下にスクロール → ヘッダー隠す（透明＋上に移動）
    header.classList.add("hide");
  } else {
    // 上にスクロール → ヘッダー表示（透けながら戻る）
    header.classList.remove("hide");
  }

  lastScroll = currentScroll;
});


