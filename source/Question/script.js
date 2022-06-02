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


/************************ACORDEON******************** */


/*
const questionBuy = document.querySelectorAll('.question__buy__title');
const questionText = document.querySelectorAll('.question__buy__text');



questionBuy.forEach((el) => {
	el.addEventListener('click', () => {
		el.classList.remove('active');
		const content = el.nextElementSibling;
		if(content.style.maxHeight){
			questionText.forEach((el) => el.style.maxHeight=null);

		} else{
			el.classList.add('active');
			questionText.forEach((el) => el.style.maxHeight=null);
			content.style.maxHeight = content.scrollHeight + 'px';
		}
		
	})

	
})

*/

$(document).ready(function(){
	$('.question__buy__title').click(function(event) {
		if($('.question__container').hasClass('one')){
			$('.question__buy__title').not($(this)).removeClass('active');
			$('.question__buy__text').not($(this).next()).slideUp(400);
		}
		$(this).toggleClass('active').next().slideToggle(400);

	});
});
