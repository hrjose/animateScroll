var controller = new ScrollMagic.Controller();

$('.avion').css({
    'position': 'relative',
    'transform': 'rotate(45deg)'
});


var scena = new ScrollMagic.Scene({
    triggerElement: '.content',
    duration: '400px',
    offset: '-200px'
})
    .setTween('.avion', {
        'left': '500px',
        'top': '400px',
    })
    .addIndicators({ name: "Primera" })
    .addTo(controller);


var scena2 = new ScrollMagic.Scene({
    triggerElement: '.content',
    duration: '300px',
    offset: '200px'
})
    .setTween('.avion', {
        'transform': 'rotate(-45deg)',
        'left': '800px'
    })
    .addIndicators({ name: "Segunda" })
    .addTo(controller);


var scena3 = new ScrollMagic.Scene({
    triggerElement: '.content',
    duration: '400px',
    offset: '500px'
})
    .setTween('.avion', {
        'left': '1000px',
        'top': '50px'
    })
    .addIndicators({ name: "tercera" })
    .addTo(controller);



    AOS.init();
    //scena.destroy(true); para destruir la scena

    $('.portfolio-slides').slick({
        infinite        : true,
        slidesToShow    : 3,
        slidesToScroll  : 1,
        mobileFirst     : true
      });
      
      
      $('.portfolio-slides').slickLightbox({
        itemSelector        : 'a',
        navigateByKeyboard  : true
      });

