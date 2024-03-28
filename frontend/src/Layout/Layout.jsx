import Header from '../components/Header/Header';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setAuthentication } from '../redux/Slices/authSlice';
import { setFormDataByLogin } from '../redux/Slices/registration';
import { setMyDetails } from '../redux/Slices/userSlice';

import Loader from '../components/Loader/Loader';

import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
const Layout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((store) => store.auth.isAuthenticated);
  const [loading, setLoading] = useState(false);

  const checkLoggedIn = async () => {
    try {
      setLoading(true);
      const res = await axios.get('/api/v1/users/isloggedin', { withCredentials: true });
      if (res.data.status === 'success') {
        setLoading(false);
        dispatch(setAuthentication(true));
        dispatch(setFormDataByLogin(res.data.data.user));
        dispatch(setMyDetails(res.data.data.user));
      } else {
        throw new Error('failed');
      }
    } catch (err) {
      console.log(err);
      // navigate('/login');
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
