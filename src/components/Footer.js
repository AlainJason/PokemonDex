import React from 'react';
import styled from 'styled-components';

const FooterDiv = styled.div`
  display: grid;
  background-color: #ffffff19;
  height: 10vh;
  justify-content: center;
  align-items: center;
`

const Footer = () => {
  return (
    <FooterDiv>
      <span>Pokémon images & names © 1995-2023 Nintendo/Game Freak.</span>
    </FooterDiv>
  )
}

export default Footer