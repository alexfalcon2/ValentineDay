/*document.getElementById("si-btn").addEventListener("click", function() {
    document.getElementById("texto-si").style.display = "block"; // Mostrar texto "Si"
    document.getElementById("texto-no").style.display = "none"; // Ocultar texto "No"
    document.querySelector(".botones").style.display = "none"; // Ocultar los botones
  });
  
  document.getElementById("no-btn").addEventListener("click", function() {
    document.getElementById("texto-si").style.display = "none"; // Ocultar texto "Si"
    document.getElementById("texto-no").style.display = "block"; // Mostrar texto "No"
    document.querySelector(".botones").style.display = "none"; // Ocultar los botones
  });
  
  document.getElementById("reiniciar-btn").addEventListener("click", function() {
    document.getElementById("texto-si").style.display = "none"; // Ocultar texto "Si"
    document.getElementById("texto-no").style.display = "none"; // Ocultar texto "No"
    document.querySelector(".botones").style.display = "flex"; // Mostrar los botones
  });
  */

  document.getElementById("si-btn").addEventListener("click", function() {
    document.getElementById("texto-si").style.display = "block";
    document.getElementById("texto-no").style.display = "none";
    document.querySelector(".botones").style.display = "none";
  });
  
  document.getElementById("no-btn").addEventListener("click", function() {
    document.getElementById("texto-si").style.display = "none";
    document.getElementById("texto-no").style.display = "block";
    document.querySelector(".botones").style.display = "none";
  });
  
  document.getElementById("reiniciar-btn").addEventListener("click", function() {
    document.getElementById("texto-si").style.display = "none";
    document.getElementById("texto-no").style.display = "none";
    document.querySelector(".botones").style.display = "flex";
  });
  
  // Manejar eventos táctiles
  document.getElementById("si-btn").addEventListener("touchstart", function(event) {
    event.preventDefault(); // Evitar el comportamiento táctil predeterminado si es necesario
    // Resto del código de manejo de eventos...
  });
  
  // Repetir lo mismo para los otros botones si es necesario
  