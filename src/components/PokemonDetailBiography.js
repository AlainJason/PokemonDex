import React from 'react'
import { TableContainer, DataTable, TableTd} from '../components_styled/Table.Styled'
import BiographyPokemonData from '../components/BiographyPokemonData'
import {PokemonID} from './PokemonID'

const GenderRate = (rate) => {
  if(rate === '1'){
    return [87.5, 12.5]
  }
  else{
    return "Genderless"
  }
}


const PokemonDetailBiography = ({pokemon}) => {
  const  P  = pokemon
  return (
    <TableContainer>
      <BiographyPokemonData pokemon = {pokemon}/>
      <div>
        <h2>Training</h2>
        <DataTable>
          <tbody>
            <tr>
              <th>Catch rate</th>
              <TableTd>{P.captureRate}%</TableTd>
            </tr>
            <tr>
              <th>Base Happiness</th>
              <TableTd>{P.baseHappiness}</TableTd>
            </tr>
            <tr>
              <th>Base Exp.</th>
              <TableTd>{P.baseExperience}</TableTd>
            </tr>
            <tr>
              <th>Growth Rate</th>
              <TableTd>{P.growthRate}</TableTd>
            </tr>
          </tbody>
        </DataTable>
        <h2>Breeding</h2>
        <DataTable>
          <tbody>
            <tr>
              <th>Egg Groups</th>
              <TableTd>
                {Object.values(P.eggGroup).map((index) => (
                    <small> ({index.name})</small>
                ))}
              </TableTd>
            </tr>
            <tr>
              <th>Gender</th>
              <TableTd>{GenderRate(P.growthRate)}</TableTd>
            </tr>
            <tr>
              <th>Egg cycles</th>
              <TableTd>{P.hatch_counter}</TableTd>
            </tr>
          </tbody>
        </DataTable>
      </div>
      <div>

      </div>
      

    </TableContainer>
  )
}

export default PokemonDetailBiography