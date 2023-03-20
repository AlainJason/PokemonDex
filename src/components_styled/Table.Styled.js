import styled from "styled-components"

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  //grid-column-start: 1;
  //grid-column-end: 4;
  //flex-grow: 1;
  h2 {
    text-transform: capitalize;
  }
`
export const DataTable = styled.table`
  border-collapse:collapse;
  width: 70%;
  th {
    font-size: 1.875rem;
    font-weight: normal;
    text-align: right;
    border-width: 1px 0;
    border-style: solid;
    border-color: #f0f0f0;
    background-color: #fff;
    padding: 4px 10px;
  }
  td{
    font-size: 1.875rem;
  }
`
export const TableTd = styled.td`
    border-width: 1px 0;
    border-style: solid;
    border-color: #f0f0f0;
    background-color: #fff;
    padding: 4px 10px;
`

export const TableContainer2 = styled(TableContainer)`

  td {
    text-align: right;
  }
`

export const Barchart = styled(TableTd)`
  width: 100%;
  min-width: 150px;
  
  div{
    width: ${props => (props.state * 0.6)}%;
    background-color: #ffdd57;
    height: 0.75rem;
    border-radius: 4px;
    border: 1px solid #737373;
    border-color: rgba(0,0,0,.15);
  }
`