const createPage = (list) => {
  //list of pokemon objects
  let root = document.getElementById("root");
  for (let index = 0; index < list.length; index++) {
    const element = list[index];
    let item = document.createElement("li");
    let anchor = document.createElement("a");
    anchor.setAttribute("pokeDetailUrl",element.url)              //setting poke detail 
    anchor.addEventListener("click",getPokemonDetails);
    // Create the text node for anchor element.
    var link = document.createTextNode(element.name);

    // Append the text node to anchor element.
    anchor.appendChild(link);

    // Set the title.
    anchor.title = "This is Link";

    // Set the href property.

    anchor.href = "#";
    item.appendChild(anchor);
    root.appendChild(item);
  }
};
/*********Function for API call**********/

const callPokeApi = () => {
  fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=100")
    .then((response) => response.json())
    .then((data) => {
      createPage(data.results);
    });
};
window.addEventListener("DOMContentLoaded", callPokeApi);
const getPokemonDetails = (event)=>{
    let source = event.target || event.srcElement;           // source element from where clickhandler was triggered
    let pokeDetailUrl = source.getAttribute("pokedetailurl");
    fetch(pokeDetailUrl)                        //second api call
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      showPokeDetails(data);
    });   
    
}
const showPokeDetails=(data)=>{
    let card =document.getElementById("pokemonDetails");
    card.innerHTML="";
    let name =document.createElement("label");
    let image=document.createElement("img");
    image.setAttribute("src",data.sprites.front_default);
    
    card.appendChild(name);
    card.appendChild(image);
}
