function toggleAnswer(index) {
    // Obtenemos todos los elementos con la clase 'qa-container'
    var elements = document.querySelectorAll('.qa-container');
  
    // Ocultamos todas las respuestas
    elements.forEach(function(element) {
      element.classList.remove('show-answer');
    });
  
    // Mostramos la respuesta del elemento clicado
    elements[index - 1].classList.add('show-answer');
  }
  