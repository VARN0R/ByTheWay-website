window.addEventListener('scroll', function() {
    var counter = document.getElementById('counter');
    var position = counter.getBoundingClientRect();

    // проверка, виден ли элемент
    if(position.top < window.innerHeight && position.bottom >= 0) {
        var countTo = parseInt(counter.getAttribute('data-count'));
        var count = parseInt(counter.innerText);
        var speed = Math.round(countTo / 300); // скорость отсчета

        var interval = setInterval(function() {
            if (count < countTo) {
                count += speed;
                counter.innerText = count;
            } else {
                counter.innerText = countTo + '+';
                clearInterval(interval);
            }


        }, 10);

    }
});
