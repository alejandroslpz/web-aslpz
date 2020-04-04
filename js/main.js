$(document).ready(function() {
  $("#enviar").click(function() {
    if (
      $("#nombre").val() != "" &&
      $("#mail").val() != "" &&
      $("#mensaje").val() != ""
    ) {
      alert(
        "¡Gracias por contactarme! En breve recibirás un correo de mi parte."
      );
    }
  });

  $(".js")
    .circleProgress({
      value: 0.75,
      size: 80,
      fill: {
        color: "#0097a7"
      }
    })
    .on("circle-animation-progress", function(event, progress) {
      $(this)
        .find("strong")
        .text(Math.round(75 * progress) + "%");
    });

  $(".py")
    .circleProgress({
      value: 0.35,
      size: 80,
      fill: {
        color: "#0097a7"
      }
    })
    .on("circle-animation-progress", function(event, progress) {
      $(this)
        .find("strong")
        .text(Math.round(45 * progress) + "%");
    });
});
