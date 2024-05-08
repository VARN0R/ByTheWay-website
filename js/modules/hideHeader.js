function hideHeader() {
    let lastScroll = 0;
    const header = document.querySelector('.header');

    window.addEventListener('scroll',function(){
        const scrollTop = window.scrollY;

        if (scrollTop > lastScroll) {
            header.classList.add('hideHeader'); // скрываем header при скролле вниз
        } else {
            header.classList.remove('hideHeader'); // показываем header при скролле вверх
        }

        lastScroll = scrollTop;
    });
}

export default hideHeader;