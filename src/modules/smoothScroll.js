const smoothScroll = () => {

    const anchors = document.querySelectorAll('a[href*="#"]')

    for (let anchor of anchors) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href').substr(1)
            console.log('blockID: ', blockID);

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            })
        })
    }

};

export default smoothScroll;