import Description from 'components/Description/Description';
import ProfileStatsList from 'components/ProfileStatsList/ProfileStatsList';
import s from 'components/Profile/Profile.module.css';

function Profile({ name, tag, location, avatar, stats }) {
  return (
    <div className={s.profile}>
      <Description name={name} tag={tag} location={location} avatar={avatar} />
      <ProfileStatsList stats={stats} />
    </div>
  );
}

export default Profile;
