// DOM ELEMENTS
const cardAlbumElm = document.getElementById("card-album")

//EVENTS

axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6")
.then(function(response){
    const cardInfo = response.data
    cardInfo.forEach(card => {
        console.log(card)
        cardAlbumElm.innerHTML += 
            `<div class="card">
            <img class="img-point" src="./img/pin.svg" alt="puntina">
             <img class="img-fluid" src="${card.url}" alt="image-1">
            <p id="card-title">${card.title}</p>
            </div>`
    });
})