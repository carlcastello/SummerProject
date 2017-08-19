$(function() {
    var boo = $('.gallery img').attr('src');
    $('.gallery img').removeAttr('src');
    $('.gallery img').attr('href',boo);


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