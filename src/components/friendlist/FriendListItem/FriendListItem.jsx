import PropTypes from 'prop-types';
import { FriendItem,Status, Picture} from './FriendListItem.styled'

export const FriendListItem = ({id, name , avatar,isOnline}) => {
   return (
    <FriendItem className="friends-item" id={id} >
    <Status online={isOnline}>{isOnline}</Status>
    <Picture
    src={avatar } alt={name}
     />
    <p >{name}</p>
   </FriendItem>     
   )
 
}

FriendListItem.propTypes = {
    
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
  
  };