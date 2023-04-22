import PropTypes from 'prop-types';
import { Table, Thead, Tbody ,Td ,  Th} from './TransactionHistory.styled';

export const TransactionTable = ({transactions}) => {

    return (
        <Table className='transaction_table'>
  <Thead>
    <tr>
      <Th>Type</Th>
      <Th>Amount</Th>
      <Th>Currency</Th>
    </tr>
  </Thead>

  <Tbody >

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
   
  
  </Tbody>
</Table>
    )
}

TransactionTable.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};