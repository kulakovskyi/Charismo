const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.header__menu');
const headerLogo = document.querySelector('.header__logo');
const effectButton = document.querySelector('.effect__btn');

const partnersPop = document.querySelector('.partners__pop');
const popupArea = document.querySelector('.popup__area');
const popupClose = document.querySelector('.popup__close');

iconMenu.addEventListener("click", function(e){
  document.body.classList.toggle('_lock');
  iconMenu.classList.toggle('_active');
  menuBody.classList.toggle('_active');
  headerLogo.classList.toggle('_active');
});

partnersPop.addEventListener("click",function(e){
	document.body.classList.add('_lock');
});

popupArea.addEventListener("click",function(e){
	document.body.classList.remove('_lock');
});

popupClose.addEventListener("click",function(e){
	document.body.classList.remove('_lock');
});



/*****************SLIDES********************** */

$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:3,
	
		speed:1000,
		autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 999,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 729,
				settings: {
					slidesToShow:1,
					variableWidth:true,
					centerMode:true
				}
			}
		]
	});
});


$(document).ready(function(){
	$('.slider-2').slick({
		arrows:true,
		dots:true,
		slidesToShow:5,
	
		speed:1000,
		autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 999,
				settings: {
					slidesToShow:4
				}
			},
			{
				breakpoint: 729,
				settings: {
					slidesToShow:3
				}
			}
		]
	});
});


/******************SHOP*******************/

const products = document.querySelectorAll('.shop__item');
const buttons = document.querySelectorAll('.basket__btn');
const openBasket = document.querySelector('.header__buy');

function createCart(){
	let cart = document.createElement('div');
	let field = document.createElement('div');
	let heading = document.createElement('div');
	let closeBtn = document.createElement('button');

	cart.classList.add('cart');
	field.classList.add('cart-field');
	closeBtn.classList.add('close');
	heading.classList.add('heading__basket');

	heading.textContent='Корзина';
	closeBtn.textContent='Оформить заказ';

	document.body.appendChild(cart);
	cart.appendChild(heading);
	cart.appendChild(field);
	cart.appendChild(closeBtn);
}

createCart();

let field = document.querySelector('.cart-field');
let cart = document.querySelector('.cart');
let closes = document.querySelector('.close');

function openCert(){
	cart.style.display = 'flex';
}

function closeCert(){
	cart.style.display = 'none';
}

openBasket.addEventListener('click', openCert);
closes.addEventListener('click', closeCert);


buttons.forEach(function(item, i){
	item.addEventListener('click', function(){
		let item = products[i].cloneNode(true);
		item.classList.add('item__basket');
		field.appendChild(item);
	});
});




