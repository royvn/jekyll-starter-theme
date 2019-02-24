let body = document.querySelector('body');

let hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', function(){
    body.classList.toggle('sidebar-open');
});

let search = document.getElementById('search');
search.addEventListener('click', function(){
    body.classList.toggle('sidebar-open');
});

let close = document.getElementById('close-sidebar');
close.addEventListener('click', function(){
    body.classList.remove('sidebar-open');
});

let overlay = document.querySelector('.overlay');
overlay.addEventListener('click', function(){
    body.classList.remove('sidebar-open');
});

// import AOS from 'aos';
// AOS.init();