import PropTypes from 'prop-types';
import { StatItem } from '../statItem/StatItem';
import { List } from './StatList.syled';



export const StatList = ({data}) => {

    return (
      <List >
      {data.map(({ id , label, percentage}) => (
       <StatItem
       key={id}
       label= {label}
       percentage= {percentage}
       ></StatItem>
      ))}
       </List>
    )
}




StatList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  )

};

