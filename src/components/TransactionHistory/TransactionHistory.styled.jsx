import styled from '@emotion/styled';

export const Table = styled.table`
  table-layout: fixed;
  width: 750px;
  border-collapse: collapse;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.black};
 
 

`

export const Thead = styled.thead`
  background: ${props => props.theme.colors.purple};
  color: white;
  font-size: 32px;
  text-transform: uppercase;
  text-align: center;  
  
  :first-of-type{
    text-align: left;
   
  }
`



export const Td = styled.td`
 font-size: 22px;
  padding: 0.7rem  2em;
  text-align: center;    
  text-transform: capitalize;

  :first-of-type {
  text-align: left; 
 
  }
`
export const Tbody = styled.tbody`
  >tr {
    :nth-of-type(even) {
  background-color: #43a3e355;
  }
 
  }
`

export const Th = styled.td`
  font-size: 32px;
  padding: 20px 0;
  text-align: center;
  border-right: 1px solid ${props => props.theme.colors.grey};
 

 :last-of-type {
  border-right:none;
  }
`