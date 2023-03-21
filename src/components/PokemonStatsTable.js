import React from 'react'
import { TableContainer2, DataTable, Barchart} from '../components_styled/Table.Styled'

/*
  hp max = basehp * 2 + 204
     min = basehp * 2 + 110
  else
     max = (base * 2 + 99) * 1.1
     min = (base * 2 + 5) * 0.9
*/

const calMinMax = (name , stats) => {
  if(name === 'hp'){
    const max = stats * 2 + 204;
    const min = stats * 2 + 110;
    return [min, max];  
  }
  else{
    const max = (stats * 2 + 99) * 1.1;
    const min = (stats * 2 + 5) * 0.9;
    return [min, max];  
  }
}

const PokemonStatsTable = (props) => {
  const  P  = props.pokemon
  return (
    <TableContainer2>
    <h2>Base states</h2>
      <DataTable>
      <tbody>                  
        <tr>
          <th>HP</th>
          <td>{P.states.hp}</td>
          <Barchart state={P.states.hp}>
            <div></div>
          </Barchart>
          <td>{Math.floor(calMinMax("hp", P.states.hp)[0])}</td>
          <td>{Math.floor(calMinMax("hp", P.states.hp)[1])}</td>
        </tr>
        <tr>
          <th>Attack</th>
          <td>{P.states.attack}</td>
          <Barchart state={P.states.attack}>
            <div></div>
          </Barchart>
          <td>{Math.floor(calMinMax("Attack", P.states.attack)[0])}</td>
          <td>{Math.floor(calMinMax("Attack", P.states.attack)[1])}</td>
        </tr>
        <tr>
          <th>Defense</th>
          <td>{P.states.defense}</td>
          <Barchart state={P.states.defense}>
            <div></div>
          </Barchart>
          <td>{Math.floor(calMinMax("Defense", P.states.defense)[0])}</td>
          <td>{Math.floor(calMinMax("Defense", P.states.defense)[1])}</td>
        </tr>
        <tr>
          <th>SP.attack</th>
          <td>{P.states.special_A}</td>
          <Barchart state={P.states.special_A}>
            <div></div>
          </Barchart>
          <td>{Math.floor(calMinMax("special_A", P.states.special_A)[0])}</td>
          <td>{Math.floor(calMinMax("special_A", P.states.special_A)[1])}</td>
        </tr>
        <tr>
          <th>SP.Defense</th>
          <td>{P.states.special_D}</td>
          <Barchart state={P.states.special_D}>
            <div></div>
          </Barchart>
          <td>{Math.floor(calMinMax("special_D", P.states.special_D)[0])}</td>
          <td>{Math.floor(calMinMax("special_D", P.states.special_D)[1])}</td>
        </tr>
        <tr>
          <th>Speed</th>
          <td>{P.states.speed}</td>
          <Barchart state={P.states.speed}>
            <div></div>
          </Barchart>
          <td>{Math.floor(calMinMax("speed", P.states.speed)[0])}</td>
          <td>{Math.floor(calMinMax("speed", P.states.speed)[1])}</td>
        </tr>
        <tr>
          <th>Total</th>
          <td>{P.states.hp + 
               P.states.attack + 
               P.states.defense + 
               P.states.special_A +
               P.states.special_D +
               P.states.speed}
          </td>
          <Barchart>
          </Barchart>
          <td>Min</td>
          <td>Max</td>
        </tr>
      </tbody>
      </DataTable>               
  </TableContainer2>
  )
}

export default PokemonStatsTable