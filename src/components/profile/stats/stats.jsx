
import PropTypes from 'prop-types';
import {ProfileStats,StatsItem, ProfileQuantity} from './stats.styled'

export const Stats = ({followers, views, likes }) => {
    return (
      <ProfileStats  followers={followers} views={views} likes={likes}>
        <StatsItem>
          <span >Followers</span>
          <ProfileQuantity >{followers}</ProfileQuantity>
        </StatsItem>
        <StatsItem>
          <span >Views</span>
          <ProfileQuantity >{views}</ProfileQuantity>
        </StatsItem>
        <StatsItem>
          <span >Likes</span>
          <ProfileQuantity >{likes}</ProfileQuantity>
        </StatsItem>
      </ProfileStats>
    );
 }

Stats.propTypes = {
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
}