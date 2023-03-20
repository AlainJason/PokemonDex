import styled from 'styled-components';
import { PokemonTypeColors } from '../TypeColor'

export const PokemonContainer = styled.div`
    padding-top:1rem;
    //background-color: aqua;
    display: grid;
    grid-template-columns: repeat(3, 300px);
    gap: 1.5rem;
    justify-content: center;
    overflow-y: auto;
    overflow-x: hidden;
    @media (max-width: 950px) {
      grid-template-columns: repeat(2, 300px);
    }
    @media (max-width: 700px) {
      grid-template-columns: repeat(1, 300px);
    }
    
    &::-webkit-scrollbar {
      display: none;
    }
`;

export const StyledPokemon = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 5%;
  text-align: center;
  line-height: 1.5rem;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -2px rgba(0,0,0,.05);
  h4{
    text-transform: capitalize;
  }
`;
export const PokemonCardSpan = styled.span`
  display: inline-block;
  width: 66px;
  
  
  border-radius: 4px;
  border: 1px solid rgba(0,0,0,.2);

  padding: 0.1rem;

  color: #fff;
  font-size: .75rem;
  font-weight: normal;
  line-height: 1.5rem;
  text-align: center;
  text-transform: uppercase;
  text-shadow: 1px 1px 2px rgb(0 0 0 / 70%);

  box-shadow: 0 0 20px rgba(0, 0, 0, 0.35);
  background: #dbdbdb;
  background-color: ${props => BackgroundColorChoose(props.inputColor)};
`;
export const PokemonCardSpanDiv = styled.div`
  display: flex;
  margin: auto;
  margin-bottom: 5px;
  gap: 10px;
`
export const PokemonCardImgDiv = styled.div`
  border-radius: 5%;
  
  background: linear-gradient(
    -210deg,
    ${ props => PokemonTypeColors[props.inputColor].light},
    ${ props => PokemonTypeColors[props.inputColor].medium}    
    90%);
  
  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    letter-spacing: .3em;
    font-weight: 600;
    color:rgba(0,0,0,0.5);
  }
  img {
    width: 50%;
  }
` 

const BackgroundColorChoose = (typename) =>{       
  switch(typename){
    case "grass" :{
      return "rgb(38, 235, 90)"
    }           
    case "poison" :{
      return "rgb(176, 38, 235)"
    }
    case "fire" :{
      return "rgb(235, 71, 38)"
    }
    case "flying" :{
      return "rgb(161, 215, 230)"
    }
    case "water" :{
      return "rgb(38, 186, 235)"
    }
    case "electric" :{
      return "rgb(235, 209, 38)"
    }
    case "ice" :{
      return "rgb(38, 219, 235)"
    }
    case "fighting" :{
      return "rgb(235, 104, 38)"
    }
    case "ground" :{
      return "rgb(181, 131, 92)"
    }
    case "ghost" :{
      return "rgb(131, 24, 133)"
    }
    case "bug" :{
      return "rgb(113, 209, 10)"
    }
    case "rock" :{
      return "rgb(166, 87, 8)"
    }
    case "psychic" :{
      return "rgb(219, 77, 207)"
    }
    case "dragon" :{
      return "rgb(50, 24, 217)"
    }
    case "normal" :{
      return "rgb(168, 162, 157)"
    }
    case "fairy" :{
      return "rgb(255, 148, 191)"
    }
    case "steel" :{
      return "rgb(173, 216, 230)"
    }
    case "dark" :{
      return "#705848"
    }
    default: {
        break;
    }
  }
}



