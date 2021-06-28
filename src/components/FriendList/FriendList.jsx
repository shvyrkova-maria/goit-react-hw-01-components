// import PropTypes from 'prop-types';
import Avatar from 'components/Avatar/Avatar';

function FriendList({ friends }) {
  return (
    <ul>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li key={id}>
            <span></span>
            <Avatar avatar={avatar} name={name} />
            <p>{name}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default FriendList;
