function ampliarPlato(imagen, nombre) {
    var platoAmpliado = document.getElementById('plato-ampliado');
    var platoAmpliadoImg = document.getElementById('plato-ampliado-img');
    var nombrePlato = document.getElementById('nombre-plato');

    platoAmpliado.style.display = 'flex';
    platoAmpliadoImg.src = imagen;
    platoAmpliadoImg.alt = nombre;
    nombrePlato.innerHTML = nombre;
  }

  function cerrarAmpliacion() {
    var platoAmpliado = document.getElementById('plato-ampliado');
    platoAmpliado.style.display = 'none';
  }

  function cerrarAmpliacion() {
    var platoAmpliado = document.getElementById('plato-ampliado');
    platoAmpliado.style.display = 'none';
  }

  // Ocultar la ampliación al cargar la página
  window.onload = function () {
    cerrarAmpliacion();
  };