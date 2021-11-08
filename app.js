//API KEY: eLxUOxv6lwapMJ0vJ8ZNtd9z20VyBH31
//api.giphy.com/v1/gifs/random	


const form = document.querySelector('#searchForm');
const giphyArea = document.querySelector('#gif-area');

function createGiphy(res) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('col');

    let img = document.createElement('img');
    img.src = res;

    newDiv.append(img);
    giphyArea.append(newDiv);
    return res;
}


form.addEventListener('submit', async function(e) {
    e.preventDefault();
    let input = document.querySelector('#giphInput');

    const response = await axios.get('https://api.giphy.com/v1/gifs/random', {params: {
        api_key: 'eLxUOxv6lwapMJ0vJ8ZNtd9z20VyBH31',
        tag: input.value}} );
    // console.log(response.data.data.images);
    let imgURL = response.data.data.images.downsized_medium.url;
    input.value = '';
    createGiphy(imgURL);
});

const deleteBtn = document.getElementById('delete');
deleteBtn.addEventListener('click', function() {
    giphyArea.innerHTML = '';
});