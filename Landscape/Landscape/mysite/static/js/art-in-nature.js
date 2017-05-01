// http://stackoverflow.com/questions/4033839/turn-image-src-into-background-image-in-jquery


$(".Home .headline-container header img").each(function(i, elem) {
  var img = $(elem);
  var div = $("<div />").css({
    background: "url(" + img.attr("src") + ") no-repeat center center",
    // background-position: "left -1px",
    width: "inherit",
    height: "100vh"
  });
  img.replaceWith(div);
});


// $(".Home .feature-container .background-image").each(function(i, elem) {
//   var img = $(elem);
//   var div = $(".Home .feature-container").css({
//     background: "url(" + img.attr("src") + ") no-repeat center center fixed",
//     class: "background-image"
//   });
//   img.css({
//   	display: "none"
//   })
// });
