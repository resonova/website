// Preloader
    $(window).on('load', function () {
        $('#preloader').delay(300).fadeOut('slow', function () {
            $(this).remove();
        });
    });
