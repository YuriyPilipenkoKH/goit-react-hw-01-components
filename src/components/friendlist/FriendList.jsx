import PropTypes from 'prop-types';
import {FriendListItem} from './FriendListItem/FriendListItem'
import { FriendList } from './FriendList.styled';


export const FriendsList = ({friends}) => {

    return (
        <FriendList className="friends_list" >
            {friends.map(({id, name , avatar, isOnline}) => (
                <FriendListItem
                key={id}
                id={id}
                avatar={avatar}
                name={name}
                isOnline={isOnline}
                />
            ))}
        </FriendList>
    )
}

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      })
    ),
  };