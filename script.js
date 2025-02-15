function openEnvelope() {
    document.getElementById('letter').style.display = 'block'; // Muestra la carta
    document.getElementById('paperImage').style.display = 'none'; // Oculta la imagen de la hoja de papel
}

function createBouquet() {
    // Oculta el ramo vacío
    document.getElementById('emptyBouquet').style.display = 'none';

    // Obtiene los valores seleccionados
    const flowerType = document.getElementById('flowerType').value;
    const flowerColor = document.getElementById('flowerColor').value;

    // Define la ruta de la imagen según la combinación
    let bouquetImage = '';

    if (flowerType === 'roses') {
        if (flowerColor === 'red') {
            bouquetImage = 'https://goo.su/ah0zX1'; // Cambia a la ruta de la imagen de rosas rojas
        } else if (flowerColor === 'white') {
            bouquetImage = 'https://goo.su/QlUySlI'; // Cambia a la ruta de la imagen de rosas blancas
        } else if (flowerColor === 'pink') {
            bouquetImage = 'https://goo.su/vrjG'; // Cambia a la ruta de la imagen de rosas rosadas
        } else if (flowerColor === 'purple') {
            bouquetImage = 'https://goo.su/t5WFrM'; // Cambia a la ruta de la imagen de rosas moradas
        }
    } else if (flowerType === 'tulips') {
        if (flowerColor === 'red') {
            bouquetImage = 'https://goo.su/ZFyYdm'; // Cambia a la ruta de la imagen de tulipanes rojos
        } else if (flowerColor === 'white') {
            bouquetImage = 'https://goo.su/BAJdlk'; // Cambia a la ruta de la imagen de tulipanes blancos
        } else if (flowerColor === 'pink') {
            bouquetImage = 'https://goo.su/U3BeG'; // Cambia a la ruta de la imagen de tulipanes rosados
        } else if (flowerColor === 'purple') {
            bouquetImage = 'https://goo.su/OUOM3Uh'; // Cambia a la ruta de la imagen de tulipanes morados
        }
    } else if (flowerType === 'daisies') {
        if (flowerColor === 'red') {
            bouquetImage = 'https://goo.su/nuDxY'; // Cambia a la ruta de la imagen de margaritas rojas
        } else if (flowerColor === 'white') {
            bouquetImage = 'https://goo.su/7JtzWh'; // Cambia a la ruta de la imagen de margaritas blancas
        } else if (flowerColor === 'pink') {
            bouquetImage = 'https://goo.su/RD299X'; // Cambia a la ruta de la imagen de margaritas rosadas
        } else if (flowerColor === 'purple') {
            bouquetImage = 'https://goo.su/Oj0B4xh'; // Cambia a la ruta de la imagen de margaritas moradas
        }
    }

    // Muestra la imagen del ramo lleno
    const filledBouquet = document.getElementById('filledBouquet');
    filledBouquet.src = bouquetImage; // Asigna la ruta de la imagen
    filledBouquet.style.display = 'block'; // Muestra la imagen
}
