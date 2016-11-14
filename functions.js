$(document).ready(function () {

    var paint = "white";
    $(".color").on("click", function () {
        paint = $(this).css('background-color');
    });
    $('svg').children().on('click', function () {

        $(this).css("fill", paint );
    });

});

