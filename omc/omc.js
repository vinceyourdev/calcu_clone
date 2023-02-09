

const burger = document.querySelector('#burger');
const ul = document.querySelector('#ul');
const body = document.querySelector('body');

burger.addEventListener('click', function() {
    ul.classList.toggle('open')
});

