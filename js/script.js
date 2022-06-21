$(document).ready(function() {   
    $('#loginBtn').on('click', function() {
        $('#loginModal').modal('toggle');
    });
    $('#reservationBtn').on('click', function() {
        $('#reservationModal').modal('toggle');
    });
    $('#myCarousel').carousel({ interval: 2000 });

    $('#carouselPlayPause').on('click', function() {
        if ($(this).children('span').hasClass('fa-pause')) {
            $(this).children('span').removeClass('fa-pause').addClass('fa-play');
            $('#myCarousel').carousel('pause');
        } else {
            $(this).children('span').removeClass('fa-play').addClass('fa-pause');
            $('#myCarousel').carousel('cycle');
        }
    });
});