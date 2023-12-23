import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setToast } from '../../redux/Slices/toastSlice';

const Verifaication = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const verifyEmail = async (e) => {
    e.preventDefault();
    try {
      const res = await axios({
        method: 'post',
        withCredentials: true,
        url: '/api/v1/users/verifyEmail',
        data: { name, email },
      });
      console.log(res);
      if (res.data.status) {
        dispatch(
          setToast({ type: 'success', message: 'A email sent to your Email Id' })
        );
      } else {
        throw new Error('failed');
      }
    } catch (err) {
      dispatch(
        setToast({ type: 'error', message: 'Email Verification Failed' })
      );
    }
  };

  return (
    <div className='font-[sans-serif] text-[#333]'>
      <div className='min-h-screen flex fle-col items-center justify-center py-6 px-4'>
        <div className='grid md:grid-cols-2 items-center gap-4 max-w-7xl w-full'>
          <div className='border border-gray-300 rounded-md p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto'>
            <form onSubmit={verifyEmail} className='space-y-6'>
              <div className='mb-10'>
                <h3 className='text-3xl font-extrabold'>Email Verification</h3>
                <p className='text-sm mt-4'>Verify your email address first</p>
              </div>
              <div>
                <label className='text-sm mb-2 block'>Your Name</label>
                <div className='relative flex items-center'>
                  <input
                    name='username'
                    type='text'
                    required
                    className='w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]'
                    placeholder='Enter your name '
                    onChange={(e) => setName(e.target.value)}
                  />
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='#bbb'
                    stroke='#bbb'
                    className='w-[18px] h-[18px] absolute right-4'
                    viewBox='0 0 24 24'
                  >
                    <circle
                      cx='10'
                      cy='7'
                      r='6'
                      data-original='#000000'
                    ></circle>
                    <path
                      d='M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z'
                      data-original='#000000'
                    ></path>
                  </svg>
                </div>
              </div>
              <div>
                <label className='text-sm mb-2 block'>Email</label>
                <div className='relative flex items-center'>
                  <input
                    name='email'
                    type='email'
                    required
                    className='w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]'
                    placeholder='Enter your email'
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className='!mt-10'>
                <button
                  type='submit'
                  className='w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-[#333] hover:bg-black focus:outline-none'
                >
                  Verify Email
                </button>
              </div>
            </form>
          </div>
          <div className='lg:h-[400px] md:h-[300px] max-md:mt-10'>
            <img
              src='https://th.bing.com/th/id/OIP.obQBFKW-dDqKiGWVS7JIDAHaHa?rs=1&pid=ImgDetMain'
              className='w-full h-full object-cover'
              alt='Dining Experience'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verifaication;
