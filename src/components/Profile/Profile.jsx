// import PropTypes from 'prop-types';
import Description from 'components/Description/Description';
import StatsList from 'components/StatsList/StatsList';

function Profile() {
  return (
    <div>
      <Description />
      <StatsList />
      {/*<ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">1000</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">2000</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">3000</span>
        </li>
      </ul> */}
    </div>
  );
}

export default Profile;
