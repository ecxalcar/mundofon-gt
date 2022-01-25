new Glider(document.querySelector('.glider-featured-slider'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    dots: false,
    duration: 0.90,
    itemWidth: 150,

    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    }
});