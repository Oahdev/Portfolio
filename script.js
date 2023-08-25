
$(document).ready(function () {
    $(".menuBtn").click(function(){
        $(".sidenav").toggle();
    })
    $("#close-menu-btn").click(function(){
        $(".sidenav").toggle();
    })
    $("#back-to-top button").click(function(){
        $(document).scrollTop(0);
    })
});