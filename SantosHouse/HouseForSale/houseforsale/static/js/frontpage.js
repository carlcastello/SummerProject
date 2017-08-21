$(function() {
    var boo = $('.Home .gallery img').attr('src');
    $('.Home .gallery img').removeAttr('src');
    $('.Home .gallery img').attr('href',boo);


    $('.gallery').each(function () {
        $(this).magnificPopup({
            delegate: 'img',
            type: 'image',
            gallery: {
                enabled: true,
                navigateByImgClick: true
            },
            fixedContentPos: false
        });
    });
});