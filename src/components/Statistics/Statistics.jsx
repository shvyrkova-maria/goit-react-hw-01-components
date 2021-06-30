import PropTypes from 'prop-types';
import StatsItem from 'components/StatsItem/StatsItem';
import s from 'components/Statistics/Statistics.module.css';
import { makeRandomColor } from 'utils/randomColor';

function Statistics({ title, stats }) {
  return (
    <div className={s.stats}>
      {title && <h1 className={s.title}>{title}</h1>}
      <ul className={s.list}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatsItem
              key={id}
              text={label}
              value={`${percentage}%`}
              style={{
                backgroundColor: makeRandomColor(),
                color: 'white',
                border: `1px solid transporent`,
              }}
            />
          );
        })}
      </ul>
    </div>
  );
}

Statistics.protoTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
    }),
  ),
};

export default Statistics;
