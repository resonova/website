// Preloader
    $(window).on('load', function () {
        $('#preloader').delay(500).fadeOut('slow', function () {
            $(this).remove();
        });
    });
