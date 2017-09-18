function SiteController($) {
    function initMobileNav() {
        $(".js-mobile-trigger").click(function(e) {
            e.preventDefault(), $(".js-mobile-nav").addClass("open");
        }), $(".js-mobile-nav-close").click(function(e) {
            e.preventDefault(), $(".js-mobile-nav").removeClass("open");
        });
    }
    return self.init = function() {
        initMobileNav();
    }, self;
}

jQuery(function($) {
    new SiteController($).init();
});