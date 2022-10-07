import './Home.css'
import React from 'react'


export const Home = () => {
    
  
    return (
      
      <main >
        <h1> Esta funcionando :) </h1>
        <Header> </Header>
        <PokemonCard> </PokemonCard>
        <Footer></Footer>
      </main>
    )
  }
  
export const Header = () => {

}

export const PokemonCard = () => {


  return (
    <section className="card">
      <header className="card__header">
        <h2 className="card__title">Bulbasaur</h2>
        <div className="card__id">#001</div>
      </header>
      <div className="card__img">
        <img
          className="card__img--dim"
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
          alt="Bulbasaur"
        ></img>
      </div>
      <div className="card__characteristics">
        <div className="card__types">
          <div className="card__types--grass">Grass</div>
          <div className="card__types--poison">Poison</div>
        </div>
        <div className="card__about">
          <h3 className='card__about--grass'>About</h3>
        </div>
        <div className='card__metrics'>
          <div className='card_metrics--kg'>Kg</div>
          <div className='card_metrics--'>Altura</div>
        </div>
        <p>Descripcion del pokemon</p>
      </div>
    </section>
  );

}

export const Footer = () => {
  
}