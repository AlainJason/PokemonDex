import React, { useEffect, useState } from "react";
import "./PokemonProfile.css";
import { useNavigate, useParams } from "react-router-dom";
import { GetEachPokemonFromApi } from "../api";
import { BackgroundColorChoose } from "../background";
import { LinearProgress } from "@mui/material";
const PokemonProfile = () => {
  let { pokemonName } = useParams();
  const [pokemon, setPokemon] = useState([
    {
      Pokemon: {},
      PokemonSpecies: {},
      PokemonEvolutionChain: {
        ONE: "",
        TWO: "",
        THREE: "",
        nameONE: "",
        nameTWO: "",
        nameTHREE: "",
      },
    },
  ]);
  const navigate = useNavigate();
  function cclick(e) {
    navigate("/" + e.target.name);
  }

  const [loading, setLoading] = useState(true);
  const PokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
  const PokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`;

  const ppp = async () => {
    setLoading(true);
    const eachPokemon = await GetEachPokemonFromApi(PokemonUrl);
    const eachPokemonSpecies = await GetEachPokemonFromApi(PokemonSpeciesUrl);
    const chain = await GetEachPokemonFromApi(
      eachPokemonSpecies.evolution_chain.url
    );
    const chainIMG1 = await GetEachPokemonFromApi(
      `https://pokeapi.co/api/v2/pokemon/${chain.chain?.species.name}`
    );
    const chainIMG2 = await GetEachPokemonFromApi(
      `https://pokeapi.co/api/v2/pokemon/${chain.chain?.evolves_to[0]?.species.name}`
    );
    const chainIMG3 = await GetEachPokemonFromApi(
      `https://pokeapi.co/api/v2/pokemon/${chain.chain?.evolves_to[0]?.evolves_to[0]?.species.name}`
    );
    setPokemon({
      Pokemon: eachPokemon,
      PokemonSpecies: eachPokemonSpecies,
      PokemonEvolutionChain: {
        ONE: chainIMG1.sprites.front_default,
        TWO: chainIMG2?.sprites.front_default,
        THREE: chainIMG3?.sprites.front_default,
        nameONE: chain.chain?.species.name,
        nameTWO: chain.chain?.evolves_to[0]?.species.name,
        nameTHREE: chain.chain?.evolves_to[0]?.evolves_to[0]?.species.name,
      },
    });
    setLoading(false);
  };
  useEffect(() => {
    ppp();
  }, [pokemonName]);
  return (
    <div className="box">
      {loading ? (
        <h1>Loading pokemones...</h1>
      ) : (
        <div
          className="pokemon_each_container"
          style={{
            background:
              "linear-gradient(" +
              BackgroundColorChoose(pokemon.Pokemon.types[0].type.name) +
              "," +
              BackgroundColorChoose(
                pokemon.Pokemon.types[1]?.type.name
                  ? pokemon.Pokemon.types[1].type.name
                  : pokemon.Pokemon.types[0].type.name
              ) +
              ")",
          }}
        >
          <div className="pokemon_base_imf">
            <h5>#0{pokemon.Pokemon.id}</h5>
            <h1>{pokemon.Pokemon.name}</h1>
            <img src={pokemon.Pokemon.sprites.front_default} alt="" />
            <div className="pokemon_type_container2">
              {pokemon.Pokemon.types.map((type, index) => {
                return (
                  <span
                    key={type.type.name}
                    className={type.type.name + " pokemon_type"}
                  >
                    {type.type.name}
                  </span>
                );
              })}
            </div>
            <h2>{pokemon.PokemonSpecies.genera[7].genus}</h2>
            <h4>Height : {pokemon.Pokemon.height / 10} m</h4>
            <h4>Weight : {pokemon.Pokemon.weight / 10} kg</h4>
          </div>
          <div className="more_imf_container">
            <h4>{pokemon.Pokemon.stats[0].stat.name}</h4>
            <LinearProgress
              variant="determinate"
              value={
                pokemon.Pokemon.stats[0].base_stat > 100
                  ? 100
                  : pokemon.Pokemon.stats[0].base_stat
              }
            />
            <h4>{pokemon.Pokemon.stats[1].stat.name}</h4>
            <LinearProgress
              variant="determinate"
              value={
                pokemon.Pokemon.stats[1].base_stat > 100
                  ? 100
                  : pokemon.Pokemon.stats[1].base_stat
              }
            />
            <h4>{pokemon.Pokemon.stats[2].stat.name}</h4>
            <LinearProgress
              variant="determinate"
              value={
                pokemon.Pokemon.stats[2].base_stat > 100
                  ? 100
                  : pokemon.Pokemon.stats[2].base_stat
              }
            />
            <h4>{pokemon.Pokemon.stats[3].stat.name}</h4>
            <LinearProgress
              variant="determinate"
              value={
                pokemon.Pokemon.stats[3].base_stat > 100
                  ? 100
                  : pokemon.Pokemon.stats[3].base_stat
              }
            />
            <h4>{pokemon.Pokemon.stats[4].stat.name}</h4>
            <LinearProgress
              variant="determinate"
              value={
                pokemon.Pokemon.stats[4].base_stat > 100
                  ? 100
                  : pokemon.Pokemon.stats[4].base_stat
              }
            />
            <h4>{pokemon.Pokemon.stats[5].stat.name}</h4>
            <LinearProgress
              variant="determinate"
              value={
                pokemon.Pokemon.stats[5].base_stat > 100
                  ? 100
                  : pokemon.Pokemon.stats[5].base_stat
              }
            />
            <h1>Pokemon Evolution Chain</h1>
            <div className="PokemonEvolutionChain">
              <img
                src={pokemon.PokemonEvolutionChain.ONE}
                name={pokemon.PokemonEvolutionChain.nameONE}
                alt=""
                onClick={cclick}
              />
              <img
                src={pokemon.PokemonEvolutionChain.TWO}
                name={pokemon.PokemonEvolutionChain.nameTWO}
                alt=""
                onClick={cclick}
              />
              <img
                src={pokemon.PokemonEvolutionChain.THREE}
                name={pokemon.PokemonEvolutionChain.nameTHREE}
                alt=""
                onClick={cclick}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonProfile;
