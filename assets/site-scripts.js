
function heroFeaturedSlider() {
    let slider = document.getElementsByClassName('glider-featured-slider');

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
}

window.addEventListener('load', function() {
    heroFeaturedSlider();
});

let slider = document.getElementById('heroFeaturedSlider');
let getSectionId = slider.getAttribute('data-sliderId');
console.log(getSectionId);

document.addEventListener("shopify:section:load", function(event) {
    if (event.detail.sectionId == getSectionId ) {
        heroFeaturedSlider();
    }
});