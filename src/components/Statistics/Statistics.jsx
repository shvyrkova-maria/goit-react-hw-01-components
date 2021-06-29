import PropTypes from 'prop-types';
import StatsItem from 'components/StatsItem/StatsItem';
import s from 'components/Statistics/Statistics.module.css';
import { makeRandomColor } from 'utils/randomColor';

// console.log(makeRandomColor());

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
              }}
            />
          );
        })}
      </ul>
    </div>
  );
}

Statistics.protoTypes = {
  title: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired, //??? shape???
};

export default Statistics;

// console.log((backgroundColor:makeRandomColor()));
