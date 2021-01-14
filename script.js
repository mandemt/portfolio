console.log('yo')
var menuBlok1 = document.querySelector('header nav ul li:nth-of-type(1)');
var menuTekst1 = document.querySelector('nav ul li a:first-of-type p');
var menuTekst2 = document.querySelector('nav ul li a:nth-of-type(2) p');

var menuBlok2 = document.querySelector('header nav ul li:nth-of-type(2)');
var menuTekst3 = document.querySelector('nav ul li:nth-of-type(2) a:first-of-type p');
var menuTekst4 = document.querySelector('nav ul li:nth-of-type(2) a:nth-of-type(2)  p');

var menuBlok3 = document.querySelector('header nav ul li:nth-of-type(3)');
var menuTekst5 = document.querySelector('nav ul li:nth-of-type(3) a:first-of-type p');
var menuTekst6 = document.querySelector('nav ul li:nth-of-type(3) a:nth-of-type(2) p');

var menuBlok4 = document.querySelector('header nav ul li:nth-of-type(4)');
var menuTekst7 = document.querySelector('nav ul li:nth-of-type(4) a:first-of-type p');
var menuTekst8 = document.querySelector('nav ul li:nth-of-type(4) a:nth-of-type(2)  p');
var menuTekst1 = document.querySelector('p');



function li1o () {
	menuTekst1.classList.add('menu')
	console.log('overmenu');

	menuTekst2.classList.add('menu')

}

function li1d () {
	menuTekst1.classList.remove('menu')
	console.log('doei')
	menuTekst2.classList.remove('menu')
}


function li2o () {
	menuTekst3.classList.add('menu')
	console.log('overmenu');

	menuTekst4.classList.add('menu')

}

function li2d () {
	menuTekst3.classList.remove('menu')
	console.log('doei')
	menuTekst4.classList.remove('menu')
}


function li3o () {
	menuTekst5.classList.add('menu')
	console.log('overmenu');

	menuTekst6.classList.add('menu')

}

function li3d () {
	menuTekst5.classList.remove('menu')
	console.log('doei')
	menuTekst6.classList.remove('menu')
}


function li4o () {
	menuTekst7.classList.add('menu')
	console.log('overmenu');

	menuTekst8.classList.add('menu')

}

function li4d () {
	menuTekst7.classList.remove('menu')
	console.log('doei')
	menuTekst8.classList.remove('menu')
}





menuBlok1.addEventListener('mouseover', li1o);
menuBlok1.addEventListener('mouseleave',li1d);

menuBlok2.addEventListener('mouseover', li2o);
menuBlok2.addEventListener('mouseleave',li2d);

menuBlok3.addEventListener('mouseover', li3o);
menuBlok3.addEventListener('mouseleave',li3d);

menuBlok4.addEventListener('mouseover', li4o);
menuBlok4.addEventListener('mouseleave',li4d);


var huisLogo = document.querySelector('header img:first-of-type ');
var header = document.querySelector('header')
var ul = document.querySelector('header nav ul')

function menuOpenen( ){
	header.classList.toggle('headeropen')
	ul.classList.toggle('ulopen')
}

huisLogo.addEventListener('click', menuOpenen);




var lijstObject = document.querySelector('header nav ul li:first-of-type')
var h2 = document.querySelector('header nav ul li h2:first-of-type');
var a = document.querySelector('header nav ul li p')
function aanklikken() {
	lijstObject.classList.toggle('kliklijst')
	h2.classList.toggle('klikh2');
	a.classList.toggle('klika')
}

lijstObject.addEventListener('click',aanklikken)


