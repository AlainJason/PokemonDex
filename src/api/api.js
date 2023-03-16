
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
    
    const ChainURL = await PokemonSpecies.evolution_chain.url;
    const ChainData = await GetEachPokemonFromApi(ChainURL);


    /*const Pokemon = {
      1 :
      2 :
      3 :
    }
    const Species = {
      1 :
      2 :
      3 :
    }*/

    const evolves_one = await P.getPokemonByName(ChainData.chain.species.name);
    const evolves_two = await P.getPokemonByName(ChainData.chain.evolves_to[0].species.name);
    const evolves_tre = await P.getPokemonByName(ChainData.chain.evolves_to[0].evolves_to[0].species.name)
    console.log(ChainData)
    console.log(PokemonSpecies)
    console.log(evolves_one)
    console.log(evolves_two)
    console.log(evolves_tre)
    return [PokemonSpecies, ChainData];
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