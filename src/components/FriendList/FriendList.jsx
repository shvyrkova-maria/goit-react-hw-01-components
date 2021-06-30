import PropTypes from 'prop-types';
import Avatar from 'components/Avatar/Avatar';
import s from 'components/FriendList/FriendList.module.css';

function FriendList({ friends }) {
  return (
    <ul className={s.list}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li key={id} className={s.item}>
            <span className={isOnline ? s.online : s.offline}></span>
            <Avatar avatar={avatar} name={name} />
            <p className={s.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
}

FriendList.protoTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};

export default FriendList;
