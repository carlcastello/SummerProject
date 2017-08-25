$(function() {
    var boo = $('.Gallery .gallery img').attr('src');
    $('.Gallery .gallery a').attr('href',boo);

    $('.Gallery .gallery').each(function () {
        $(this).magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery: {
                enabled: true,
                navigateByImgClick: true
            },
            fixedContentPos: false
        });
    });
});

