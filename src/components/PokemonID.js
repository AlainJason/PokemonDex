
export const PokemonID = (id) => {
  if(id < 10){
    return '000'+id
  }else if(id < 100){
    return '00'+id
  }else if(id < 1000){
    return '0'+id
  }else{
    return id
  }
}