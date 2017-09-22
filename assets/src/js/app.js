//@prepros-prepend vendor/jquery-3.2.1.js
//@prepros-prepend vendor/modernizr.js
//@prepros-prepend vendor/jquery.fitvids.js

jQuery ( function($) {

	var site = new SiteController($);
	site.init();

});

function SiteController($)
{
	self.init = function()
	{
		initMobileNav();
		initHandleLabels();
		initHandleFitVid();
	}

	function initMobileNav() {

		// CLICK ON TRIGGER, OPEN THE MOBILE NAV
		$('.js-mobile-trigger').click(function(e) {
			e.preventDefault();
			$('.js-mobile-nav').addClass('open');
		});

		// CLICK ON CLOSE BUTTON, CLOSE MOBILE NAV
		$('.js-mobile-nav-close').click(function(e) {
			e.preventDefault();
			$('.js-mobile-nav').removeClass('open');
		});
	}

	function initHandleLabels() {
		$('input[type=text]').focus(function(e) {
			$(this).parent().find('label').addClass('out-of-the-way');
		});

		$('input[type=text]').blur(function(e) {

			// if the field has a value, leave it
			if ($(this).val() || $(this).val() != '') {
				return;
			}

			// otherwise, move the label back
			$(this).parent().find('label').removeClass('out-of-the-way');

		});
	}

	function initHandleFitVid() {
		 $(".js-fitvid").fitVids();
	}

	return self;
}
