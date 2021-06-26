// import PropTypes from 'prop-types';
import Avatar from 'components/Avatar/Avatar';

function Description({ name, tag, location }) {
  return (
    <>
      <Avatar />
      <p>{name}</p>
      <p>{tag}</p>
      <p>{location}</p>
    </>
  );
}

export default Description;
