$(document).ready(function () {
  // Hero Slider
  var slider = tns({
    container: ".hero-slider",
    items: 1,
    slideBy: "page",
    loop: true,
    axis: "vertical",
    autoplay: true,
    autoplayButtonOutput: false,
    controlsContainer: ".my-control",
    nav: false,
    speed: 1000,
  });

  // Graet Team Slider
  var slider = tns({
    items: 3,
    autoWidth: true,
    loop: true,
    mouseDrag: true,
    gutter: 65,
    container: "#autoWidth-loop",
    controlsContainer: ".my-control",
    swipeAngle: false,
    speed: 400,
    navPosition: "bottom",
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      480: {
        items: 1,
        gutter: 390,
        nav: false,
      },

      767: {
        items: 2,
        gutter: 65,
        nav: true,
      },
      991: {
        items: 2,
        gutter: 65,
        nav: true,
      },
    },
  });

  // Client Slider

  var slider = tns({
    container: "#center",
    items: 1,
    slideBy: 1,
    swipeAngle: false,
    loop: true,
    mouseDrag: true,
    autoplay: true,
    autoplayButtonOutput: false,
    controlsContainer: ".my-control",
    nav: false,
    speed: 400,
  });

  // Counter js
  jQuery(".dc").animationCounter({
    start: 0,
    end: 900,
    step: 1,
    delay: 40,
  });
  jQuery(".sd").animationCounter({
    start: 0,
    end: 550,
    step: 1,
    delay: 70,
  });
  jQuery(".mc").animationCounter({
    start: 0,
    end: 150,
    step: 1,
    delay: 200,
  });
  jQuery(".aw").animationCounter({
    start: 0,
    end: 1200,
    step: 1,
    delay: 30,
  });
});
