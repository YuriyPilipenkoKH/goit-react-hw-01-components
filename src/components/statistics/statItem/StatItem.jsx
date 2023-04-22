import PropTypes from 'prop-types';
import { StItem, StLabel, StPercentage } from './StatItem.styled';
import { randomColor } from 'utils/randomColor';


export const StatItem = ({id , label, percentage} ) => {
    return (
    <StItem  style= {{backgroundColor: randomColor() }} >
      <StLabel >{label}</StLabel>
      <StPercentage >{percentage}%</StPercentage>
    </StItem>
    )
}
StatItem.propTypes = {
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
}

