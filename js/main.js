console.log('hello from main js');

$('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    dots: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2500
})