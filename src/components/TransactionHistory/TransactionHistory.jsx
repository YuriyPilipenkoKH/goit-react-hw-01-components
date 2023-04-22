import PropTypes from 'prop-types';
import { Table, Thead, Td , Tr, Th} from './TransactionHistory.styled';

export const TransactionTable = ({transactions}) => {

    return (
        <Table>
  <Thead>
    <tr>
      <Th>Type</Th>
      <Th>Amount</Th>
      <Th>Currency</Th>
    </tr>
  </Thead>

  <tbody className='tbody'>

  {transactions.map(({id,type,amount,currency}) => (
     <tr
      key = {id}
      type = {type}
      amount = {amount}
      currency = {currency}
      >
     <Td>{type}</Td>
     <Td>{amount}</Td>
     <Td>{currency}</Td>    
   </tr>

))}
   
  
  </tbody>
</Table>
    )
}