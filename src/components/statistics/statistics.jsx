import PropTypes from 'prop-types';
import {Title} from './title/Title'
import { StatList } from './statList/StatList'
import {Statistic} from './statistics.styled.jsx'

export const Statistics = ({statistics, title}) => {

  return (
   <Statistic className='statistics'>
    {title && <Title >{title}</Title>}
    <StatList data= {statistics}></StatList>
   </Statistic>
  )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};