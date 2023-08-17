Letra de Canciones Aleatorias - README
Este repositorio contiene un código JavaScript que te permite obtener letras de canciones aleatorias de varios artistas musicales. Junto con este archivo, también hay otro archivo llamado arrays.js que contiene arreglos con tres frases de canciones para cada artista.

Cómo Utilizar el Código
    1. Clona este repositorio en tu máquina local o descarga los archivos.

    2. Abre el archivo HTML en tu navegador web preferido.

    3. En la página, verás imágenes de varios artistas. Haz clic en la imagen del artista cuya letra de canción deseas obtener.

    4. Aparecerá un modal que muestra una frase aleatoria de una canción del artista seleccionado. También se cambiará el título del modal para reflejar el artista seleccionado.

    5. Cada vez que hagas clic en una imagen de artista, obtendrás una frase diferente de una canción aleatoria de ese artista.

Estructura del Código
    ° El archivo arrays.js contiene arreglos con tres frases de canciones para cada artista. Estos arreglos son importados en el archivo principal.

    ° En el archivo principal, el formulario (formulario) es un botón y está conectado a un evento click. Cuando se hace clic en una imagen de artista, el evento se dispara y se llama a la función imagenClickeada.

    ° La función imagenClickeada captura el texto alternativo (atributo alt) de la imagen que se ha clicado y lo pasa a la función comprobacion.

    ° La función comprobacion selecciona una frase aleatoria del arreglo correspondiente al artista y luego llama a las funciones imprimirFrase y cambiarTitulo para actualizar el contenido del modal.

    ° La función imprimirFrase actualiza el contenido del cuerpo del modal con la frase de la canción aleatoria.

    ° La función cambiarTitulo actualiza el título del modal con el nombre del artista.

Contribuciones
Si deseas contribuir a este proyecto, puedes hacerlo abriendo una bifurcación (fork) del repositorio, implementando tus cambios y luego abriendo una solicitud de extracción (pull request) para que tus cambios sean revisados y, si es apropiado, fusionados.

Este código puede ser útil para aprender cómo interactuar con eventos en JavaScript y cómo mostrar información en una página web utilizando modales. ¡Siéntete libre de explorar, experimentar y mejorar este código!