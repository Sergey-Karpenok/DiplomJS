const modalMenu = () => {

    const modalOvelay = document.querySelector('.modal-overlay'),
        modalCallback = document.querySelector('.modal-callback'),
        btnCallback = document.querySelectorAll('.callback-btn'),
        buttonServices = document.querySelector('.button-services'),
        modalClose = document.querySelector('.modal-close');

    btnCallback.forEach((item) => {
        item.addEventListener('click', () => {
            modalOvelay.style.display = 'block';
            modalCallback.style.display = 'block';
        })
    });

    buttonServices.addEventListener('click', () => {
        modalOvelay.style.display = 'block';
        modalCallback.style.display = 'block';
    });

    modalOvelay.addEventListener('click', () => {
        modalOvelay.style.display = 'none';
        modalCallback.style.display = 'none';
    });

    modalClose.addEventListener('click', () => {
        modalOvelay.style.display = 'none';
        modalCallback.style.display = 'none';
    });

};

export default modalMenu;