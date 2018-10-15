$(document).ready(function () {

    wdth=$(window).width();
    // console.log(wdth);
    IconSize(wdth);

    $(window).resize(function() {
        wdth=$(window).width();
        IconSize(wdth);
        // console.log(wdth);
    });
    $(".st-bar").click(function (e) { 
        e.preventDefault();
        $(".st-bar i").toggleClass("active");
        $(".header ul").slideToggle();
    });
    $(".bar-item").click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 700);
        if(wdth<=550){
            $(".st-bar i").toggleClass("active");
            $(".header ul").slideToggle();
        }
    });
    function IconSize(wdth){
        if(wdth>550)
        {
            $(".skill-box span").removeClass();
            $(".skill-box span").addClass("fa-stack fa-lg fa-4x st-transform");
            $(".header ul").show();
            $(".header .st-bar").hide();
        }
        else if(wdth>400 && wdth<=550)
        {
            $(".skill-box span").removeClass();
            $(".skill-box span").addClass("fa-stack fa-lg fa-3x st-transform");

            $(".header ul").hide();
            $(".header .st-bar").show();
        }
        else if(wdth<400){
            $(".skill-box span").removeClass();
            $(".skill-box span").addClass("fa-stack fa-lg fa-2x st-transform");
            $(".header ul").hide();
            $(".header .st-bar").show();
        }
    }
});