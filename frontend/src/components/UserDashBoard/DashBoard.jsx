import { useEffect } from 'react';
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setDocUpload } from '../../redux/Slices/registration';
import axios from 'axios';

const DashBoard = () => {
  const dispatch = useDispatch();
  const docUploaded = useSelector((store) => store.registration.docUploaded);
  useEffect(() => {
    !docUploaded && getDocs();
  }, []);
  const getDocs = async () => {
    try {
      const res = await axios.get('/api/v1/users/getMyDocs', {
        withCredentials: true
      });
      dispatch(setDocUpload(res.data.data.data.documents));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-around">
      <SideBar />
      <div className=" flex-wrap gap-4 justify-center h-[89vh] overflow-auto items-start border-2 border-red-600 flex-1 py-4 px-4">
        {<Outlet />}
      </div>
    </div>
  );
};

export default DashBoard;
