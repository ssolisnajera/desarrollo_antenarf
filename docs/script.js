// Ejemplo de interactividad: Cambiar el color del título al hacer clic
const titulo = document.querySelector('h1');
titulo.addEventListener('click', () => {
    titulo.style.color = 'red';
});