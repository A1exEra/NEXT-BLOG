import { useState, createContext, useEffect } from 'react';

const NotificationContext = createContext({
  notification: null,
  setNotification: function (notificationData) {},
  hideNotification: function () {},
});

export const NotificationContextProvider = (props) => {
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    console.log({ notification });
    if (notification && notification.status !== 'pending') {
      const timer = setTimeout(() => setNotification(null), 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [notification]);
  const hideNotification = () => {
    setNotification(null);
  };

  const context = {
    notification,
    setNotification,
    hideNotification,
  };

  return (
    <NotificationContext.Provider value={context}>
      {props.children}
    </NotificationContext.Provider>
  );
};
export default NotificationContext;
