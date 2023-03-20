
import Pokedex from 'pokedex-promise-v2';

const P = new Pokedex();

export const GetPokemonsList = async (interval) => { 
  try {
      const PokemonsList = await P.getPokemonsList(interval);
      
      const eachPokemon = PokemonsList.results.map(
        async (pokemon) => {
          const response = await GetEachPokemonFromApi(pokemon.url);
          return response;
        }
      );
      const Pokemondata = await Promise.all(eachPokemon);
      return Pokemondata;
  } catch (error){
  }
};

export const GetPokemonSpeciesByName = async (name) => {
  try{
    const PokemonSpecies = await P.getPokemonSpeciesByName(name);
    const PokemonDefault = await P.getPokemonByName(name);    
    return [PokemonSpecies, PokemonDefault];
  }
  catch (error){
    console.log('There was an ERROR: ', error);
  }
};


export const GetEvolutionChainById = async (id) => {
  try{
    const evolutionChain = await P.getEvolutionChainById(id);
    
    
    console.log(evolutionChain)

  }
  catch (error){
    console.log('There was an ERROR: ', error);
  }
};


export const GetEachPokemonFromApi = async(url) =>{
  try{
      const api = await fetch(url);
      const pokemonData = await api.json();
      return pokemonData;
  }catch(err){}
};

///// not used yet /////

export const GetPokemonURLFromApi = async(limit,offset) =>{
    try{
        const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&&offset=${offset}`;
        const api = await fetch(url);
        const pokemonData = await api.json();
        return pokemonData;
    }catch(err){}
};


export const GetEachPokemonSpeciesFromApi = async(url) =>{
    try{
        const api = await fetch(url);
        const pokemonData = await api.json();
        return pokemonData;
    }catch(err){}
};