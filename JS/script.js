$(document).ready(function() {

    $('.navbar-top .navbar-toggler').click(function(){
        $('.navbar-side').show();
        $('.navbar-side').addClass('show-navbar-side');
        $('.navbar-side').removeClass('hide-navbar-side');
        $('.navbar-side-overlay').show();
    });

    var sidebar = $('.navbar-side')[0],
        toggler = $('.navbar-toggler')[0],
        toggler_icon = $('.navbar-toggler span')[0];
        $('body').click(function(event) {
            var a  = event.target;
            if(a != sidebar && a != toggler && a != toggler_icon){
                $('.navbar-side').removeClass('show-navbar-side');
                $('.navbar-side').addClass('hide-navbar-side');
                $('.navbar-side-overlay').hide();
                setTimeout(() => {
                    $('.navbar-side').hide();
                }, 200);
            }
        });


    // DATEPICKER & DATEPICKER CUSTOMIZING
    $.datepicker.setDefaults($.datepicker.regional['ru']);
    var range = [];
    $( "#datepicker" ).datepicker({
        dateFormat: 'dd MM yy',
        monthNames: [ "Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"],

    });
    $("#datepicker").on("change",function(){
        var selected = $(this).val();
        // RANGE CONFIG
        // if (range == false) {
        //     range[0] = selected;
        // } else if (range[0] != false && range[1] == undefined) {
        //     range[1] = selected;
        // } else if (range[0] != false && range[1] != false) {
        //     range = [];
        //     range[0] = selected;
        // }
        // console.log(range);
        var dateArr = selected.split(' ');
        var day = dateArr[0].replace('0', ''),
            month = dateArr[1];
        $('.datepicker-search').attr('data-value', selected).removeClass('btn-light').addClass('btn-red-active').text('Показать события ' + day + " " + month);
        
    });

    var title_part = $('.ui-datepicker-title').detach();
    $('.ui-datepicker-prev').after(title_part);

    $('.ui-datepicker .ui-state-active').removeClass('ui-state-active').removeClass('ui-state-hover');

    // Move main swiper on top when on mobile


    windowResize();
    window.onresize = windowResize;
    function windowResize() {
        if ($(window).width() <= 768) {
            var main_swiper = $('.main-swiper-wrap').detach();
            $('.main-swiper-wrap').remove();
            $('.navbar-side-overlay').after(main_swiper);
        } else {
            var main_swiper = $('.main-swiper-wrap').detach();
            $('.main-swiper-wrap').remove();
            $('.filters').after(main_swiper);
        }
    }

    // Initialize swiper in #events-slider
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
		slidesPerView: 1,
		spaceBetween: 30,
        loop: true,
        breakpoints: {
			767: {
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				}
			},
			901: {
				slidesPerView: 1.2,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				}
			}
		},
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });


        // Filters swiper when on mobile
        if ($(window).width() <= 768) {

        // $.each( $('.filters .btn-label'), function( i, val ) {
        //     $(val).addClass('swiper-slide');
        //     });
        var mySwiper = new Swiper('.filters', {
            // Optional parameters
            slidesPerView: 'auto',  
            spaceBetween: 0,
            loop: false,
            breakpoints: {
                767: {
                    navigation: false
                },
            },
            });
        }

    $(document).on('click', '.swiper-slide-next', function(e) {
		e.preventDefault()
		$('.swiper-button-next').trigger('click')
	});

 
});