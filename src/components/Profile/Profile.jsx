// import PropTypes from 'prop-types';
import Description from 'components/Description/Description';
import StatsList from 'components/StatsList/StatsList';

function Profile({ name, tag, location, avatar, stats }) {
  return (
    <div>
      <Description name={name} tag={tag} location={location} avatar={avatar} />
      <StatsList stats={stats} />
    </div>
  );
}

export default Profile;
