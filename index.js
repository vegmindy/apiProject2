let APIKEY = "odlc9H9ADu8FAsgXOSMfot7RjJLMP99J";
document.addEventListener("DOMContentLoaded", init);
function init() {
document.getElementById("btnSearch").addEventListener("click", event => {
    event.preventDefault();
    let url = `https://api.giphy.com/v1/gifs/random?api_key=${APIKEY}&tag=`;
    let str = document.getElementById("search").value.trim();
    url = url.concat(str);
    fetch(url)
    .then(response => response.json())
    .then(content => {
        let fig = document.createElement("figure");
        let img = document.createElement("img");
        img.src = content.data.images.downsized.url;
        img.alt = content.data.title;
        fig.appendChild(img);
        let out = document.querySelector(".out");
        out.insertAdjacentElement("afterbegin", fig);
        document.querySelector("#search").value = "";
    })
    .catch(err => {
        console.error(err);
    });
});
}


document.getElementById('btnSearch').addEventListener('click', (event) => {
    console.log(event);
    console.log(event.target);
    event.target.style.backgroundColor = 'Gray'
})
