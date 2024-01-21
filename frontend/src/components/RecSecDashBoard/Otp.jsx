import { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setToast } from '../../redux/Slices/toastSlice';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Otp = () => {
  const [enteredOTP, setEnteredOTP] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userId } = useParams();
  const [loading, setLoading] = useState(false);
  const nationality = useSelector((store) => store.user.nationality);


  const verifyOtp = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios({
        method: 'post',
        withCredentials: true,
        url: `/api/v1/users/confirm-otp/${userId}`,
        data: { enteredOTP, nationality },
      });
      console.log(res);
      setLoading(false);
      dispatch(setToast({ type: 'success', message: 'User Approved' }));
      setTimeout(() => {
        navigate('/dashboard/admin');
      }, 1200);
    } catch (err) {
      setLoading(false);
      dispatch(
        setToast({ type: 'error', message: 'Invalid Otp or Otp expired' })
      );
    }
  };

  return (
    <div className=' flex-wrap gap-4 justify-center items-start border-2 border-red-600 flex-1 py-4 px-4'>
      <div className='relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl'>
        <div className='mx-auto flex w-full max-w-md flex-col space-y-16'>
          <div className='flex flex-col items-center justify-center text-center space-y-2'>
            <div className='font-semibold text-3xl'>
              <p>OTP Verification</p>
            </div>
            <div className='flex flex-col text-sm font-medium text-gray-400'>
              <p>We have sent a code to your email</p>

              <p>Otp will expire within 5 min </p>
            </div>
          </div>

          <div>
            <form onSubmit={verifyOtp}>
              <div className='flex flex-col space-y-16'>
                <div>
                  <label className='text-sm mb-2 block'>Enter OTP</label>
                  <input
                    name='text'
                    type='text'
                    className='bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500'
                    placeholder='Enter OTP'
                    value={enteredOTP}
                    onChange={(e) => setEnteredOTP(e.target.value)}
                  />
                </div>

                <div className='flex flex-col space-y-5'>
                  <div>
                    <button
                      type='submit'
                      className='flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm'
                    >
                      {loading ? 'Verifing user' : 'Verify User'}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;
