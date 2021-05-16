const carousel = () => {

    const servicesSlide = document.querySelectorAll('.services-slide'),
        arrowLeft = document.querySelector('.arrow-left'),
        arrowRight = document.querySelector('.arrow-right');


    let position = 0;

    const controlSlider = () => {
        arrowLeft.addEventListener('click', () => {
            --position;
            console.log('position: ', position);
        })
        arrowRight.addEventListener('click', () => {
            ++position;
            console.log('position: ', position);
        })
    };
    controlSlider();

    // const prevSlide = () => {
    //     --position;
    //     console.log('position: ', position);

    // };
    // const nextSlide = () => {
    //     ++position;
    //     console.log('position: ', position);

    // };

};

export default carousel;