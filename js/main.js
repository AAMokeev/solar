$('.tariff__slider').slick({
    prevArrow: '<img src="images/arrow-prev.svg" alt="" class="tariff__slider-prev-arrow">',
    nextArrow: '<img src="images/arrow-next.svg" alt="" class="tariff__slider-next-arrow">',
    responsive: [ {
        breakpoint: 501,
        settings: {
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
          vertical: true,
          dots: true,
          }
        }
      ],
  });

  $('.clients__slider').slick({
    prevArrow: '<img src="images/arrow-prev.svg" alt="" class="clients__slider-prev-arrow">',
    nextArrow: '<img src="images/arrow-next.svg" alt="" class="clients__slider-next-arrow">',
    autoplay: true,
    autoplaySpeed: 2000,
  });