import styled from '@emotion/styled';

export const Table = styled.table`
  table-layout: fixed;
  width: 600px;
  border-collapse: collapse;
  border: 3px solid ${props => props.theme.colors.secondaryText};
  

`

export const Thead = styled.thead`
  background: ${props => props.theme.colors.adelyn};
  color: white;
  text-shadow: 1px 1px 1px black;
  height: 40px;
  text-transform: uppercase;
  border: 1px solid ${props => props.theme.colors.secondaryText};
`



export const Td = styled.td`
 font-size: 22px;
  border: 1px solid #999;
  padding: 0.7rem  2em;
  text-align: center;    

  :first-of-type {
  text-align: left; 
  }
`

// export const Tr = styled.td`


//   :nth-of-type(even) {
//   background-color: #43a3e355;
//   }
//   :last-of-type {
//   border-bottom: 2px solid #009879; 
//   }
// `
export const Th = styled.td`
  font-size: 32px;
  padding: 20px 0;
  text-align: center;

`