import { useEffect } from 'react';
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setDocUpload } from '../../redux/Slices/registration';

const DashBoard = () => {
  const dispatch = useDispatch();
  const docUploaded = useSelector((store) => store.registration.docUploaded);
  useEffect(() => {
    !docUploaded && getDocs();
  }, []);
  const getDocs = async () => {
    try {
      const res = await axios.get('/api/v1/users/getDocs', {
        withCredentials: true,
      });
      dispatch(setDocUpload(res.data.data.data.documents));
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='flex justify-around'>
      <SideBar />
      <Outlet />
    </div>
  );
};

export default DashBoard;
