// import PropTypes from 'prop-types';??
import StatsItem from 'components/StatsItem/StatsItem';
import s from 'components/StatsList/StatsList.module.css';

function StatsList({ stats }) {
  let entries = Object.entries(stats);

  return (
    <ul className={s.list}>
      {entries.map(([key, value]) => {
        return <StatsItem key={[key]} text={[key]} value={[value]} />;
      })}
    </ul>
  );
}

export default StatsList;
