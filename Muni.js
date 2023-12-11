

const carrusel = document.getElementById('carrusel');
    let currentIndex = 0;

    function mostrarDiapositiva(index) {
        const imagenes = carrusel.getElementsByTagName('img');
        for (let i = 0; i < imagenes.length; i++) {imagenes[i].style.display = 'none'; }
        imagenes[index].style.display = 'block';
    }
    
    function siguienteDiapositiva() {
        currentIndex = (currentIndex + 1) % carrusel.childElementCount;
        mostrarDiapositiva(currentIndex);
    }

    function anteriorDiapositiva() {
        currentIndex = (currentIndex - 1 + carrusel.childElementCount) % carrusel.childElementCount;
        mostrarDiapositiva(currentIndex);
    }

    mostrarDiapositiva(currentIndex);

const btnSiguiente = document.createElement('button');
    btnSiguiente.textContent = 'Siguiente';
    btnSiguiente.addEventListener('click', siguienteDiapositiva);

    const btnAnterior = document.createElement('button');
    btnAnterior.textContent = 'Anterior';
    btnAnterior.addEventListener('click', anteriorDiapositiva);

    carrusel.parentNode.insertBefore(btnAnterior, carrusel);
    carrusel.parentNode.insertBefore(btnSiguiente, carrusel);
