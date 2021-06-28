// import PropTypes from 'prop-types';
import StatsItem from 'components/StatsItem/StatsItem';

function Statistics({ title, stats }) {
  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {stats.map(({ id, label, percentage }) => {
          return <StatsItem key={id} text={label} value={`${percentage}%`} />;
        })}
      </ul>
    </div>
  );
}

export default Statistics;
