import styled from "styled-components";

export const AppContainer = styled.div`
    max-width: 1220px;
    height: 80vh;
    display: grid;
    margin: auto;
    
    @media (max-width:950px) {
      overflow-y: auto;
    }
`;