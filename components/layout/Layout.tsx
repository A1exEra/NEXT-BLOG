import { ReactNode, useContext } from 'react';
import MainNavigation from './MainNavigation';
import Notification from '../ui/Notification';
import NotificationContext from '@/store/notificationContext';
const Layout = (props: { children: ReactNode }) => {
  const notificationCtx: any = useContext(NotificationContext);
  const activeNotification = notificationCtx.notification;
  return (
    <>
      <MainNavigation />
      <main>{props.children}</main>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
    </>
  );
};

export default Layout;
