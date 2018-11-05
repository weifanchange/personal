$(document).ready(function () {

    $('#fullpage').fullpage({
        anchors: ['home', 'personal', 'education', 'work', 'skill', 'project', 'footer'],
        sectionSelector: '.page',
        scrollOverflow: true,
        menu: '#menu'
    });

    // nav-bar 自動收合
    if($(window).width()<992){
        $('.navbar-nav').click(function (e) { 
            // e.preventDefault();
            $(".navbar-toggler").click();
        });
    }
});