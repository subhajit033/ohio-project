import UploadNav from './UploadNav';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setToast } from '../../redux/Slices/toastSlice';

const UserVerification = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userId } = useParams();
  const [loading, setLoading] = useState(false);
  const getOtp = async () => {
    try {
      setLoading(true);
      const res = await axios({
        method: 'post',
        withCredentials: true,
        url: '/api/v1/users/approve-user',
      });
      setLoading(false);
      dispatch(
        setToast({ type: 'success', message: 'otp sent to your email' })
      );
      navigate(`/dashboard/admin/approveUser/${userId}`);
    } catch (err) {
      setLoading(false);
      dispatch(setToast({ type: 'error', message: 'something went wrong' }));
    }
  };
  return (
    <div className=' flex-wrap gap-4 justify-center items-start border-2 border-red-600 flex-1 py-4 px-4'>
      {/* user details dash board */}
      <div className=' h-[88vh] overflow-auto'>
        <div className='flex flex-col items-center gap-4'>
          <div className='flex items-center justify-center  gap-4'>
            <img
              src='https://readymadeui.com/team-1.webp'
              className='w-24 h-24 rounded-full'
            />
            <div>
              <h4 className='text-base text-[#333] font-bold '>John Doe</h4>
              <h4 className='text-base text-[#333] font-bold '>
                DOB - 3 JAN 2001
              </h4>
              <h4 className='text-base text-[#333] font-bold '>
                Place Of Inhabitance -{' '}
                <span className='text-blue-600'>Delhi, In</span>
              </h4>
            </div>
          </div>
          <div className='space-x-4'>
            <button
              type='button'
              className='px-6 py-2.5 rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-green-600 hover:bg-green-700 active:bg-green-600'
              onClick={getOtp}
            >
              {loading ? 'Verifing' : 'Approve'}
            </button>
            <button
              type='button'
              className='px-6 py-2.5 rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-red-600 hover:bg-red-700 active:bg-red-600'
            >
              Decline
            </button>
            <button
              type='button'
              className='px-6 py-2.5 rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-[#333] hover:bg-[#222] active:bg-[#333]'
            >
              Officials
            </button>
          </div>
        </div>
        <UploadNav />
      </div>
    </div>
  );
};

export default UserVerification;
