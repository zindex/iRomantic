$(function(){
   slider();
   Tabs();
});

function slider(){
    $(".slider__cnt").carouFredSel({
        circular: true,
        infinite: true,
        auto    : true,
        width : "auto",
        height : 350,
        prev    : {
            button  : "#prev",
            key     : "left"
        },
        next    : {
            button  : "#next",
            key     : "right"
        },
        scroll: {
            duration: 600,
            pauseOnHover: true
        }
    });
    $(".caroufredsel_wrapper").height("440px");
}
function Tabs() {
    $('ul.filter').each(function(){
        var isTab = false,
            items = $('li',this);

        //init
        if ( $(this).is('.filter_tabs')){
            isTab = true;
            $(".contact-cnt").hide();
            $(".contact-cnt").eq($('.filter__item_active',this).index()).show();
        }

        items.first().addClass('filter__item_first');
        items.last().addClass('filter__item_last');


        // events
        $(".filter__link",this).click(function(e) {
            if (isTab){
                items.removeClass("filter__item_active");
                $(this).parent('.filter__item').addClass("filter__item_active");
                $(".contact-cnt").hide();

                var activeTab = $(this).attr("href");
                $(activeTab).show();
            } else {
                $(this).parent(".filter__item").toggleClass("filter__item_active");
            }

            e.preventDefault();
        });
    });
}

$(function() {

    //scrolling to anchor
    $("a.navbar__link").click(function () {
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("html").animate({ scrollTop: destination}, 1100 );
        return false;
    });


    // popup open close
    $('.popup-open').click(function(e){
        var Popup=$('.jsShowPopup');
        $('.jsShowPopup')
        Popup.fadeToggle(300);
        e.preventDefault();
    });

    $('.popup__bg').click(function(e){
        $(this).parents('.jsShowPopup').fadeToggle(300);
        $("#installment-box").fadeOut();
        $("#mortgage-box").fadeOut();
        $('#installment-btn, #mortgage-btn').removeClass("btn_small_active");
        e.preventDefault();
    });
    $('.popup__close').click(function(e){
        $(this).parents('.jsShowPopup').fadeToggle(300);
        $("#installment-box").fadeOut();
        $("#mortgage-box").fadeOut();
        $('#installment-btn, #mortgage-btn').removeClass("btn_small_active");
        e.preventDefault();
    });

    // filter nav first child and last child
//    function last_child() {
        //$('.filter .filter__item').addClass('last-child');
    //}

    var tabset = $('.tabset');
    tabset.each(function(){
        var maintab = $('.tabset__item',this);

        //When page loads...
        $(".main__block-info").hide();
        $(".main__block-item:first").addClass("main__block-item_active");
        $(".main__block-info:first").show();

        maintab.click(function(e){
            maintab.removeClass("main__block-item_active");
            $(this).addClass("main__block-item_active");
            $(".main__block-info").fadeOut(500);
            $(".main__block-info", this).fadeIn(500);
            window.location.hash = $(this).attr('id');
            e.preventDefault();
        });
    });

    var getBlockIdHash = window.location.hash;
    var blockId = getBlockIdHash.substring(1);
    if (blockId != "") {
        tabset.each(function(){
            var maintab = $('.tabset__item',this);
            var tabBlock = $('#'+blockId);
            maintab.removeClass("main__block-item_active");
            $(".main__block-info").fadeOut(300);
            tabBlock.addClass('main__block-item_active');
            tabBlock.children(".main__block-info").fadeIn(300);

        });
    }


});

function InitIE(){
	if (($.browser.msie) && (/MSIE (5\.5|6).+Win/.test(navigator.userAgent))) {

	}
}


