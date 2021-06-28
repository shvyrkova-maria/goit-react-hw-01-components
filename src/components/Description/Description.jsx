// import PropTypes from 'prop-types';
import Avatar from 'components/Avatar/Avatar';

function Description({ name, tag, location, avatar }) {
  return (
    <>
      <Avatar avatar={avatar} />
      <p>{name}</p>
      <p>&#64;{tag}</p>
      <p>{location}</p>
    </>
  );
}

export default Description;
