

export const GetPokemonURLFromApi = async(limit) =>{
    try{
        const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
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