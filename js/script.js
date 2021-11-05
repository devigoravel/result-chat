let loaderIphone  = document.querySelector('#loader');
let closeIphone = document.querySelector('.loader-container');
let input = document.querySelector('#focus');
let width = document.querySelector('.message');
let send = document.querySelector('#send');

input.onclick = () => {
    width.classList.add('width-up');
};

send.onclick = () => {
    width.classList.remove('width-up');
};


loaderIphone.onclick = () => {
    closeIphone.classList.toggle('fade-out');
};

autosize(document.querySelectorAll('textarea'));


var mediaQuery = window.matchMedia('(max-width: 391px)');

if (mediaQuery.matches) {
    let loader  = document.querySelector('#loader-iphone');
        let close = document.querySelector('.loader-container-iphone');

        loader.onclick = () => {
            close.classList.toggle('fade-out');
        };

        let input = document.querySelector('#focus');
        let chat = document.querySelector('.chat-field');
        let map = document.querySelector('.map-field');
        let send = document.querySelector('#send');
        let circle = document.querySelector('.circle');
        let width = document.querySelector('.message');

        input.onclick = () => {
            chat.classList.add('fade');
            map.classList.add('fa')
            circle.classList.add('circle-out')
            width.classList.add('width-up')
        };

        send.onclick = () => {
            chat.classList.remove('fade');
            map.classList.remove('fa');
            circle.classList.remove('circle-out');
        };
};
