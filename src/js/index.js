"use strict";

import '../scss/style.scss';

import $ from 'jquery';
import 'lazysizes';
import 'popper.js';
import 'bootstrap';
import Typed from 'typed.js';

$('html').removeClass('no-js').addClass('js');

if($('body').hasClass('page--home')) {
	var options = {
		strings: ["interaction", "digital", "front-end"],
		typeSpeed: 88,
		backSpeed: 48,
		loop: true,
		loopCount: Infinity,
	}
	var typed = new Typed(".type", options);
}

var body = document.querySelector('body');

// MENU TOGGLE
var toggleNavigation = document.getElementById('hamburger');

toggleNavigation.addEventListener('click', function() {
	body.classList.toggle('site-navigation-open');
});

document.querySelector('.site-mask').addEventListener('click', function(){
	body.classList.toggle('site-navigation-open');
});

// SEARCH TOGGLE
var search = document.getElementById('magnifying-glass');
search.addEventListener('click', function() {
	body.classList.toggle('site-search-open');
	let searchInput = document.getElementById('site-search-input');
	searchInput.focus();
});

// HEADER
var header = $('.site-header');
headerState();

window.addEventListener('scroll', function (){
	headerState();
});

function headerState() {
	let y = window.pageYOffset || document.documentElement.scrollTop;
	if(y > 0) {
		header.addClass('site-header--toggled');
	} else {
		header.removeClass('site-header--toggled');
	}
}

$('.hero .mouse').on('click', function(){
	var target = document.getElementById('wat-ik-doe');
	target.scrollIntoView({
		behavior: 'smooth', // smooth scroll
		block: 'start' // the upper border of the element will be aligned at the top of the visible part of the window of the scrollable area.
	});
});