window.onload = function() { 
    setInterval(function() {
    spans.forEach(span => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)]; // Selecciona un color aleatorio
        span.style.color = randomColor; // Cambia el color de la letra
    });
}, 500)
}