let elList = document.querySelector(".list");
let elBtn1 = document.querySelector(".btn__1");
let elBtn2 = document.querySelector(".btn__2");
let elBtnBoth = document.querySelector(".btn__both");
let elBtnClean = document.querySelector(".btn__clean");



let pokemonArray = pokemons;
let moviesArray = movies.slice(0, 151);



elBtn1.addEventListener("click", function() {
    elList.innerHTML = null;
    render(pokemonArray);
})
elBtn2.addEventListener("click", function() {
    elList.innerHTML = null;
    render(moviesArray);
})
elBtnBoth.addEventListener("click", function() {
    elList.innerHTML = null;
    let bothArray = pokemons.concat(movies.slice(0, 151));
    render(bothArray);
})
elBtnClean.addEventListener("click", function() {
    elList.innerHTML = null;
})



function render(array) {
    for (const item of array) {
        let newLi = document.createElement("li");
        newLi.classList = "list__item";
        
        let newImg = document.createElement("img");
        let newH3 = document.createElement("h3");
        let newH4 = document.createElement("h4");
        let newH5 = document.createElement("h5");
        let newH6 = document.createElement("h6");
        let newHref1 = document.createElement("a");
        let newBtn1 = document.createElement("button");
        let newBtn2 = document.createElement("button");

        if (item.name) {
            newImg.src = item.img;
            newH3.textContent = item.name;
            newH4.textContent = item.type;
            newH5.textContent = `Weight: ${item.weight}`;
            newH6.textContent = `Height: ${item.height}`;
            newBtn1.style = "display:none";
            newBtn2.style = "display:none";
        } else {
            newImg.src = `https://img.youtube.com/vi/${item.ytid}/mqdefault.jpg`;
            newH3.textContent = item.Title;
            newH4.textContent = item.Categories;
            newH5.textContent = item.movie_year;
            newH6.textContent = item.imdb_rating;
            newHref1.href = `https://www.youtube.com/watch?v=${item.ytid}`;
            newHref1.textContent = "Watch trailer";
            newBtn1.textContent ="Bookmark";
            newBtn2.textContent = "More info";
        }
        newImg.width = "200";
        newLi.appendChild(newImg);
        newLi.appendChild(newH3);
        newLi.appendChild(newH4);
        newLi.appendChild(newH5);
        newLi.appendChild(newH6);
        newLi.appendChild(newHref1);
        newLi.appendChild(newBtn1);
        newLi.appendChild(newBtn2);

        elList.appendChild(newLi);
    }
}