jQuery ( function($) {

	var site = new SiteController($);
	site.init();

});

function SiteController($)
{
	self.init = function()
	{
		initMobileNav();
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

	return self;
}
