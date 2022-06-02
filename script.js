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





