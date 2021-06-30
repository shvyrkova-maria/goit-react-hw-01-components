import PropTypes from 'prop-types';
import StatsItem from 'components/StatsItem/StatsItem';
import s from 'components/ProfileStatsList/ProfileStatsList.module.css';

function ProfileStatsList({ stats }) {
  let entries = Object.entries(stats);

  return (
    <ul className={s.list}>
      {entries.map(([key, value]) => {
        return <StatsItem key={[key]} text={[key]} value={[value]} />;
      })}
    </ul>
  );
}

ProfileStatsList.propTypes = {
  stats: PropTypes.object.isRequired,
};

export default ProfileStatsList;
