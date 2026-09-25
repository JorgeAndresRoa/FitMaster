// Selección de elementos del DOM
const openBtn = document.getElementById('openPopup');
const popup = document.getElementById('miPopup');
const closeX = document.getElementById('closePopup');
const closeBtn = document.getElementById('closePopupBtn');

// Función para abrir el popup
openBtn.addEventListener('click', () => {
    popup.style.display = 'flex';
});

// Funciones para cerrar el popup
const cerrarPopup = () => {
    popup.style.display = 'none';
};

closeX.addEventListener('click', cerrarPopup);
closeBtn.addEventListener('click', cerrarPopup);

// Cerrar si el usuario hace clic afuera de la caja blanca
window.addEventListener('click', (e) => {
    if (e.target === popup) {
        cerrarPopup();
    }
});