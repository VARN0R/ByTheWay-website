import WOW from 'wowjs';


import btwButtons from "./modules/btwButtons";
import countAnimation from "./modules/countAnimation";
import dataForm from "./modules/dataForm";
import hamburger from "./modules/hamburger";
import hideHeader from "./modules/hideHeader";
import swiper from "./modules/swiper";
window.addEventListener('DOMContentLoaded', () => {
    new WOW.WOW().init();
    btwButtons();
    countAnimation();
    dataForm();
    hamburger();
    hideHeader();
    swiper();
})