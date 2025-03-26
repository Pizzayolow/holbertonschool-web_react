import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css, keyframes } from "aphrodite";
import closeImage from "../assets/close-button.png";
import NotificationItem from "./NotificationItem";

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.notificationsList.length !== this.props.notificationsList.length;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { notificationsList, displayDrawer } = this.props;

    return (
      <>
        {!displayDrawer && (
          <div className={css(styles.menuItem)}>Your notifications</div>
        )}
        {displayDrawer && (
          <div className={css(styles.notifications)}>
            {notificationsList.length === 0 ? (
              <p>No new notification for now</p>
            ) : (
              <>
                <p>Here is the list of notifications</p>
                <button
                  aria-label="Close"
                  onClick={() => console.log("Close button has been clicked")}
                  className={css(styles.closeButton)}
                >
                  <img
                    src={closeImage}
                    alt="Close icon"
                    className={css(styles.closeIcon)}
                  />
                </button>
                <ul className={css(styles.list)}>
                  {notificationsList.map((notif) => (
                    <NotificationItem
                      key={notif.id}
                      type={notif.type}
                      value={notif.value}
                      html={notif.html}
                      markAsRead={this.markAsRead.bind(this, notif.id)}
                    />
                  ))}
                </ul>
              </>
            )}
          </div>
        )}
      </>
    );
  }
}

const fadeIn = keyframes({
  from: { opacity: 0.5 },
  to: { opacity: 1 },
});

const bounce = keyframes({
  "0%": { transform: "translateY(0px)" },
  "50%": { transform: "translateY(-5px)" },
  "100%": { transform: "translateY(5px)" },
});

const styles = StyleSheet.create({
  menuItem: {
    float: "right",
    backgroundColor: "#fff8f8",
    padding: "10px",
    fontWeight: "bold",
    cursor: "pointer",
    ":hover": {
      animationName: [fadeIn, bounce],
      animationDuration: "1s, 0.5s",
      animationIterationCount: "3",
    },
  },
  notifications: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "white",
    padding: "2rem",
    fontSize: "20px",
    zIndex: 999,
    overflowY: "auto",
    boxSizing: "border-box",
    border: "none",
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "none",
    border: "none",
    cursor: "pointer",
  },
  closeIcon: {
    width: "10px",
    height: "10px",
  },
  list: {
    padding: 0,
    listStyleType: "none",
  },
});

Notifications.propTypes = {
  notificationsList: PropTypes.arrayOf(PropTypes.object),
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  notificationsList: [],
  displayDrawer: true,
};

export default Notifications;