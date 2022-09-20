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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadMore]);

  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    console.log('Fetch more list items!');
    setLoadMore({
      offset: loadMore.offset + 20,
    });
  }

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
    setAllPokemon(allPokemon.concat(PokemondataResults));
    //setAllPokemon(PokemondataResults);
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
    </div>
  );
}
export default PokemonCard;
