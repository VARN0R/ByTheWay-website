const buttonApple = document.querySelector('.btw_buttons_apple');
const buttonGoogle = document.querySelector('.btw_buttons_google');
const tryBotMain = document.getElementById('tryBotMain');
const closeMain = document.getElementById('tryBotCloseMain');
const buttonBtwForm = document.querySelector('.btw_buttons_form');

buttonApple.addEventListener('click', (e) => {
    e.preventDefault();
    tryBotMain.style.display = 'block';
})

buttonGoogle.addEventListener('click', (e) => {
    e.preventDefault();
    tryBotMain.style.display = 'block';
})

closeMain.addEventListener('click', (e) => {
    tryBotMain.style.display = "none";
})

buttonBtwForm.addEventListener('click', (e) => {
    tryBotMain.style.display = "none";
})

window.onclick = function(event){
    if(event.target === tryBotMain ){
        tryBotMain.style.display = "none"
    }
}