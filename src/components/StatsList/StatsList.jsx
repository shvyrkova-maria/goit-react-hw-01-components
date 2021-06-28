// import PropTypes from 'prop-types';
import StatsItem from 'components/StatsItem/StatsItem';

function StatsList({ stats }) {
  let entries = Object.entries(stats);

  return (
    <ul>
      {entries.map(([key, value]) => {
        return <StatsItem key={[key]} text={[key]} value={[value]} />;
      })}
    </ul>
  );
}

export default StatsList;
