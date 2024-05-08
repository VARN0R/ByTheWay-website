function countAnimation() {
    let counter1000 = document.getElementById('counter1000');
    let counter50 = document.getElementById('counter50');
    let counter9 = document.getElementById('counter9');


    let countTo1000 = parseInt(counter1000.getAttribute('data-count'));

    let countTo50 = parseInt(counter50.getAttribute('data-count'));

    let countTo9 = parseInt(counter9.getAttribute('data-count'));


    function countAnim(end, duration, selector) {
        let start = 0;
        let currentFrame = 0;
        let totalFrames = Math.round(duration / (1000 / 60)); // 60 fps
        let countPerFrame = (end - start) / totalFrames;

        function updateCounter() {
            if (currentFrame < totalFrames) {
                start += countPerFrame;
                selector.innerText = Math.round(start);
                currentFrame++;
                requestAnimationFrame(updateCounter);
            } else {
                selector.innerText = end + '+';
            }
        }

        updateCounter();
    }

    let animationPlayed = false;
    window.addEventListener('scroll', function() {
        let position = counter1000.getBoundingClientRect();

        if (!animationPlayed && position.top < window.innerHeight && position.bottom >= 0) {
            countAnim(countTo1000, 6000, counter1000);
            countAnim(countTo50, 6000, counter50);
            countAnim(countTo9, 6000, counter9);
            animationPlayed = true;
        }

    });
}

export default countAnimation;
