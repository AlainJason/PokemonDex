import styled from "styled-components"

export const TableContainer = styled.div`
  max-height: 300px;

  //display: flex;
  //flex-direction: column;
  //flex-wrap: wrap;
  //align-items: center;
  //gap: 5%;
  //justify-content: center;


  display: grid;
  grid-template-columns: repeat(2, 50%);
  justify-items: center;
  width: 100%;
  overflow-y: auto;
  h2 {
    text-transform: capitalize;
  }

  @media (max-width:700px) {
    grid-template-columns: repeat(1, 100%);
  }

`
export const DataTable = styled.table`
  border-collapse:collapse;
  width: 90%;
  th {
    font-size: 1rem;
    font-weight: Medium;
    text-align: right;
    border-width: 1px 0;
    border-style: solid;
    border-color: #f0f0f0;
    background-color: #fff;
    padding: 5px;
    color:rgba(0,0,0,0.5);
  }
  @media (max-width:700px) {
    width: 100%;
  }
`
export const TableTd = styled.td`
    border-width: 1px 0;
    border-style: solid;
    border-color: #f0f0f0;
    background-color: #fff;
    padding: 5px 10px;
    text-transform: capitalize;
`

export const TableContainer2 = styled(TableContainer)`
  grid-template-columns: repeat(1, 100%);
  
  td {
    text-align: right;
  }
  p {
    width: 90%;
    text-align:justify;
  }

`

export const Barchart = styled(TableTd)`
  width: 100%;
  min-width: 80px;
  div{
    width: ${props => (props.state * 0.6)}%;
    background-color: #ffdd57;
    height: 0.75rem;
    border-radius: 4px;
    border: 1px solid #737373;
    border-color: rgba(0,0,0,.15);
  }
`