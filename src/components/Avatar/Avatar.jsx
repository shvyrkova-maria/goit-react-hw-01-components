// import PropTypes from 'prop-types';
function Avatar({ avatar, name }) {
  return (
    <img
      src={avatar}
      alt={`Аватар пользователя ${name}`}
      //   className="avatar"
    />
  );
}

// Avatar.propTypes = {
//   avatar: PropTypes.string.isRequired,
// };

export default Avatar;
