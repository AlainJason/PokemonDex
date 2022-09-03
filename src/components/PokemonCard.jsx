import React, { useEffect, useState } from "react";
import "./PokemonCard.css";
import Pokemon from "./Pokemon";
import { GetPokemonURLFromApi, GetEachPokemonFromApi } from "../api.js";

function PokemonCard() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [loadMore, setLoadMore] = useState(10);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    setLoading(true);
    const PokemonURLdata = await GetPokemonURLFromApi(loadMore);
    setLoadMore(loadMore + 10);
    const eachPokemon = PokemonURLdata.results.map(async (pokemon) => {
      return await GetEachPokemonFromApi(pokemon.url);
    });
    const PokemondataResults = await Promise.all(eachPokemon);
    setAllPokemon(PokemondataResults);
    setLoading(false);
  };

  return (
    <div className="all_container">
      {loading ? (
        <h1>Loading pokemones...</h1>
      ) : (
        <div className="pokemon_container">
          {allPokemon.map((pokemon, index) => (
            <Pokemon key={index} pokemon={pokemon} />
          ))}
        </div>
      )}
      <div className="button_div">
        <button
          onClick={() => {
            fetchPokemon();
          }}
        >
          more
        </button>
      </div>
    </div>
  );
}
export default PokemonCard;
