$("document").ready(function(){
  var myswiper = new Swiper(".testimonial-innerslider", {
        loop: true,
        slidesPerView:1,
        spaceBetween: 15,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
         pagination: {
          el: ".swiper-pagination",
           clickable: true,
      },
        breakpoints: {
            480: {
              slidesPerView: 1,
              spaceBetween: 20,
              allowTouchMove: true,
            },
            580: {
              slidesPerView: 2,
              spaceBetween: 20,
              allowTouchMove: true,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
              allowTouchMove: true,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20
            }
        }
    });
});

