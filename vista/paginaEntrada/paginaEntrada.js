window.onload = function() {
    var musica = document.getElementById("musica");
    musica.play().catch(function(error) {
        console.log("La música no pudo reproducirse automáticamente. Asegúrate de que el audio no esté bloqueado por el navegador.");
    });

    const colors = ["lightpurple", "lightblue", "lightgreen", "pink", "yellow", "orange"]; // Colores disponibles
    const spans = document.querySelectorAll("#cabecera span"); // Selecciona todas las letras

    setInterval(function() {
        spans.forEach(span => {
            const randomColor = colors[Math.floor(Math.random() * colors.length)]; // Selecciona un color aleatorio
            span.style.color = randomColor; // Cambia el color de la letra
        });
    }, 500); // Cambia de color cada 500 ms

    // Mostrar la introducción después de que la cabecera se haya reducido
    setTimeout(() => {
        const introduccion = document.querySelector('.introduccion');
        if (introduccion) { // Verifica si el elemento existe
            introduccion.style.opacity = 1; // Cambia la opacidad a 1
            introduccion.style.visibility = 'visible'; // Cambia la visibilidad a visible
        } else {
            console.log("Elemento de introducción no encontrado.");
        }
    }, 5000) // Esto debe coincidir con la duración de la animación de la cabecera
};