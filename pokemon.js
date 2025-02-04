
const container = document.querySelector('#container'); // Select section by3. ID
const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'; // Base URL for Pokémon images

for (let i = 1; i <= 151; i++) {
    const pokemon = document.createElement('div'); // Create a div element
    pokemon.classList.add('pokemon'); // Add a class named "pokemon"

    const label = document.createElement('span'); // Create a span
    label.innerText = `#${i}`; // Set the inner text to the Pokémon number

    const newImg = document.createElement('img'); // Create an img element
    newImg.src = `${baseUrl}${i}.png`; // Construct the URL for each Pokémon image

    pokemon.appendChild(newImg); // Append the img element to the div
    pokemon.appendChild(label); // Append the span element to the div
    container.appendChild(pokemon); // Append the div element to the container
}
// `${baseUrl}${i}.png`: Constructs the image URL as:
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png,
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png, etc.
