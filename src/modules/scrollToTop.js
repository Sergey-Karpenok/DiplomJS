const scrollToTop = () => {

    const goTopBtn = document.querySelector('.up'),
        headerPanel = document.querySelector('.top-slider');
    console.log('headerPanel: ', headerPanel);


    const trackScroll = () => {
        const scrolled = window.pageYOffset,
            coords = document.documentElement.clientHeight;

        if (scrolled < coords) {
            goTopBtn.classList.add('up-hiden');
        }
        if (scrolled > coords) {
            goTopBtn.classList.remove('up-hiden');
        }
    };

    const backToTop = () => {
        headerPanel.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);

};

export default scrollToTop;