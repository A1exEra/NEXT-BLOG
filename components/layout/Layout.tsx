import { ReactNode } from 'react';
import MainNavigation from './mainNavigation';
const Layout = (props: { children: ReactNode }) => {
  return (
    <>
      <MainNavigation />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
