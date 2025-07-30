<script>
  // Comprobar si ya se ha cerrado antes
  if (!localStorage.getItem("espacioAvisoOculto")) {
    document.getElementById("espacio-aviso").style.display = "block";
  }

  // Ocultar y guardar preferencia al pulsar el botón
  document.getElementById("cerrar-aviso").addEventListener("click", function() {
    document.getElementById("espacio-aviso").style.display = "none";
    localStorage.setItem("espacioAvisoOculto", "true");
  });
</script>
