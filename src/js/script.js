
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  // 全ての img に loading="lazy" を付与（既に属性がある場合は上書きしない）
  document.querySelectorAll('img').forEach(function(img){
    if (!img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }
  });

  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop:true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });


});
