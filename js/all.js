$(document).ready(function () {

    $('#fullpage').fullpage({
        anchors: ['home', 'personal', 'education', 'work', 'skill', 'project'],
        sectionSelector: '.page',
        scrollOverflow: true,
        menu: '#menu'
    });

    $(".st-bar").click(function (e) { 
        e.preventDefault();
        $(".st-bar i").toggleClass("active");
        $(".header ul").slideToggle();
    });
    
    $(".bar-item").click(function (e) {
        // e.preventDefault();
        var WIDTH = $(window).innerWidth();
        if(WIDTH<=550){
            $(".st-bar i").toggleClass("active");
            $(".header ul").slideToggle(); 
        }
    });

    // 視窗變化事件
    $(window).resize(function () { 
        var WIDTH = $(window).innerWidth();
        if(WIDTH>550){
            $(".header ul").show();
        }
        else{
            $(".header ul").hide();
        }
    });
});