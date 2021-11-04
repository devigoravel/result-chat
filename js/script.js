let loaderIphone  = document.querySelector('#loader');
let closeIphone = document.querySelector('.loader-container');

loaderIphone.onclick = () => {
    closeIphone.classList.toggle('fade-out');
};



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

        input.onclick = () => {
            chat.classList.add('fade');
            map.classList.add('fa')
            circle.classList.add('circle-out')
        };

        send.onclick = () => {
            chat.classList.remove('fade');
            map.classList.remove('fa');
            circle.classList.remove('circle-out');
        };
};
