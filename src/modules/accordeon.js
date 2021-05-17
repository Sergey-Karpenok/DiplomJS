const accordeon = () => {

    const accordeon = document.querySelector('.accordeon');


    accordeon.addEventListener('click', (e) => {
        let target = e.target;

        if (target.classList.contains('title')) {

            for (let item of accordeon.children) {
                if (item !== target.parentNode) {
                    item.classList.remove('active');
                };
            };
            target.parentNode.classList.toggle('active');
        }
    })
};

export default accordeon;