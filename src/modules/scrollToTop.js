const scrollToTop = () => {

    const goTopBtn = document.querySelector('.up');

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
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -80);
            setTimeout(backToTop, 50);
        }
    };

    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);

};

export default scrollToTop;