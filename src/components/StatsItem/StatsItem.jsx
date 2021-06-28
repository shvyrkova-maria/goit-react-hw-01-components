// import PropTypes from 'prop-types';
function StatsItem({ text, value }) {
  return (
    <li>
      <span>{text}</span>
      <span>{value}</span>
    </li>
  );
}

export default StatsItem;
