import './Home.css'
import React, { useEffect, useState } from 'react'
import {Tag} from "./Tag.js";
import {api} from "../../api/api.js";
import iconWeight from '../img/weight.svg';
import iconHeight from '../img/height.svg';


export const Home = () => {
  const [pokemon, setPokemon] = useState()
    
  useEffect(() => {
      const getPokemonById = async () => {
        const pokemon = await api.pokemon(54);
        setPokemon(pokemon); 
      }
      getPokemonById();
    }, [])
    //console.log(pokemon)
  
    return (
      
      <main >
        
        <Header> </Header>
        <PokemonCard pokemon={pokemon}> </PokemonCard>
        <PokemonCard pokemon={pokemon}> </PokemonCard>
        <Footer></Footer>
      </main>
    )
  }
  
export const Header = () => {

}

export const PokemonCard = ({ pokemon }) => {

  const mapId = (id) => {
    if(id < 10){ return `00${id}`}
    if(id < 100){ return `0${id}`}
    else{ return id}
  }

  //const pokemonTypes = pokemon.types;
  // console.log("types:", pokemonTypes)
  console.log(pokemon)
  if (!pokemon){
    return null
  }

  return (
    <section className="card">
      <header className="card__header">
        <h2 className="card__title">{pokemon.name}</h2>
        <div className="card__id">#{mapId(pokemon.id)}</div>
      </header>
      <div className="card__img">
        <img
          className="card__img--dim"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}`}
          alt={pokemon.name}
        ></img>
      </div>
      <div className="card__characteristics">
        <div className="card__types">
          {pokemon.types.map((type) => (
            <Tag type={type}></Tag>
          ))}
          {/* <div className="card__types--grass">Grass</div> */}
          {/* <Tag type="grass"></Tag> */}
          {/* <div className="card__types--poison">Poison</div> */}
          {/* <Tag type="PoisoN"></Tag> */}
        </div>
        <div className="card__about">
          {/* <h3 className='card__about--grass'>About</h3> */}
          <h3 className={`card__about--${pokemon.types[0]}`}>About</h3>
        </div>
        <div className='card__metrics'>
          <div className='card__metrics--item card__metrics--weight'>
          <img
            className='card__metrics__img--weight'
            src={iconWeight}
            alt={pokemon.name}
          ></img>
        {pokemon.weight} kg</div>
          <div className='card__metrics--item card__metrics--height'>
          <img
            className='card__metrics__img--height'
            src={iconHeight}
            alt={pokemon.name}
          ></img>
          {pokemon.height} m</div>
        </div>
        <p className='card__description'>{pokemon.description }</p>
      </div>
    </section>
  );

}

export const Footer = () => {
  
}
