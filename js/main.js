if ($(window).width() > 767) {
	priorityNav.init({
		breakPoint: 0,
		navDropdownLabel: "Ещё",
	})
}

$(document).ready(function() {
	$(function() {
		$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
			$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
		});
	});

	var main_swiper = new Swiper('.main_swiper', {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		// autoplay: {
		// 	delay: 5000,
		// 	disableOnInteraction: false,
		// },

		pagination: {
			el: '.main_swiper_pagination'
		},
		breakpoints: {
			767: {
				navigation: {
					nextEl: '.main_swiper_button_next',
					prevEl: '.main_swiper_button_prev',
				}
			},
			901: {
				slidesPerView: 1.2,
				navigation: {
					nextEl: '.main_swiper_button_next',
					prevEl: '.main_swiper_button_prev',
				}
			}
		}
	});

	$(document).on('click', '.main_swiper .swiper-slide-next', function(evt) {
		evt.preventDefault()
		$('.main_swiper_button_next').trigger('click')
	});

	var popular_swiper = new Swiper('.popular_swiper', {
		spaceBetween: 12,
		slidesPerView: 1.2,
		touchRatio: 1,
		breakpoints: {
			601: {
				slidesPerView: 2.2,
				touchRatio: 1,
			},
			768: {
				spaceBetween: 30,
				slidesPerView: 2.2,
				touchRatio: 1,
			},
			901: {
				spaceBetween: 30,
				slidesPerView: 2.2,
				touchRatio: 1,
			},
			1001: {
				spaceBetween: 30,
				slidesPerView: 3,
				touchRatio: 0,
			}
		}
	});

	var attention_swiper = new Swiper('.attention_swiper', {
		spaceBetween: 12,
		slidesPerView: 1.2,
		touchRatio: 1,
		breakpoints: {
			601: {
				slidesPerView: 2.2,
				touchRatio: 1,
			},
			768: {
				spaceBetween: 30,
				slidesPerView: 2.2,
				touchRatio: 1,
			},
			901: {
				spaceBetween: 30,
				slidesPerView: 3.2,
				touchRatio: 1,
			},
			1201: {
				spaceBetween: 30,
				slidesPerView: 4,
				touchRatio: 0,
			}
		}
	});

	var swiper_gallery = new Swiper('.gallery', {
		spaceBetween: 12,
		slidesPerView: 1.2,
		breakpoints: {
			601: {
				slidesPerView: 2.2,
			},
			768: {
				spaceBetween: 30,
				slidesPerView: 2.2,
			},
			901: {
				spaceBetween: 30,
				slidesPerView: 3.2,
			},
			1201: {
				spaceBetween: 30,
				slidesPerView: 4,
			}
		}
	});

	var swiper_other_places = new Swiper('.other_places', {
		spaceBetween: 12,
		slidesPerView: 1.2,
		touchRatio: 1,
		breakpoints: {
			601: {
				slidesPerView: 2.2,
				touchRatio: 1,
			},
			768: {
				spaceBetween: 30,
				slidesPerView: 2.2,
				touchRatio: 1,
			},
			901: {
				spaceBetween: 30,
				slidesPerView: 3.2,
				touchRatio: 1,
			},
			1201: {
				spaceBetween: 30,
				slidesPerView: 4,
				touchRatio: 0,
			}
		}
	});

	$(document).on('click', '.filter__item', function(evt) {
		evt.preventDefault()
		$('.filter__item').removeClass('active')
		$(this).toggleClass('active')
	});

	$(document).on('click', '.filter__item.active', function(evt) {
		evt.preventDefault()
		$('.filter__item').removeClass('active')
	});

	$(document).on('click', '.event__like', function(evt) {
		evt.preventDefault()
		$(this).toggleClass('active')
	});

	$(document).on('click', '.clear', function(evt) {
		evt.preventDefault()
		$(this).removeClass('active')
		$(this).siblings('input').val('')
	});

	$(document).on('click', '.read_more', function(evt) {
		evt.preventDefault()
		$(this).addClass('active').html('Свернуть')
		$('.descr__text .full').slideDown('fast')
	});

	$(document).on('click', '.read_more.active', function(evt) {
		evt.preventDefault()
		$(this).removeClass('active').html('Читать далее')
		$('.descr__text .full').slideUp('fast')
	});
	
	$('.header__search input').on("input",function(ev){
		if ($(ev.target).val()) {
			$('.clear').addClass('active')
		} else {
			$('.clear').removeClass('active')
		}
	});


		// foto popup
	$('.gallery .gallery__img').fancybox({
		// options
		infobar : false,
		backFocus: false,
		buttons: ["close"],
		btnTpl: {
			arrowLeft:
			'<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="назад">' +
			'<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="30" r="30" transform="rotate(-180 30 30)" fill="#222222"/><path d="M33 19.5959L22.798 29.7979L33 39.9999" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>' +
			"</button>",

			arrowRight:
			'<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="вперед">' +
			'<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="30" r="30" fill="#222222"/><path d="M27 40.4041L37.202 30.2021L27 20.0001" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>' +
			"</button>",
		},
		caption : function( instance, item ) {
			var caption = $(this).data('caption') || '';
			return (  caption.length ? '<div class="gall_item__name">' + caption + '</div>' : '' ) + '<div class="gall_item__count"><span data-fancybox-index></span> из <span data-fancybox-count></span></div>' + '<div class="gall_item__src">' + $(this).siblings('figcaption').html() + '</div>'
		},
	});
	// video popup
	$('.video .gallery__img').fancybox({
		// options
		infobar : false,
		backFocus: false,
		buttons: ["close"],
		btnTpl: {
			arrowLeft:
			'<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="назад">' +
			'<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="30" r="30" transform="rotate(-180 30 30)" fill="#222222"/><path d="M33 19.5959L22.798 29.7979L33 39.9999" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>' +
			"</button>",

			arrowRight:
			'<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="вперед">' +
			'<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="30" r="30" fill="#222222"/><path d="M27 40.4041L37.202 30.2021L27 20.0001" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>' +
			"</button>",
		},
		caption : function( instance, item ) {
			var caption = $(this).data('caption') || '';
			return (  caption.length ? '<div class="gall_item__name">' + caption + '</div>' : '' ) + '<div class="gall_item__count"><span data-fancybox-index></span> из <span data-fancybox-count></span></div>' + '</div>'
		},
	});

	$(document).on('click', '.filter__item.date', function(evt) {
		evt.preventDefault();
		$('#calendar_input').focus();
	});
	

	$(document).keyup(function(evt) {
		if(evt.which == 27) {
			
		}
	});


	$(document).on('click', '.datepick-cmd-clear', function() {
		$('.filter__item.date span').html('Дата')
	});

	$(document).on('click', '.header__burger', function() {
		$('.header__bottom, .popup_overlay').addClass('active')
		$('.header__top').addClass('menu_open')
		$('.page').addClass('ofh')
	});


	var initialPoint;
	var finalPoint;
	document.addEventListener('touchstart', function(event) {
		event.stopPropagation();
		initialPoint=event.changedTouches[0];
	}, false);
	document.addEventListener('touchend', function(event) {
		event.stopPropagation();
		finalPoint=event.changedTouches[0];
		var xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
		if (xAbs > 77) {
			if (xAbs) {
				if (finalPoint.pageX > initialPoint.pageX){
					$('.header__bottom, .popup_overlay').removeClass('active')
					$('.header__top').removeClass('menu_open')
					$('.page').removeClass('ofh')
				}
			}
		}
	}, false);

	$(document).mouseup(function (e){
		var div = $('.header__bottom.active')
		if (!div.is(e.target)
			&& div.has(e.target).length === 0) {
			div.removeClass('active')
			$('.popup_overlay').removeClass('active')
			$('.header__top').removeClass('menu_open')
			$('.page').removeClass('ofh')
		}
	});


	$(document).on('click', '.header__search_ic', function() {
		$('.header__top').addClass('active')
	});

	$(document).on('click', '.header__search_close', function() {
		$('.header__top').removeClass('active')
	});

	$(document).on('click', '.tabs_more_btn', function() {
		var tabs_item_count = $(this).attr('data-tabs_item_count')
		$(this).attr('data-tabs_item_count', (+tabs_item_count + 3))
		$(this).parent().children('.tab_item:nth-child(-n + ' + (+tabs_item_count + 3) + ')').slideDown('fast')

		var tabs_items = $(this).parent().children('.tab_item').length
		var tabs_item_count_real = $(this).attr('data-tabs_item_count')

		if (tabs_item_count_real >= tabs_items) {
			$(this).slideUp()
		}
	});

	var tabs_more_btn1 = $('.months .tabs_more_btn')
	var tabs_more_btn_count1 = tabs_more_btn1.attr('data-tabs_item_count')
	var tabs_items1 = tabs_more_btn1.parent().children('.tab_item').length
	if (tabs_more_btn_count1 >= tabs_items1) {
		tabs_more_btn1.hide()
	}
	var tabs_more_btn2 = $('.program .tabs_more_btn')
	var tabs_more_btn_count2 = tabs_more_btn2.attr('data-tabs_item_count')
	var tabs_items2 = tabs_more_btn2.parent().children('.tab_item').length
	if (tabs_more_btn_count2 >= tabs_items2) {
		tabs_more_btn2.hide()
	}
})