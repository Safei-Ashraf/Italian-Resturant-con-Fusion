//Carousel Buttons Script:

// $(document).ready(function()
// {
//     $('#my-carousel').carousel({interval : 3000});
//     $('#carousel-pause').click(function(){
//         $('#my-carousel').carousel('pause');
//     });
//     $('#carousel-play').click(function(){
//         $('#my-carousel').carousel('cycle');
//     })
// });

$(document).ready(function()
{
    $('#my-carousel').carousel({interval: 3000});
    $('#my-carousel').click(function()
    {
        if($('#carousel-btn').children('i').hasClass('fa-pause'))
        {   
            $('#my-carousel').carousel('pause');
            $('#carousel-btn').children('i').removeClass('fa-pause');
            $('#carousel-btn').children('i').addClass('fa-play');
        }
        else if ($('#carousel-btn').children('i').hasClass('fa-play'))
        {   
            $('#my-carousel').carousel('cycle');
            $('#carousel-btn').children('i').removeClass('fa-play');
            $('#carousel-btn').children('i').addClass('fa-pause');
        }

    })
});