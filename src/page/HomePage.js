import React, { useState } from 'react';
import { HashRouter  as Mains, Routes, Route } from 'react-router-dom';
import {AppContainer} from '../components_styled/Container.Style';

import Navbar from '../components/Navbar';
import PokemonList from '../components/PokemonList';
import Footer from '../components/Footer';
import PokemonData from '../components/PokemonData';



const HomePage = () => {
  return (
    <Mains>
      <Navbar />
      <AppContainer>
        <Routes>
          <Route 
            path="/" 
            element={<PokemonList />}
          />
          <Route  
            path="/:pokemonName"           
            element={<PokemonData />}
          />
        </Routes>
      </AppContainer>
      <Footer />  
    </Mains>
  )
}

export default HomePage