import PropTypes from 'prop-types';

const Notification = ({title}) => <h2>{title}</h2>


Notification.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Notification;