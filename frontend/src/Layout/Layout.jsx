import Header from '../components/Header/Header';
import UploadNav from '../components/UploadNav/UploadNav';
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
