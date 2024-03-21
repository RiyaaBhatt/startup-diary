(function ($) {
	/*ready function start*/
	$(document).ready(function ($) {
		setTimeout(function () {
			$('.navmenu').css('display', 'flex');
		}, 100);

		/*wow animation start*/
		var wow = new WOW(
			{
				boxClass: 'wow',      // default
				animateClass: 'animated', // default
				offset: 200,          // default
				mobile: true,       // default
				live: false        // default
			}
		)
		wow.init();
		/*wow animation end*/

		/*header sticky function*/
		$(window).scroll(function () {
			if ($(window).scrollTop() >= 10) {
				$('.header').addClass('sticky');

			} else {
				$('.header').removeClass('sticky');

			}
		});

		/*owner slider start*/
		$('.owner-slider').slick({
			dots: false,
			arrows: true,
			autoplay: true,
			infinite: true,
			speed: 300,
			autoplaySpeed: 3000,
			fade: true,
			pauseOnHover: false,
			cssEase: 'linear'
		});
		// owner slider end

		// services slider start
		$('.services-slider').slick({
			dots: true,
			arrows: true,
			autoplay: true,
			infinite: true,
			speed: 300,
			autoplaySpeed: 10000,
			fade: true,
			pauseOnHover: false,
			cssEase: 'linear',
			swipe: false,
			swipeToSlide: true
		});
		/*services slider end*/

		/*services slider start*/
		$('.engagement-slider').slick({
			dots: false,
			arrows: true,
			autoplay: true,
			infinite: true,
			autoplaySpeed: 10000,
			slidesToShow: 3,
			slidesToScroll: 1,
			pauseOnHover: false,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 640,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				},
			]
		});
		/*services slider end*/

		/*case study slider start*/
		$('.casestudyslider').slick({
			arrows: true,
			autoplay: true,
			infinite: true,
			autoplaySpeed: 4000,
			pauseOnHover: false,
		});
		/*case study slider end*/


		/*exeperties slider start*/
		$('.expertislidertop').slick({
			arrows: true,
			autoplay: true,
			infinite: true,
			autoplaySpeed: 4000,
			pauseOnHover: false,
		});
		/*exeperties slider end*/

		/*fullwidthslider slider start*/
		$('.fullwidthslider').slick({
			arrows: true,
			autoplay: true,
			infinite: true,
			autoplaySpeed: 4000,
			pauseOnHover: false,
		});
		/*fullwidthslider slider end*/

		/*fact slider start*/
		$('.factslidertext').slick({
			arrows: true,
			autoplay: true,
			infinite: true,
			autoplaySpeed: 4000,
			pauseOnHover: false,
		});
		/*fact slider end*/

		/*career slider start*/
		$('.celebslider').slick({
			arrows: false,
			autoplay: true,
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			pauseOnHover: false,
			variableWidth: true,

			cssEase: 'linear',
			pauseOnHover: false,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 580,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						variableWidth: false,
						autoplaySpeed: 2000,
					}
				},
			]
		});
		/*career slider end*/

		/*news releted slider start*/
		$('.newsreletedslider').slick({
			arrows: true,
			autoplay: true,
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			pauseOnHover: false,
			cssEase: 'linear',
			pauseOnHover: false,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						arrows: false,
						dots: true
					}
				},
				{
					breakpoint: 580,
					settings: {
						dots: true,
						slidesToShow: 1,
						slidesToScroll: 1,
						arrows: false,

					}
				},
			]
		});
		/*news releted slider end*/



		/*fancybox video start*/
		$('[data-fancybox]').fancybox({
			youtube: {
				controls: false,
				showinfo: 0,
				rel: 0,
			},
			vimeo: {
				color: 'f00'
			},

		});
		/*fancybox video end*/

		/*Footer We love your company. Hover Text Change On Page Refresh Start*/
		var myQuotes = new Array();
		myQuotes[0] = "Let's work together.";
		myQuotes[1] = "Let's get the momentum.";
		myQuotes[2] = "Let's create something.";
		myQuotes[3] = "Let's catch up.";
		myQuotes[4] = "Let's grow together.";
		var myRandom = Math.floor(Math.random() * myQuotes.length);

		var getTagline = $(".defaulttext").html();
		$('.mobiletextref').html(myQuotes[myRandom]);
		$('.hovertextrow').mouseenter(function () {
			$('.hovertext').html(myQuotes[myRandom]);
		}).mouseleave(function () {
			$('.defaultText').html(getTagline);
		});

		function addRemoveClass() {
			var delay = 1600; // milliseconds
			setTimeout(function () {
				$('.defaulttext b').toggleClass('textY');
				addRemoveClass();
			}, delay);
		};
		addRemoveClass();
		/*Footer We love your company. Hover Text Change On Page Refresh End*/




		/*Push div function*/
		$('.Clickpush').on('click', function (e) {
			e.preventDefault();
			$('.pushdiv').slideToggle(500).toggleClass('Leftpush');
			// $('.ClickLeft').toggleClass('Leftpush');
			$('html, body').animate({
				scrollTop: $(this.hash).offset().top - 500
			}, 500);

		});
		/*Push div function end*/

		/*Quote popup function start*/
		$('.Quotebtn').on('click', function (e) {
			e.preventDefault();
			$('.quotepop').toggleClass('frmopen');
			$(this).parent('.blue-circle-btn-div').toggleClass('frmopen');
			$('body').toggleClass('frmopen');
		});

		/*label color change input focus*/
		$(".textFocus").focus(function () {
			$(this).parents('.fromgroup').children('label').addClass("labelfocus");
			$(this).parents('.radiobox').children('label').addClass("labelfocus");
		}).blur(function () {
			$("label").removeClass("labelfocus");
		});

		/*Quote popup function end*/

		/* Menu Toggle fucntion start */
		$('.menu-toggle').click(function (e) {
			e.preventDefault();
			$('body').toggleClass("menuopen");
			$('.menucol ul li.megamenu').removeClass("menuslide");
		});
		$('.menucol ul li.megamenu > a').click(function (e) {
			e.preventDefault();
			$('.menucol ul li.megamenu').addClass("menuslide");
		});
		$('a.backmenu').click(function (e) {
			e.preventDefault();
			$('.menucol ul li.megamenu').removeClass("menuslide");
		});

		if (window.outerWidth < 767) {
			$('.menucol ul li.megamenu > ul > li > ul > li > a').on("click", function (e) {
				e.preventDefault();
				$(this).toggleClass('subopen');
				$(this).siblings('ul').slideToggle();
				$(this).parent('li').siblings().find('ul').slideUp();
				$(this).parent('li').siblings().find('a').removeClass('subopen');

				$(this).parent('li').parent('ul').parent('li').siblings().children('ul').children('li').children('ul').slideUp();
				$(this).parent('li').parent('ul').parent('li').siblings().children('ul').children('li').children('a').removeClass('subopen');
			});
		}
		/*Menu Toggle fucntion start*/

		/*experties menu start*/
		$('.exp-toggle').click(function (e) {
			e.preventDefault();
			$('.expertimenu').addClass("menuslide");
		});

		$('.exp-close').click(function (e) {
			e.preventDefault();
			$('.expertimenu').removeClass("menuslide");
		});

		if (window.outerWidth < 767) {
			$('.expertimenu > ul > li > ul > li > a').on("click", function (e) {
				e.preventDefault();
				$(this).toggleClass('subopen');
				$(this).siblings('ul').slideToggle();
				$(this).parent('li').siblings().children('ul').slideUp();
				$(this).parent('li').siblings().find('a').removeClass('subopen');

				$(this).parent('li').parent('ul').parent('li').siblings().children('ul').children('li').children('ul').slideUp();
				$(this).parent('li').parent('ul').parent('li').siblings().children('ul').children('li').children('a').removeClass('subopen');
			});
		}
		/*experties menu end*/

		/*about hover function start*/
		$(".Hovercol").hover(function () { // for mouse enter event
			$(this).children('.servDetail').slideDown();
			$(this).parents('.hoverserv').siblings().children('.servDetail').slideUp();
		}, function () { // for mouse leave event
			$(this).children('.servDetail').slideUp();
		});
		/*about hover function end*/

		/*about accordian function start*/
		$(".accheader a").click(function (e) { // for mouse enter event
			e.preventDefault();
			$(this).toggleClass('Activeacco');
			$(this).parents('.accmaincard').children('.acchidecontent').slideToggle();
		});
		/*about accordian function end*/

		/*career accordian function start*/
		$(".careheader a").click(function (e) { // for mouse enter event
			e.preventDefault();
			$(this).parents('.caremaincard').children('.careheader').toggleClass('Activeacco');
			$(this).parents('.caremaincard').children('.carehidecontent').slideToggle();
		});
		/*career accordian function End*/

		/* video fucntion play Start*/
		$('.video').parent().click(function () {
			$(this).children(".video").fadeIn();
			if ($(this).children(".video").get(0).paused) {
				$(this).children(".video").get(0).play();
				$(this).children(".playpause").fadeOut();
				$('.videoHide').css('opacity', '0');
			}
			else {
				$(this).children(".video").get(0).pause();
				$(this).children(".playpause").fadeIn();
			}
		});
		$('.video').on('ended', function () {
			$('.playpause').fadeIn();
			$(this).get(0).load()
			$(this).fadeOut();
			$('.videoHide').css('opacity', '1');
		});

		$('.vidoegrid').click(function () {
			$(this).find(".videoplaycase").fadeIn();
			if ($(this).find('.videocolcase').children('video.videoplaycase').get(0).paused) {
				$(this).siblings().find('.videocolcase').children('video.videoplaycase').get(0).pause();
				$(this).siblings().find('.videocolcase').children('.playpause').fadeIn();
				$(this).find('.videocolcase').children('video.videoplaycase').get(0).play();
				$(this).find(".playpause").fadeOut();
				$(this).find('.videothumbcase').css('opacity', '0');

			}
			else {
				$(this).find('.videocolcase').children('video.videoplaycase').get(0).pause();
				$(this).find('.videocolcase').children('.playpause').fadeIn();
			}
		});
		$('.videoplaycase').on('ended', function () {
			$('.playpause').fadeIn();
			$(this).get(0).load()
			$(this).fadeOut();
			$('.videothumbcase').css('opacity', '1');
		});
		/* video fucntion play End*/

		/* video cursor function*/
		$(".video-sec").hover(function () { /* for mouse enter event*/
			$(".videobutton").addClass('Movecursor');
			$(this).mousemove(function (event) {
				var relX = event.pageX - $(this).offset().left;
				var relY = event.pageY - $(this).offset().top;
				var relBoxCoords = "(" + relX + "," + relY + ")";
				$(".videobutton").css('left', relX + 'px');
				$(".videobutton").css('top', relY + 'px');
			});

		}, function () { /* for mouse leave event*/
			$(".videobutton").removeClass('Movecursor');
			$('.videobutton').css('left', '50%');
			$('.videobutton').css('top', '50%');
		});

		$(".owner-slider-image").hover(function () { /* for mouse enter event*/
			$(".owner-play").addClass('Movecursor');
			$(this).mousemove(function (event) {
				var relX = event.pageX - $(this).offset().left;
				var relY = event.pageY - $(this).offset().top;
				/*var relBoxCoords = "(" + relX + "," + relY + ")";*/
				$(".owner-play").css('left', relX + 'px');
				$(".owner-play").css('top', relY + 'px');
			});

		}, function () { /* for mouse leave event*/
			$(".owner-play").removeClass('Movecursor');
			$('.owner-play').css('left', '50%');
			$('.owner-play').css('top', '50%');
		});


		/* Team member video cursor function */
		/* video cursor function*/
		$(".memberthumb a").hover(function () { /* for mouse enter event*/
			$(".owner-play").addClass('Movecursor');
			$(this).mousemove(function (event) {
				var relX = event.pageX - $(this).offset().left;
				var relY = event.pageY - $(this).offset().top;
				var relBoxCoords = "(" + relX + "," + relY + ")";
				$(".owner-play").css('left', relX + 'px');
				$(".owner-play").css('top', relY + 'px');
			});

		}, function () { /* for mouse leave event*/
			$(".owner-play").removeClass('Movecursor');
			$('.owner-play').css('left', '50%');
			$('.owner-play').css('top', '50%');
		});
		/* video cursor function End*/

		/* careers slider cursor function */
		var cursor = $(".cursor");
		$('.celebslider').mousemove(function (e) {
			var CurX = e.pageX - $(this).offset().left
			var CurY = e.pageY - $(this).offset().top
			cursor.css({
				'transform': 'translate(' + CurX + 'px,' + CurY + 'px)'

			});
		});
		$('.celebslider').mouseleave(function () {
			cursor.css({
				opacity: "0",
			});
		}).mouseenter(function () {
			cursor.css({
				opacity: "1"
			});
		});



		$('.celebslider').mousedown(function () {
			cursor.addClass('cursClick');
			// cursor.css({
			// 	transform: "scale(.8)"
			// });
		}).mouseup(function () {
			cursor.removeClass('cursClick');
			/*cursor.css({
				transform: "scale(1)"
			});*/
		});


		/* homepage form button show start */
		/*var baseTop = 0;
		var baseTop1 = 0;
		var visQuickheight = $('.visQuick').innerHeight();
		var getfoot = $('.footer').innerHeight();
		if ($(".visQuick").length > 0) {
			var baseTop = $(".visQuick").offset().top - visQuickheight;
			
		}
		if ($(".footer").length > 0) {
			var baseTop1 = $(".footer").offset().top - getfoot;
		}
		$(window).on("scroll load", function () {
			var top = $(window).scrollTop();
			if (top >= baseTop) {
				$(".blue-circle-btn-div").show();
			} else if (top < baseTop) {
				$(".blue-circle-btn-div").hide();
			}
			if (top > baseTop1) {
				$(".blue-circle-btn-div").hide();
			}
		});*/
		/* homepage form button show end */

		/* inner page form button show start */

		$(window).on("scroll load", function () {
			var innerTop = 0;
			var innerTop1 = 0;
			var getfoot = $('.footer').innerHeight();
			if ($(".visInner").length > 0) {
				var innerTop = $(".visInner").offset().top - 800;

			}
			if ($(".footer").length > 0) {
				var innerTop1 = $(".footer").offset().top - getfoot;

			}
			var top1 = $(window).scrollTop();
			if (top1 >= innerTop) {
				$(".blue-circle-btn-div").show();
			} else if (top1 < innerTop) {

				$(".blue-circle-btn-div").hide();
			}
			if (top1 > innerTop1) {
				$(".blue-circle-btn-div").hide();
			}
		});
		/* inner page form button show start */



		$(".selecans input[type='radio']").on("click", function () {
			$(".red-circle-div").fadeIn();
		});
		/* Test page scorediv show start */

		/*fileupload controls function start*/
		$(".checkYes input[type='radio']").on("change", function () {
			var checkValue = $(this).val();
			if (checkValue == 'Yes') {
				$('.uploadBox').show();
			}
			else {
				$('.uploadBox').hide();
			}
		});
		$("#file-upload").on("change", function () {
			var fileName = $(this).val().split("\\").pop();
			$(this).siblings(".custom-file-upload").addClass("selected").html(fileName);
		});

		$(".fileinput").on("change", function () {
			var fileName = $(this).val().split("\\").pop();
			$(this).siblings(".custom-file-upload").addClass("selected").html(fileName);
		});
		/*fileupload controls function end*/

		/*counter js visible port*/
		$.fn.isInViewport = function () {

			var elementTop = ($(this).length) ? $(this).offset().top : 0;
			var elementBottom = elementTop + $(this).outerHeight();
			var viewportTop = $(window).scrollTop();
			var viewportBottom = viewportTop + $(window).height();
			return elementBottom > viewportTop && elementTop < viewportBottom;
		};

		/*header color changes dark section start*/
		if ($('.bwheader').length) {
			$(".bwheader").addClass("DarkMenu");
		}
		$(window).on('scroll load', function () {
			/*header color changes dark section start*/
			var isBlack = false;
			$(".darkheader").each(function (i, section) {
				var vpHeight = $(this).innerHeight();
				/*console.log(vpHeight);*/
				if (isBlack) {
					return;
				}

				var offset = $(section).offset().top - $(window).scrollTop();
				if (((offset + vpHeight) >= 0) && ((offset + vpHeight) <= vpHeight)) {

					// console.log(offset);
					isBlack = true;
					return;
				}
				else {
					isBlack = false;
					return;
				}
			});
			if (isBlack) {
				$(".bwheader").addClass("DarkMenu").removeClass("LightMenu");
			}
			else {
				$(".bwheader").removeClass("DarkMenu").addClass("LightMenu");
			}
			/*header color changes dark section End*/

			/*counter fuction*/
			if ($('.caserowblack').length) {
				if ($('#counteruprow').isInViewport()) {
					$('.counting').each(function () {
						var $this = $(this),
							countTo = $this.attr('data-count');

						$({ countNum: $this.text() }).animate({
							countNum: countTo
						},

							{
								duration: 1000,
								easing: 'linear',
								step: function () {
									$this.text(Math.floor(this.countNum));
								},
								complete: function () {
									$this.text(this.countNum);

								}

							});
					});
				}
			}
			/*counter fuction end*/

		});
		// header color changes dark section end

		/*project filter show div start*/
		$('.projectcol a').on('click', function (e) {
			e.preventDefault();
			$('.filterdiv').slideToggle(200).toggleClass('filDown');
		});
		/*project filter show div end*/

		/*Pageloader functio start*/
		if ($('.pageloader').length) {
			$('body').addClass('overH')
			setTimeout(function () {
				$('.topanimate').addClass('pageslide');
			}, 1);
			setTimeout(function () {
				$('.pageloader').addClass('rightslide');
				$('body').removeClass('overH');
			}, 2000);
			setTimeout(function () {
				$('.headtitleinner').addClass('animated');
				$('.fadefield').addClass('animated');
			}, 2400);
			setTimeout(function () {
				$('.pageloader').fadeOut();
			}, 2600);
		}
		//$('.pageloader').hide();
		// $('.headtitleinner').addClass('animated');
		// $('.fadefield').addClass('animated');

		setTimeout(function () {
			$('.headtitleanim').addClass('animated');
			$('.fadefieldblack').addClass('animated');
		}, 500);

		/* team detail function animation */
		if ($('.teamtopsection').length) {
			setTimeout(function () {
				$('.teamtoptext').css('opacity', '1');
				$('.teamtoptext').addClass('rightslide');
			}, 100);
			setTimeout(function () {
				$('.fadefield').addClass('animated');
				$('.teamtoptext').fadeOut(800);
			}, 2500);
		}
		/* team detail function animation end*/

		/* Careers positon*/
		$("a.aplbtn").click(function (event) {
			$("input[name=c_position]").val(($(this).attr("data-career-position")));
		});
		$(document).on("click", ".aplbtn", function (event) {
			event.preventDefault();
			$("html, body").animate({
				scrollTop: $(this.hash).offset().top - 100
			}, 150);
		});

		/* Test page scorediv show start */
		var testTop = 0;
		var testTop1 = 0;
		var getResult = $('.testformrow').height();
		if ($(".allquestionrow").length > 0) {
			var testTop = $(".allquestionrow").offset().top - 100;
		}
		if ($(".resultrow").length > 0) {
			var testTop1 = $(".testformrow").offset().top - getResult - 100;
		}
		$(window).on("scroll load", function () {
			var top = $(window).scrollTop();
			if (top <= testTop) {
				$(".red-circle-div").fadeOut();
			}
			if (top > testTop1) {
				$(".red-circle-div").fadeOut();
			}
		});
		/* Test page scorediv show End */

		/* dropdown value chagne placeholder Start*/
		$(".budchange").on("change", function () {
			var checkValue = $(this).val();
			if (checkValue != '') {
				$('.hidefield').css('display', 'inline-block');
				$('.hidefield input').attr('placeholder', checkValue + " *");
			}
			else {
				$('.hidefield').css('display', 'none');
				$('.hidefield input').attr('placeholder', '');
			}
		});
		$('.budgehide').hide();
		$('.submitClick input').click(function () {
			$('#cf_cname').valid();
			$('#cf_eaddress').valid();
			$('#cf_cnumber').valid();
			$('#cf_clocation').valid();
			$('#cf_project').valid();
			$('#cf_message').valid();
			if ($('#cf_cname').valid() && $('#cf_eaddress').valid() && $('#cf_cnumber').valid() && $('#cf_clocation').valid() && $('#cf_project').valid() && $('#cf_message').valid()) {
				$('.budgehide').show();
				$('html, body').animate({
					scrollTop: $('.budgehide').offset().top - 200
				}, 10);
			}
		});
		/* dropdown value chagne placeholder End */

		/* timeline fucntion start */
		$('.yearcol ul li:first-child').addClass('active');
		$('.timedatacontent').hide();
		$('.timedatacontent:first').show();

		$('.yearcol ul li a').click(function (e) {
			e.preventDefault();
			$('.yearcol ul li').removeClass('active');
			$(this).parent().addClass('active');
			$('.timedatacontent').hide();

			var activeTab = $(this).attr('href');
			$(activeTab).fadeIn();
			$('html, body').animate({
				scrollTop: $(activeTab).offset().top - 100
			}, 700);
			return false;
		});
		/* timeline fucntion End */

		/* Quick connect from prize slide drage*/
		function my_prettify(n) {
			try {
				n = parseInt(n);
				return ((n == 7000000) ? ("Above " + n.toLocaleString('en-IN', { maximumFractionDigits: 0, style: 'currency', currency: 'INR' })) : (n.toLocaleString('en-IN', { maximumFractionDigits: 0, style: 'currency', currency: 'INR' })));
			} catch (e) {
				return ((n == 7000000) ? ("Above ₹" + n) : ("₹" + n));
			}
			return ((n == 7000000) ? ("Above ₹" + n) : ("₹" + n));
		}
		$("#Priceslider").ionRangeSlider({
			skin: "big",
			min: 500000,
			max: 7000000,
			from: 500000,
			hide_min_max: true,
			step: 500000,
			prettify: my_prettify
		});


		/*case study video paly section start*/
		$('.videopaly').parent().click(function () {
			//alert('hello');
			$(this).children(".videopaly").fadeIn();
			if($(this).children(".videopaly").get(0).paused){ 
			  	$(this).children(".videopaly").get(0).play();   
			  	$(this).children(".playpause").fadeOut();
				$('.videoHide').css('opacity', '0');    
			}
			else{       
				$(this).children(".videopaly").get(0).pause();
				$(this).children(".playpause").fadeIn();
			}
		});
		$('.videopaly').on('ended', function(){
			$('.playpause').fadeIn();
			$(this).get(0).load()
			$(this).fadeOut();
			$('.videoHide').css('opacity', '1'); 
		});

		


	});
	/*ready funciton end*/

	/* sticky fucntion load */
	$(window).on("load resize", function () {
		// alert($(window).width());
		if ($(".column-sticky").length > 0) {
			if ($(window).width() > 767) {
				$(".column-sticky").stick_in_parent({
					offset_top: 150
				}).on("sticky_kit:stick", function (e) {
					// console.log("stick");
				}).on("sticky_kit:unstick", function (e) {
					// console.log("unstick");
				});
			}
			else {
				$(".column-sticky").trigger("sticky_kit:detach");
			}

		}
		if ($(".column-sticky-time").length > 0) {
			/* time line functio sticky */
			// if ($(window).width() > 1025) {
			$(".column-sticky-time").stick_in_parent({
				offset_top: 150
			}).on("sticky_kit:stick", function (e) {
				// console.log("stick");
			}).on("sticky_kit:unstick", function (e) {
				// console.log("unstick");
			});
		}
		// }
		// else{
		// 	$(".column-sticky-time").trigger("sticky_kit:detach");
		// }

		
		/* Pop up fucntion */
		/*setTimeout(function(){ 
			if (localStorage.getItem("hasCodeRunBefore") === null) {	 
				$('.homepopup-main').fadeIn(1000);
				localStorage.setItem("hasCodeRunBefore", true);
		   }
		}, 500);
		$('.homepopup-close').click(function (e) {
			e.preventDefault();
			$('.homepopup-main').fadeOut();
		});
		$(document).click(function() {
			$('.homepopup-main').fadeOut();
		});
		$('.homepopup-text').click(function(e) {
			e.stopPropagation();
		});*/


	});




})(jQuery);

