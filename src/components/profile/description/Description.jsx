import PropTypes from 'prop-types';

import {ProfileDescription, Avatar, UserName, UserEmail, Place } from './Description.styled';

export const Description = ({username, tag, location, avatar}) => {
  
    return (
      <ProfileDescription >
        <Avatar
          src={ avatar}
          alt={ username}
        />
            <UserName >{ username}</UserName>
            <UserEmail >{ tag}</UserEmail>
            <Place >{ location}</Place>
      </ProfileDescription>
    );
}

Description.propTypes = {
    username: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
}