import Header from '../components/Header/Header';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import { setAuthentication } from '../redux/Slices/authSlice';
import { setFormDataByLogin } from '../redux/Slices/registration';
import { setMyDetails } from '../redux/Slices/userSlice';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
const Layout = () => {
  const dispatch = useDispatch();

  const isAuthenticated = useSelector((store) => store.auth.isAuthenticated);

  const checkLoggedIn = async () => {
    try {
      const res = await axios.get('/api/v1/users/isloggedin', { withCredentials: true });
      if (res.data.status === 'success') {
        dispatch(setAuthentication(true));
        dispatch(setFormDataByLogin(res.data.data.user));
        dispatch(setMyDetails(res.data.data.user));
      } else {
        throw new Error('failed');
      }
    } catch (err) {
      console.log(err);

      dispatch(setAuthentication(false));
    }
  };

  useEffect(() => {
    !isAuthenticated && checkLoggedIn();
  }, []);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
