$(function() {
    $("#li1").mouseenter(function() {
      $(".popupMenu").fadeIn();
    });
    $("#container").mouseleave(function() {
      $(".popupMenu").fadeOut();
    });
  });