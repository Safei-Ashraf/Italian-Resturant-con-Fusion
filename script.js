//Carousel Buttons Script:

$(document).ready(function()
{
    $('#my-carousel').carousel({interval : 1000});
    $('#carousel-pause').click(function(){
        $('#my-carousel').carousel('pause');
    });
    $('#carousel-play').click(function(){
        $('#my-carousel').carousel('cycle');
    })
});