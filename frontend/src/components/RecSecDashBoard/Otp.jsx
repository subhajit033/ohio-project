import React from 'react';

const Otp = () => {
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
            <form action='' method='post'>
              <div className='flex flex-col space-y-16'>
                <div>
                  <label className='text-sm mb-2 block'>Enter OTP</label>
                  <input
                    name='text'
                    type='text'
                    className='bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500'
                    placeholder='Enter OTP'
                  />
                </div>

                <div className='flex flex-col space-y-5'>
                  <div>
                    <button className='flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm'>
                      Verify User
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
