
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

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
