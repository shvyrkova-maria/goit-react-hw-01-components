import PropTypes from 'prop-types';
// import userPlaceholder from 'components/Avatar/user-placeholder.png';
import s from './Avatar.module.css';

function Avatar({ avatar, name }) {
  return (
    <img
      src={avatar}
      alt={`Аватар пользователя ${name}`}
      className={s.avatar}
    />
  );
}

// Avatar.defaultProps = {
//   avatar: userPlaceholder,
// };

Avatar.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Avatar;
