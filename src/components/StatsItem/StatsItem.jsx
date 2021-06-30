import PropTypes from 'prop-types';
import s from 'components/StatsItem/StatsItem.module.css';

function StatsItem({ text, style, value }) {
  return (
    <li className={s.item} style={style}>
      <span className={s.label}>{text}</span>
      <span className={s.quantity}>{value}</span>
    </li>
  );
}

StatsItem.defaultProps = {
  style: {
    backgroundColor: `var(--primary-color)`,
    color: `var(--secondary-color)`,
    border: `1px solid var(--main-bg-color)`,
  },
};

StatsItem.protoTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default StatsItem;
