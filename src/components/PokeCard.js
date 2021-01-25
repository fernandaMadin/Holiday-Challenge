import React from "react";
import { mockPokemonData } from "./../mock/pokeData";

function PokeCard() {
  return (
    <div class="container">
      <h1>{mockPokemonData.name}</h1>
      <div>
        <img src={mockPokemonData.sprites.front_default} alt="pokemon" />
        <img src={mockPokemonData.sprites.front_shiny} alt="pokemon Shiny" />
      </div>
      <div class="footer">
        <a href={mockPokemonData.video}>Video</a>
      </div>
    </div>
  );
}

export default PokeCard;
