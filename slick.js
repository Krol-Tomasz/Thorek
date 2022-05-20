
$('.scroll-tray').slick(
  {
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay:true,
  mobileFirst: true,
  autoplaySpeed: 2000,
  responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 996,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2
          }
        }
      ]
}
);
	