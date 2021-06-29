import PropTypes from 'prop-types';
import s from 'components/StatsItem/StatsItem.module.css';

function StatsItem({ text, value }) {
  return (
    <li className={s.item}>
      <span className={s.label}>{text}</span>
      <span className={s.quantity}>{value}</span>
    </li>
  );
}

StatsItem.protoTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default StatsItem;
