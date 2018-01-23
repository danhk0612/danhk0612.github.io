$(document).ready(function(){
    $(".on").next().slideToggle("fast").next().toggle(0);
});

$(".list .name").click(function() {
    $(this).toggleClass("on");
    $(this).parent().siblings().children(".name").removeClass("on");
    $(this).next().slideToggle("fast").next().toggle(0);
    $(this).parents().siblings().children("div.right").hide();
    $(this).parents().siblings().children("p.left").hide();    
});