import PropTypes from 'prop-types';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Avatar from 'components/Avatar/Avatar';
import s from 'components/Description/Description.module.css';

function Description({ name, tag, location, avatar }) {
  return (
    <div className={s.description}>
      <Avatar avatar={avatar} name={name} />
      <p className={s.name}>{name}</p>
      <p className={s.tag}>&#64;{tag}</p>
      <p className={s.location}>
        <FaMapMarkerAlt className={s.icon} />
        {location}
      </p>
    </div>
  );
}

Description.protoTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
export default Description;
