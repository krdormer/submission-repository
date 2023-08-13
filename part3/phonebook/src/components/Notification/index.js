// Styles
import './styles.css';

const Notification = ({ message, type }) => {
  return (
    <div className={type}>
      <p className={`${type}NotificationText`}>{message}</p>
    </div>
  );
}

export default Notification;