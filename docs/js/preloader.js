// Preloader
    $(window).on('load', function () {
        $('#preloader').delay(200).fadeOut('slow', function () {
            $(this).remove();
        });
    });
