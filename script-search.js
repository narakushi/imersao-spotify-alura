const searchInput = document.getElementById('search-input');
const resultArtists = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists'); 

/**consumindo api */

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists` /* a requisição irá me retornar todos os artistas */
    
    fetch(url)
    .then((response) => {
         return response.json()
        })  /*fica escutando para devolver e resolver a promisse, quando resolvida, devolve o array de artistas */
    .then((data) => search(data, searchTerm)) //o termo a ser pesquisado é passado para uma função de busca
    
}

function displayResults(data){
    resultPlaylist.classList.add('hidden');
    

    const artistName = document.getElementById('artist-name');
    const artistImg = document.getElementById('artist-img');

    artistName.innerText = data.name; /**passo o nome do artista para ser exibido na tela */
    artistImg.src = data.urlImg; /**passo a imagem do artista para também ser exibida */


    resultArtists.classList.remove('hidden');

}

function search(data, searchTerm){ /**busca é realizada por meio do for in que pega o indice de cada elemento do array de artistas*/
    for (let i in data){
        let name = data[i].name.toLowerCase();

       if(name.includes(searchTerm)){ //se o termo a a ser buscado for parecido com o nome de dentro do array de artistas, chamamos a função displayResults para exibir na tela o artista mandando os dados daquele artista p função 
        displayResults(data[i])
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