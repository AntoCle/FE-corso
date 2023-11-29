document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('cambiaColoreButton');
    var coloredDiv = document.getElementById('coloredDiv');
  
    button.textContent = "Cambia Colore";
  
    var isGrande = false;
  
    button.addEventListener('click', function() {
      var randomColor = getRandomColor();
      coloredDiv.style.backgroundColor = randomColor;
  
      if (isGrande) {
        coloredDiv.classList.remove('grande');
      } else {
        coloredDiv.classList.add('grande');
      }
  
      isGrande = !isGrande;
    });
  
    coloredDiv.addEventListener('mouseover', function() {
      coloredDiv.style.backgroundColor = getRandomColor();
    });
  
    coloredDiv.addEventListener('mouseout', function() {
      coloredDiv.style.backgroundColor = "";
    });
  
    function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  
    coloredDiv.addEventListener('transitionend', function(event) {
      if (event.propertyName === 'width') {
        console.log("Esercizio completato con successo!");
      }
    });
  });
  