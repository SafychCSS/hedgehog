document.addEventListener('DOMContentLoaded', function() {
    let body = document.querySelector('body'),
        hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu');

    hamburger.addEventListener('click', function() {
        this.classList.toggle('is-active');
        menu.classList.toggle('menu_active');
    });

    if (document.body.clientWidth < 1025) {
        const li = document.createElement('li'),
            phone = document.createElement('div'),
            copyPhone = document.querySelector('.phone__block ');

        copyPhone.classList.remove('phone__block_header');
        phone.classList.add('phone');
        li.classList.add('menu__item', 'menu__item_phone');

        phone.appendChild(copyPhone);
        li.appendChild(phone);
        menu.appendChild(li);
    }

    const openModal = document.querySelectorAll('.js-open-modal'),
        closeModal = document.querySelectorAll('.js-modal-close');
    
    if (openModal.length > 0) {
        for (let i = 0; i < openModal.length; i += 1) {
            openModal[i].addEventListener('click', function (e) {
                const modalName = openModal[i].getAttribute('href').replace('#', '');
                e.preventDefault();

                const currentModal = document.querySelector(`[data-modal=${modalName}]`);

                currentModal.classList.add('modal_active');
            })
        }
    }

    if (closeModal.length > 0) {
        for (let i = 0; i < closeModal.length; i += 1) {
            closeModal[i].addEventListener('click', function (e) {
                this.closest('.modal').classList.remove('modal_active');
                e.preventDefault();
            });
        }
    }

    const formCheckbox = document.querySelectorAll('.js-checkbox-form'),
        formBtn = document.querySelector('.modal__btn'),
        inputName = document.querySelector('.js-input-name');

    const jsForm = document.querySelector('.js-form');

    jsForm.addEventListener('change', function (e) {
        if (formCheckbox[0].checked && formCheckbox[1].checked) {
            formCheckbox[2].setAttribute('disabled', true);
            formBtn.setAttribute('disabled', true);
        } else {
            formCheckbox[2].removeAttribute('disabled');
            formBtn.removeAttribute('disabled');
        }

        if (formCheckbox[0].checked) {
            formBtn.setAttribute('disabled', true);
        } else {
            formBtn.removeAttribute('disabled');
        }

        if (formCheckbox[2].checked) {
            inputName.setAttribute('disabled', true);
        } else {
            inputName.removeAttribute('disabled');
        }
    });

});