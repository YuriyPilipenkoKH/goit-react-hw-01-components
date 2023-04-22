import user from '../data/user.json'
import statistics from '../data/statistics.json';
import friends from '../data/friends.json'
import transactions from '../data/transactions.json'
import { Container } from 'components/container/Container';
import { Profile } from '../components/profile/Profile'
import { Statistics } from '../components/statistics/statistics'
import {FriendsList} from '../components/friendlist/FriendList'
import {TransactionTable} from '../components/TransactionHistory/TransactionHistory'



export const App = () => {

  return (
    <Container >
      <Profile  user={user}></Profile>
      <Statistics  statistics={statistics} title="Upload stats"></Statistics>
      <FriendsList  friends={friends}></FriendsList>
      <TransactionTable transactions={transactions} />
    </Container>
  );
  };