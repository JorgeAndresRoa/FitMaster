
document.addEventListener("DOMContentLoaded", () => {

    // Botones de filtro
    const botonesFiltro = document.querySelectorAll(
        ".botonesGaleria button"
    );

    // Todas las imágenes de la galería
    const imagenesGaleria = document.querySelectorAll(
        ".imagenesGaleria img"
    );


    // Recorrer cada botón
    botonesFiltro.forEach((boton) => {

        boton.addEventListener("click", () => {

            // Obtener la categoría seleccionada
            const filtroSeleccionado = boton.dataset.filtro;


            // Cambiar el estado visual del botón
            botonesFiltro.forEach((btn) => {
                btn.classList.remove("activo");
            });

            boton.classList.add("activo");


            // Mostrar u ocultar imágenes
            imagenesGaleria.forEach((imagen) => {

                const categoriaImagen = imagen.dataset.categoria;

                if (
                    filtroSeleccionado === "todas" ||
                    categoriaImagen === filtroSeleccionado
                ) {
                    imagen.style.display = "block";
                } else {
                    imagen.style.display = "none";
                }

            });

        });

    });

});

