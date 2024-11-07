console.log('Pokemon Journey begins...');

const encounterButton = document.getElementById('pokemonEncounterButton');

async function getPokemon(){
    console.log("Looking for a wild pokemon");
    
    let apiResponse = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    let apiData = await apiResponse.json();

    let pokemonName = apiData.name;
    return pokemonName;
}

// encounterButton.addEventListener('click', getPokemon);

encounterButton.addEventListener('click', async(event) => {
    console.log("Doing something...")

    let pokemonResult = await getPokemon();

    console.log(pokemonResult);
});
