// --- POPUP 1 (Planes y Precios) ---
const openPopup1 = document.getElementById("openPopup1");
const miPopup1 = document.getElementById("miPopup1");
const closePopup1 = document.getElementById("closePopup1");
const closePopupBtn1 = document.getElementById("closePopupBtn1");

if (openPopup1 && miPopup1) {
    // Usamos style.display = "flex" para asegurar que se muestre correctamente
    openPopup1.addEventListener("click", () => miPopup1.style.display = "flex");
    if (closePopup1) closePopup1.addEventListener("click", () => miPopup1.style.display = "none");
    if (closePopupBtn1) closePopupBtn1.addEventListener("click", () => miPopup1.style.display = "none");
}

// --- POPUP 2 (Rutinas Personalizadas) ---
const openPopupTyC = document.getElementById("openPopupTyC");
const miPopupTyC = document.getElementById("miPopupTyC");
const closePopupTyC = document.getElementById("closePopupTyC");
const closePopupBtnTyC = document.getElementById("closePopupBtnTyC");

if (openPopupTyC && miPopupTyC) {
    // Abre el popup de TyC
    openPopupTyC.addEventListener("click", () => {
        miPopupTyC.style.display = "flex";
    });

    // Cierra con la X
    if (closePopupTyC) {
        closePopupTyC.addEventListener("click", () => {
            miPopupTyC.style.display = "none";
        });
    }

    // Cierra con el botón "Entendido"
    if (closePopupBtnTyC) {
        closePopupBtnTyC.addEventListener("click", () => {
            miPopupTyC.style.display = "none";
        });
    }
}

// --- POPUP 3 (Rutinas Personalizadas) ---
const openPopupTyC2 = document.getElementById("openPopupTyC2");
const miPopupTyC2 = document.getElementById("miPopupTyC2");
const closePopupTyC2 = document.getElementById("closePopupTyC2");
const closePopupBtnTyC2 = document.getElementById("closePopupBtnTyC2");

if (openPopupTyC2 && miPopupTyC2) {
    // Abre el popup de TyC
    openPopupTyC2.addEventListener("click", () => {
        miPopupTyC2.style.display = "flex";
    });

    // Cierra con la X
    if (closePopupTyC2) {
        closePopupTyC2.addEventListener("click", () => {
            miPopupTyC2.style.display = "none";
        });
    }

    // Cierra con el botón "Entendido"
    if (closePopupBtnTyC2) {
        closePopupBtnTyC2.addEventListener("click", () => {
            miPopupTyC2.style.display = "none";
        });
    }
}
// --- POPUP 4 (Rutinas Personalizadas) ---
const openPopup2 = document.getElementById("openPopup2");
const miPopup2 = document.getElementById("miPopup2");
const closePopup2 = document.getElementById("closePopup2");
const closePopupBtn2 = document.getElementById("closePopupBtn2");

if (openPopup2 && miPopup2) {
    // Abre el popup de TyC
    openPopup2.addEventListener("click", () => {
        miPopup2.style.display = "flex";
    });

    // Cierra con la X
    if (closePopup2) {
        closePopup2.addEventListener("click", () => {
            miPopup2.style.display = "none";
        });
    }

    // Cierra con el botón "Entendido"
    if (closePopupBtn2) {
        closePopupBtn2.addEventListener("click", () => {
            miPopup2.style.display = "none";
        });
    }
}

// Cerrar cualquiera si hacen clic fuera del recuadro blanco (en el fondo oscuro)
window.addEventListener("click", (e) => {
    if (e.target === miPopup1) miPopup1.style.display = "none";
    if (e.target === miPopupTyC) miPopupTyC.style.display = "none";
    if (e.target === miPopupTyC2) miPopupTyC2.style.display = "none";
    if (e.target === miPopup2) miPopup2.style.display = "none";
});
