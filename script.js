// 1. "Atrapamos" el botón del HTML usando su ID (se lo pondremos en el siguiente paso)
const botonMeta = document.getElementById('boton-meta');

// 2. Le agregamos el sensor de "click"
botonMeta.addEventListener('click', function () {
    // 3. La acción que ocurrirá al hacer click
    alert("🚀 ¡Felicidades! Has activado la interactividad. ¡Tu camino a JavaScript ha comenzado!");
});