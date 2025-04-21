window.onload = function() {
    // Seleccionar todos los spans dentro de la cabecera
    const spans = document.querySelectorAll('.cabecera span');
    
    // Array de colores para el efecto
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    
    setInterval(function() {
        spans.forEach(span => {
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            span.style.color = randomColor;
        });
    }, 500);
};