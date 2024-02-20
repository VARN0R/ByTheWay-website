window.addEventListener('scroll', function() {
    let counter1000 = document.getElementById('counter1000');
    let counter50 = document.getElementById('counter50');
    let counter9 = document.getElementById('counter9');
    let position = counter1000.getBoundingClientRect();

    // проверка, виден ли элемент
    if(position.top < window.innerHeight && position.bottom >= 0) {
        let countTo1000 = parseInt(counter1000.getAttribute('data-count'));
        let count1000 = parseInt(counter1000.innerText);
        let speed1000 = Math.round(countTo1000 / 300); // скорость отсчета

        let countTo50 = parseInt(counter50.getAttribute('data-count'));
        let count50 = parseInt(counter50.innerText);
        let speed50 = Math.round(countTo50 / 100); // скорость отсчета

        let countTo9 = parseInt(counter9.getAttribute('data-count'));
        let count9 = parseInt(counter9.innerText);
        let speed9 = Math.round(countTo9 / 9); // скорость отсчета

        let interval1000 = setInterval(function() {
            if (count1000 < countTo1000) {
                count1000 += speed1000;
                counter1000.innerText = count1000;
            } else {
                counter1000.innerText = countTo1000 + '+';
                clearInterval(interval1000);
            }
           

        }, 10);

        let interval50 = setInterval(function(){
            if (count50 < countTo50) {
                count50 += speed50;
                counter50.innerText = count50;
            } else {
                counter50.innerText = countTo50 + '+';
                clearInterval(interval50);
            }
        }, 70);
        
        
        let interval9 = setInterval(function(){
            if (count9 < countTo9) {
                count9 += speed9;
                counter9.innerText = count9;
            } else {
                counter9.innerText = countTo9 + '+';
                clearInterval(interval9);
            }
        }, 360);
    }
});
