

export const GetPokemonURLFromApi = async(limit,offset) =>{
    try{
        const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&&offset=${offset}`;
        const api = await fetch(url);
        const pokemonData = await api.json();
        return pokemonData;
    }catch(err){}
};

export const GetEachPokemonFromApi = async(url) =>{
    try{
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