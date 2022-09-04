





export const BackgroundColorChoose = (typename) =>{

        
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
            default: {
                break;
            }
        }

}