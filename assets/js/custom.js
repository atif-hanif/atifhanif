const d = new Date();
let year = d.getFullYear();
document.getElementById("demo").innerHTML = year;

$(document).ready(function () {
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 100) {
            $("body").addClass("fixed-header");
        } else {
            $("body").removeClass("fixed-header");
        }
    });

    new TypeIt("#type-it", {
        speed: 100,
        loop: true,
        strings: ["Designer", "Developer"],
        breakLines: false,
    }).go();
});

(function($) {
    "use strict";
    var WEA = {};
    var plugin_track = 'assets/vendors/';
    $.fn.exists = function() {
        return this.length > 0;
    };

    WEA.one_page = function() {
        //var HHeight = $('.navbar').outerHeight();
        var $one_page_nav = $('.one-page-nav');
        if ($one_page_nav.length > 0) {
            $one_page_nav.each(function() {
                $.scrollIt({
                    upKey: 38, // key code to navigate to the next section
                    downKey: 40, // key code to navigate to the previous section
                    easing: 'linear', // the easing function for animation
                    scrollTime: 600, // how long (in ms) the animation takes
                    activeClass: 'active', // class given to the active nav element
                    onPageChange: null, // function(pageIndex) that is called when page is changed
                    topOffset: -40 // offste (in px) for fixed top navigation
                });
            });
        }
    }


    /* ---------------------------------------------- /*
     * All Functions
    /* ---------------------------------------------- */
    // loadScript
    var _arr = {};

    function loadScript(scriptName, callback) {
        if (!_arr[scriptName]) {
            _arr[scriptName] = true;
            var body = document.getElementsByTagName('body')[0];
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = scriptName;
            // WEAn bind WEA event to WEA callback function
            // WEAre are several events for cross browser compatibility
            // script.onreadystatechange = callback;
            script.onload = callback;
            // fire WEA loading
            body.appendChild(script);
        } else if (callback) {
            callback();
        }
    };

    // Document on Ready
    $(document).ready(function() {
            WEA.one_page();
    });


    // Window on Resize
    $(window).on("resize", function() {});


})(jQuery);