import Description from 'components/Description/Description';
import StatsList from 'components/StatsList/StatsList';
import s from 'components/Profile/Profile.module.css';

function Profile({ name, tag, location, avatar, stats }) {
  return (
    <div className={s.profile}>
      <Description name={name} tag={tag} location={location} avatar={avatar} />
      <StatsList stats={stats} />
    </div>
  );
}

export default Profile;
