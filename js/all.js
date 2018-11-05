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

    // 以打字的方式印出
    let el = document.querySelector('.name');
    let str = el.textContent.split('');
    let time = 0;
    el.textContent = "";

    for(let i = 0; i< str.length;i++){
        time+=150;
        setTimeout(function(){
            el.textContent += str[i];
        },time);
    }
});