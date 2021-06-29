import PropTypes from 'prop-types';
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

Avatar.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Avatar;
