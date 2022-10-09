const pokemons = [
  {
    name: "Bulbasaur",
    id: "001",
    types: ["grass", "poison", "fire"],
    weight: 8.5,
    height: 0.6,
    description: "Bulbasaur are small, squat amphibian and plant Pokémon that move on all four legs, and have blue-green bodies with darker blue-green spots."
  },
  {
    name: "Charmander",
    id: "004",
    types: ["fire"],
    weight: 2.3,
    height: 1.6,
    description:"Charmander is a small, bipedal, dinosaur like Pokémon. Most of its body is colored orange, while its underbelly is a light yellow color."
  },
  {
    name: "Squirtie",
    id: "007",
    types: ["water"],
    weight: 4.5,
    height: 2.3,
    description:"Squirtle, known as the Tiny Turtle Pokémon, are turtle Pokémon with large eyes and chubby cheeks"
  },
]

export const api = {
  pokemonByName: (name) => {
    const capitalizeName = name[0].toUpperCase() + name.substring(1).toLowerCase();
    const result = pokemons.filter((pokemon) => {
      if (pokemon.name == capitalizeName) {
        return pokemon;
      }
    });
    return result[0];
  }
}
