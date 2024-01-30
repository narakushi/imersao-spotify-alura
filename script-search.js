const searchInput = document.getElementById('search-input');
const resultArtists = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists'); 

/**consumindo api */

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists` /** para que na hora da busca, não sejam carregados todos os arquivos que iniciem com determinado termo que o usuário digitou e sim só os que se parecerem com o que ele busca */
    
    fetch(url)
    .then((response) => {
         return response.json()
        })  /*fica escutando para devolver e resolver a promisse */
    .then((data) => search(data, searchTerm))
    
}

function displayResults(data){


    let gridContainer = document.querySelector('.grid-container');
    resultPlaylist.classList.add('hidden');
    resultArtists.classList.remove('hidden');

    let artistCard = ` 
    <div class="artist-card">
        <div class="card-img">
            <img id="artist-img" class="artist-img" href="${data.urlImg}">
            <div class="play">
                <span class="fa fa-solid fa-play"></span>
            </div>
        </div>
        <div class="card-text">
            <a title="Foo Fighters" class="vst" href="">
                <span class="artist-name" id="artist-name">${data.name}</span>
                <span class="artist-categorie">Artista</span>
            </a> 
        </div>
    </div>`;



    gridContainer.innerHTML = artistCard;

}

function search(data, searchTerm){
    for (let i in data){
        let name = data[i].name.toLowerCase();
        let genre = data[i].genre.toLowerCase();

       if(name.includes(searchTerm) || genre.includes(searchTerm)){
        displayResults(data[i], searchTerm)
       }
    }
    
}


document.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();
    if(searchTerm === ''){
        resultPlaylist.classList.remove('hidden');
        resultArtists.classList.add('hidden');
        return;
    }

    requestApi(searchTerm);
})