const api = 'http://localhost:3000/';

// querySelectorAll() -> devuelve un array como para clases
// Las ids son únicas
const getUsers = document.querySelector('#getUsers');
const getBooks = document.querySelector('#getBooks');
const dataList = document.querySelector('#dataList');

getUsers.addEventListener('click', () => {
    fetch(api + 'users')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const template = data.map(user => `
                <li>
                    <div class="titulo">${user.nombre} ${user.apellidos}</div>
                    <div class="subtitulo">Email: ${user.correo}</div>
                    <div class="lista">
                        <p>Colección:</p>
                        <ul>
                            ${user.coleccion.map(libro => `<li>${libro}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="lista">
                        <p>Wishlist:</p>
                        <ul>
                            ${user.wishlist.map(lista => `<li>${lista}</li>`).join('')}
                        </ul>
                    </div>
                </li>`).join('');
            dataList.innerHTML = template;
        })
        .catch(error => dataList.innerHTML = `No se ha podido obtener datos del servidor ${error}`);
});

getBooks.addEventListener('click', () => {
    fetch(api + 'books')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const template = data.map(libro => `
                <li>
                    <div class="titulo">${libro.titulo}</div>
                    <img src="${libro.imagen}" alt="" class="imagen">
                    <div class="subtitulo">Autor: ${libro.autor}</div>
                    <div class="subtitulo">Fecha de publicación: ${libro.fechaPublicacion}</div>
                </li>`).join('');
            dataList.innerHTML = template;
        })
        .catch(error => dataList.innerHTML = `No se ha podido obtener datos del servidor ${error}`);
});
