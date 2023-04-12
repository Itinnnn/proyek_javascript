function addPokemon(name) {
  $(`
        <li class="poke-card">
            <h3 class="name">${name}</h3>
        </li>
    `).appendTo("#pokemon");
}


var pokeAPI = "https://pokeapi.co/api/v2/pokemon?limit=36";
var data;
var nextURL;
var prevURL;


function pokeData(data) {
  nextURL = data.next;
  prevUrl = data.previous;
  $.each(data.results, function (i, pokemon) {
    addPokemon(pokemon.name);
  }); 
} 

$.getJSON(pokeAPI, pokeData);

$(document).ready(function () {
  $("button").click(function () {
   
    $("#pokemon > li").remove();
    var id = $(this).attr("id");
    if (id == "next") {
      pokeAPI = nextURL;
    } else if (id == "previous") {
      pokeAPI = prevUrl;
    }
    $.getJSON(pokeAPI, pokeData);
  }); 
}); 
