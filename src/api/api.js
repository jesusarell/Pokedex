export const api = {
  
  pokemon: async (pokemonId) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    //console.log(response.json())
    const objetToDesestructure = await response.json()
    const { name, id, weight, height, types } = objetToDesestructure;
    const filteredTypes = types.map(type => type.type.name);

    const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin urna justo, suscipit vitae neque vel, porttitor condimentum lectus.'
  
    return  {
      name,
      id,
      types: filteredTypes,
      weight: weight/10,
      height: height/10,
      description
    };
  },
  iconPokemons: async (pokemonId) => {
    const response = await fetch(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}`)
    return await response.json()
  }
}
