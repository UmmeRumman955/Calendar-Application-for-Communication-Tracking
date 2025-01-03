import "./Notifications.css";
import React, { useEffect, useState } from "react";
import { fetchNotifications } from "../../services/api";
import "./Notifications.css"; // Optional styling

const Notifications = () => {
  const [notifications, setNotifications] = useState({
    overdue: [],
    dueToday: [],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNotifications = async () => {
      try {
        const data = await fetchNotifications();
        setNotifications(data); // Data should have `overdue` and `dueToday` arrays
      } catch (error) {
        console.error("Failed to fetch notifications:", error);
      } finally {
        setLoading(false);
      }
    };

    loadNotifications();
  }, []);

  if (loading) return <p>Loading notifications...</p>;

  return (
    <div className="notifications-container">
      <h2>Notifications</h2>

      <div className="notifications-grid">
        <div className="overdue">
          <h3>Overdue Communications</h3>
          <ul>
            {notifications.overdue.length > 0 ? (
              notifications.overdue.map((item) => (
                <li key={item.id}>
                  {item.companyName} - {item.communicationType} (Due on: {item.dueDate})
                </li>
              ))
            ) : (
              <p>No overdue communications!</p>
            )}
          </ul>
        </div>

        <div className="due-today">
          <h3>Today's Communications</h3>
          <ul>
            {notifications.dueToday.length > 0 ? (
              notifications.dueToday.map((item) => (
                <li key={item.id}>
                  {item.companyName} - {item.communicationType} (Due today)
                </li>
              ))
            ) : (
              <p>No communications due today!</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notifications;

