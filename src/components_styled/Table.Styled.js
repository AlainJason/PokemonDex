import styled from "styled-components"

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    text-transform: capitalize;
  }
  p {
    width: 80%;
    text-align:justify;
  }
`
export const DataTable = styled.table`
  border-collapse:collapse;
  width: 80%;
  th {
    font-size: 1rem;
    font-weight: Medium;
    text-align: right;
    border-width: 1px 0;
    border-style: solid;
    border-color: #f0f0f0;
    background-color: #fff;
    padding: 5px;
    //width: 0%;
    color:rgba(0,0,0,0.5);
  }
  /* td{
    font-size: 0.875rem;
    padding: 10px 3px;
  } */
`
export const TableTd = styled.td`
    border-width: 1px 0;
    border-style: solid;
    border-color: #f0f0f0;
    background-color: #fff;
    padding: 5px 10px;
    P{
      text-transform: capitalize;
    }
`

export const TableContainer2 = styled(TableContainer)`
  max-height: 300px;
  overflow-y: auto;
  td {
    text-align: right;
  }
`

export const Barchart = styled(TableTd)`
  width: 100%;
  min-width: 100px;
  
  div{
    width: ${props => (props.state * 0.6)}%;
    background-color: #ffdd57;
    height: 0.75rem;
    border-radius: 4px;
    border: 1px solid #737373;
    border-color: rgba(0,0,0,.15);
  }
`