$(document).ready(() => {   
    $('#loginBtn').click(() => {
        $('#loginModal').modal('toggle');
    });
    $('#reservationBtn').click(() => {
        $('#reservationModal').modal('toggle');
    });
    $('#myCarousel').carousel({ interval: 2000 });

    $('#carouselPlayPause').click(function() {
        if ($(this).children('span').hasClass('fa-pause')) {
            $(this).children('span').removeClass('fa-pause').addClass('fa-play');
            $('#myCarousel').carousel('pause');
        } else {
            $(this).children('span').removeClass('fa-play').addClass('fa-pause');
            $('#myCarousel').carousel('cycle');
        }
    });
});