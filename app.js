//API KEY: eLxUOxv6lwapMJ0vJ8ZNtd9z20VyBH31
//api.giphy.com/v1/gifs/random	

const input = document.querySelector('#giphInput');
const form = document.querySelector('#searchForm');
const giphyArea = document.querySelector('#gif-area');

function createGiphy(res) {
    // let newDiv = document.createElement('div');
    // newDiv.classList.add('col');

    let img = document.createElement('img');
    img.src = res;

    // newDiv.append(img);
    giphyArea.append(img);
    return res;
}

form.addEventListener('submit', async function(e) {
    e.preventDefault();

    const response = await axios.get('https://api.giphy.com/v1/gifs/random', {params: {api_key: 'eLxUOxv6lwapMJ0vJ8ZNtd9z20VyBH31',
    q: input}});
    let imgURL = response.data.data.images.downsized_medium.url;
    // console.log(response.data.data.images.downsized_medium.url);
    createGiphy(imgURL);
});


// async function getGiphy(query) {
//     const result = await axios.get('https://api.giphy.com/v1/gifs/random', {params: {api_key: 'eLxUOxv6lwapMJ0vJ8ZNtd9z20VyBH31',
//     q: query}});
//     const randomImgURL = result.data.data.url;
//     createGiphy(randomImgURL);
// }

// function createGiphy(res) {
//     let newDiv = document.createElement('div');
//     newDiv.classList.add('col');

//     let img = document.createElement('img');
//     img.src = res;

//     newDiv.append(img);
//     giphyArea.append(newDiv);
// }
