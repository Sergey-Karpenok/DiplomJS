'use strict';

import smoothScroll from './modules/smoothScroll';
import slider from './modules/slider';
import modalMenu from './modules/modalMenu';
import carousel from './modules/carousel';
import accordeon from './modules/accordeon';
import scrollToTop from './modules/scrollToTop';


// Плавная прокрутка
smoothScroll();

// Модальное окно
modalMenu();

// Главный слайдер
slider();

// Слайдер карусель
carousel();

// Аккордион
accordeon();

// Плавная прокрутка наверх
scrollToTop();