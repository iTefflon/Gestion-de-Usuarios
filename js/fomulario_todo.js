$(document).ready(function () {
  const $form = $("#formularioTodo");

  $("#btnCancelarTodo").click(function () {
    $form[0].reset();
    $(".is-invalid").removeClass("is-invalid");
    $(".invalid-feedback").remove();
  });

  $form.submit(function (e) {
    e.preventDefault();
    let valido = true;

    // Limpia errores anteriores
    $(".is-invalid").removeClass("is-invalid");
    $(".invalid-feedback").remove();

    const userId = $("#userId").val().trim();
    const title = $("#title").val().trim();

    if (!userId) {
      $("#userId").addClass("is-invalid").after('<div class="invalid-feedback">ID de usuario requerido</div>');
      valido = false;
    }

    if (!title) {
      $("#title").addClass("is-invalid").after('<div class="invalid-feedback">Título requerido</div>');
      valido = false;
    }

    if (valido) {
      alert("Tarea enviada correctamente");
      $form[0].reset();
    }
  });
});
