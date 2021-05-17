const carousel = () => {

    const servicesSlide = document.querySelectorAll('.services-slide'),
        servicesCarousel = document.querySelector('.services-carousel'),
        arrowLeft = document.querySelector('.arrow-left'),
        arrowRight = document.querySelector('.arrow-right'),
        modalOvelay = document.querySelector('.modal-overlay'),
        modalCallback = document.querySelector('.modal-callback'),
        absolute = document.querySelectorAll('.absolute');


    let position = 0;

    const prevSlide = () => {
        --position;
        if (position >= 0) {
            servicesCarousel.style.transform = `translateX(-${position * 33}%)`
        } else position = 0;
    };

    const nextSlide = () => {
        ++position;
        if (position <= 3) {
            servicesCarousel.style.transform = `translateX(-${position * 33}%)`
        } else position = 3;
    };

    const controlSlider = () => {
        arrowLeft.addEventListener('click', prevSlide)
        arrowRight.addEventListener('click', nextSlide)
    };
    controlSlider();


    absolute.forEach((item) => {
        item.addEventListener('click', () => {
            modalOvelay.style.display = 'block';
            modalCallback.style.display = 'block';
        })
    });

};

export default carousel;