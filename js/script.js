
$(document).ready(function () {
    $(".menuBtn").click(function(){
        $(".sidenav").toggle(700);
    })
    $("#close-menu-btn").click(function(){
        $(".sidenav").toggle(700);
    })
    $("#back-to-top button").click(function(){
        $(document).scrollTop(0);
    })
});