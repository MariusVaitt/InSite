$(document).ready(function() {
	$('.header__burger').click (function(event) {
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	})
	$('.header__link').click (function(event) {
		$('.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	})
})
window.onload = function () {
	document.querySelector('.tabs__header').addEventListener('click', fTabs);
	function fTabs(event) {
		console.log(event);
		if (event.target.className =='tab-h') {
			//dataTab номер вкладки, которую нужно отобразить
			var dataTab = event.target.getAttribute('data-tab');
			//отключаю класс active
			var tabH = document.getElementsByClassName ('tab-h');
			for (var i=0; i<tabH.length; i++) {
				tabH[i].classList.remove ('active1');
			}
			event.target.classList.add('active1');
			//все вкладки с содержимым
			var tabBody = document.getElementsByClassName('tab-b');
			for (var i =0; i < tabBody.length; i++) {
				if (dataTab==i) {
					tabBody [i].style.display = 'flex';
				}
				else {
					tabBody[i].style.display = 'none';
				}
			}
		}
	}
}
$(function(){
	$('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
		var 
			target = $(this).attr('href'),
			bl_top = $(target).offset().top - 70;
		$('body, html').animate({scrollTop: bl_top}, 700);
		return false;
	})
})