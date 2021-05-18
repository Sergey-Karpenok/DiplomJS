const validate = () => {
    const form = document.getElementById('callback-form');

    form.addEventListener('input', (e) => {
        let target = e.target;

        if (target.name === 'fio') {
            target.value = target.value.replace(/[^а-яА-Я\ ]/g, '');
        }

        if (target.name === 'tel') {
            target.value = target.value.replace(/[^\+\d]/g, '');
        }
    })
};

export default validate;