// DOM ELEMENTS
const cardAlbumElm = document.getElementById("card-album")
const overlayElm = document.getElementById("overlay")
const btnElm = document.getElementById("btn")
const imgBigElm = document.getElementById("img-big")
//EVENTS

axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6")
.then(function(response){
    const cardInfo = response.data
    cardInfo.forEach(card => {
        cardAlbumElm.innerHTML += 
            `<div class="card">
                <img class="img-point" src="./img/pin.svg" alt="puntina">
                <img class="img-fluid" src="${card.url}" alt="${card.title}">
                <p id="card-title">${card.title}</p>
            </div>`
    });
})