if ($('#videoCol').length) {
	// check if video section is visible or not starts here
	function isVisible(ele) {
		const { top, bottom } = ele.getBoundingClientRect();
		const vHeight = (window.innerHeight || document.documentElement.clientHeight);
		return ((top > 0 || bottom > 0) && top < vHeight);
	}

	document.addEventListener('DOMContentLoaded', () => {
		const videoPlayer = document.querySelector('#videoCol')
		const handler = () => raf(() => {
			if (isVisible(videoPlayer)) {
				$('#videoPlayer')[0].play();
			}
			else {
				$('#videoPlayer')[0].pause();
			}
		})

		handler()
		window.addEventListener('scroll', handler)
	})

	/*requestAnimationFrame*/
	const raf =
		window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		function (callback) {
			window.setTimeout(callback, 1000 / 60)
		}
	/*check if video section is visible or not ends here*/
}

/*marquee text fucntion start*/
if ($(".aboutestarow").length > 0) {
	const slider = document.querySelector('.dragtextcol');
	/*const Dragquote = document.querySelector('.clickDrag');
	const QuoteBlock = document.querySelector('.c-quote_text');
	function css(element, style) {
		for (const property in style)
			element.style[property] = style[property];
	}*/


	let isDown = false;
	let startX;
	let scrollLeft;

	slider.addEventListener('mousedown', (e) => {
		isDown = true;
		slider.classList.add('active');
		startX = e.pageX - slider.offsetLeft;
		scrollLeft = slider.scrollLeft;
	});
	slider.addEventListener('mouseleave', (e) => {
		isDown = false;
		slider.classList.remove('active');
	});
	slider.addEventListener('mouseup', (e) => {
		isDown = false;
		slider.classList.remove('active');
	});
	slider.addEventListener('mousemove', (e) => {
		if (!isDown) return;
		e.preventDefault();
		const x = e.pageX - slider.offsetLeft;
		const walk = (x - startX) * 1; //scroll-fast
		slider.scrollLeft = scrollLeft - walk;
	});


	/*drag touch and mouse event function end
	let isDowntouch = false;
	let startXtouch;
	slider.addEventListener('touchstart', (e) => {
		isDowntouch = true;
		slider.classList.add('active');
		startXtouch = e.touches[0].pageX - slider.offsetLeft;
		scrollLeft = slider.scrollLeft;
		console.log('touchstart');
	});
	slider.addEventListener('touchend', (e) => {
		isDowntouch = false;
		slider.classList.remove('active');
		console.log('touchend');
	});

	slider.addEventListener('touchmove', (e) => {
		if(!isDowntouch) return;
		e.preventDefault();
		const x = e.touches[0].pageX - slider.offsetLeft;
		const walk = (x - startXtouch) * 0.5; //scroll-fast
		slider.scrollLeft = scrollLeft - walk;
		console.log(x);
	});*/
}
/*marquee text fucntion end*/


