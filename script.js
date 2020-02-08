//Carousel Buttons Script:

$(document).ready(function()
{
    $('#my-carousel').carousel({interval : 3000});
    $('#carousel-pause').click(function(){
        $('#my-carousel').carousel('pause');
    });
    $('#carousel-play').click(function(){
        $('#my-carousel').carousel('cycle');
    })
});