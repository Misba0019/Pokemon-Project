
const container = document.querySelector('#container'); // Select section by3. ID
const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'; // Base URL for Pokémon images

async function loadPokemon() {
    for (let i = 1; i <= 151; i++) {
        const pokemon = document.createElement('div');
        pokemon.classList.add('pokemon');

        const label = document.createElement('span');
        label.innerText = `#${i}`;

        const newImg = document.createElement('img');
        newImg.src = `${baseUrl}${i}.png`;

        pokemon.appendChild(newImg);
        pokemon.appendChild(label);
        container.appendChild(pokemon);

        // Add a delay of 600ms between requests
        await new Promise(resolve => setTimeout(resolve, 600));
    }
}

loadPokemon();
// `${baseUrl}${i}.png`: Constructs the image URL as:
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png,
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png, etc.
