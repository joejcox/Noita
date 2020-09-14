$(document).ready(function() {
  $(".screenshots").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    thumbsPrerendered: true,
    navigation: true,
    dots: false,
    thumbItemClass: "owl-thumb-item",
    thumbContainerClass: "owl-thumbs",
    thumbImage: false,
    navigationText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>"
    ],
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 1,
        nav: false
      },
      1000: {
        items: 1,
        nav: false
      }
    }
  });
});
