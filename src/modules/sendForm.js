const sendForm = () => {

    const callbackForm = document.getElementById('callback-form'),
        errorMessage = 'Что-то пошло не так...',
        loadMessage = 'Загрузка...',
        sucsessMesage = `Заявка отправлена, мы скоро с вами свяжемся`,
        statusMessage = document.createElement('div'),
        modalOvelay = document.querySelector('.modal-overlay'),
        modalCallback = document.querySelector('.modal-callback');

    statusMessage.textContent = 'Все в порядке';
    statusMessage.style.cssText = `font-size: 2rem; color: green`;

    callbackForm.addEventListener('submit', (e) => {
        e.preventDefault();
        callbackForm.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;
        const formData = new FormData(callbackForm);
        let body = {};
        formData.forEach((val, key) => {
            body[key] = val;
        });

        postData(body)
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('Ошибка статус не равен 200');
                }
                statusMessage.textContent = sucsessMesage;
                setTimeout(() => {
                    statusMessage.remove()
                    modalOvelay.style.display = 'none';
                    modalCallback.style.display = 'none';
                }, 3000)
            })
            .catch((error) => {
                statusMessage.textContent = errorMessage;
                console.log(error);
                setTimeout(() => statusMessage.remove(), 3000)
            });

        for (let item of callbackForm) {
            if (!item.classList.contains('button')) {
                item.value = '';
            }
        };

    });


    const postData = (data) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    };

};

export default sendForm;