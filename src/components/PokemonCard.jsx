import React, { useEffect, useState } from "react";
import "./PokemonCard.css";
import Pokemon from "./Pokemon";
import { GetPokemonURLFromApi, GetEachPokemonFromApi } from "../api.js";

function PokemonCard() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [loadMore, setLoadMore] = useState({
    limit: 20,
    offset: 0,
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchPokemon();
  }, [loadMore]);

  const fetchPokemon = async () => {
    setLoading(true);
    const PokemonURLdata = await GetPokemonURLFromApi(
      loadMore.limit,
      loadMore.offset
    );

    const eachPokemon = PokemonURLdata.results.map(async (pokemon) => {
      return await GetEachPokemonFromApi(pokemon.url);
    });
    const PokemondataResults = await Promise.all(eachPokemon);
    //setAllPokemon(allPokemon.concat(PokemondataResults));
    setAllPokemon(PokemondataResults);
    setLoading(false);
  };
  //console.log(allPokemon);
  return (
    <div className="all_container">
      <div className="pokemon_container">
        {allPokemon.map((pokemon, index) => (
          <Pokemon key={index} pokemon={pokemon} />
        ))}
      </div>

      <div className="button_div">
        <button
          onClick={() => {
            if (!loading && loadMore.offset) {
              setLoadMore({
                offset: loadMore.offset - 20,
              });
            }
          }}
        >
          -20
        </button>
        <button
          onClick={() => {
            if (!loading) {
              setLoadMore({
                offset: loadMore.offset + 20,
              });
            }
          }}
        >
          +20
        </button>
      </div>
    </div>
  );
}
export default PokemonCard;
