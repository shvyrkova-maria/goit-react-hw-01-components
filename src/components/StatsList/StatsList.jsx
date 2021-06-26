// import PropTypes from 'prop-types';
import Stats from 'components/Stats/Stats';

function StatsList({ stats }) {
  return (
    <ul>
      <Stats text={[stats]} />
    </ul>
  );
}

export default StatsList;
