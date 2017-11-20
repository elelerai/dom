$(document).ready(function() {
  $("button#cat").click(function() {
    $("ul#cat").prepend("<li>meow!</li>");
    $("ul#dog").prepend("<li>wow!</li>");
    $('li').css('background-color', 'green');
  });

  $("button#dog").click(function() {
    $("ul#cat").prepend("<li>meow!</li>");
    $("ul#cat").children("li").first().click(function() {
      $(this).remove();
      $("ul#dog").prepend("<li>wow!</li>");
  });
});

  $("ul#dog").children("li").first().click(function() {
    $(this).remove();
  $("button#stop").click(function() {
    $("ul#cat").prepend("<li>meow!</li>");
    $("ul#dog").prepend("<li>wow!</li>");
  });
  });

});
