import React from 'react';
import Identity from '../Registration/Identity';
import Contact from '../Registration/Contact';
import Membership from '../Registration/Membership';
import { useSelector } from 'react-redux';

const RegistrationStepper = () => {
  return (
    <div>
      <div className='flex items-start max-w-screen-lg mx-auto'>
        <div className='w-full'>
          <div className='flex items-center w-full'>
            <div className='w-8 h-8 shrink-0 mx-[-1px] bg-blue-600 p-1.5 flex items-center justify-center rounded-full'>
              <span className='text-base text-white font-bold'>1</span>
            </div>
            <div className='w-full h-1 mx-4 rounded-lg bg-blue-600'></div>
          </div>
          <div className='mt-2 mr-4'>
            <h6 className='text-base font-bold text-blue-500'>Personal Info</h6>
            <p className='text-xs text-gray-400'>Completed</p>
          </div>
        </div>
        <div className='w-full'>
          <div className='flex items-center w-full'>
            <div className='w-8 h-8 shrink-0 mx-[-1px] bg-blue-600 p-1.5 flex items-center justify-center rounded-full'>
              <span className='text-base text-white font-bold'>2</span>
            </div>
            <div className='w-full h-1 mx-4 rounded-lg bg-blue-600'></div>
          </div>
          <div className='mt-2 mr-4'>
            <h6 className='text-base font-bold text-blue-500'>Education</h6>
            <p className='text-xs text-gray-400'>Completed</p>
          </div>
        </div>
        <div>
          <div className='flex items-center'>
            <div className='w-8 h-8 shrink-0 mx-[-1px] bg-gray-300 p-1.5 flex items-center justify-center rounded-full'>
              <span className='text-base text-white font-bold'>3</span>
            </div>
          </div>
          <div className='mt-2'>
            <h6 className='text-base font-bold text-blue-500'>Review</h6>
            <p className='text-xs text-gray-400'>Pending</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default RegistrationStepper;
