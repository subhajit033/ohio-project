import Identity from './Identity';
import Contact from './Contact';
import Membership from './Membership';
import { useSelector, useDispatch } from 'react-redux';

const Registration = () => {
  const dispatch = useDispatch();
  const step = useSelector((store) => store.registration.step);

  return (
    <div className='mt-6'>
      <div className='flex items-start max-w-screen-lg mx-auto'>
        <div className='w-full'>
          <div className='flex items-center w-full'>
            <div className='w-8 h-8 shrink-0 mx-[-1px] bg-blue-600 p-1.5 flex items-center justify-center rounded-full'>
              <span className='text-base text-white font-bold'>1</span>
            </div>
            <div
              className={`w-full h-1 mx-4 rounded-lg ${
                step > 1 ? 'bg-blue-600' : 'bg-gray-600'
              }`}
            ></div>
          </div>
          <div className='mt-2 mr-4'>
            <h6 className='text-sm lg:text-base font-bold text-blue-500'>
              Personal Info
            </h6>
            <p className='text-xs text-gray-400'>
              {step > 1 ? 'Completed' : 'Pending'}
            </p>
          </div>
        </div>
        <div className='w-full'>
          <div className='flex items-center w-full'>
            <div
              className={`w-8 h-8 shrink-0 mx-[-1px] ${
                step >= 2 ? 'bg-blue-600' : 'bg-gray-600'
              } p-1.5 flex items-center justify-center rounded-full`}
            >
              <span className='text-base text-white font-bold'>2</span>
            </div>
            <div
              className={`w-full h-1 mx-4 rounded-lg ${
                step > 2 ? 'bg-blue-600' : 'bg-gray-600'
              }`}
            ></div>
          </div>
          <div className='mt-2 mr-4'>
            <h6 className='text-sm lg:text-base font-bold text-blue-500'>
              Contact Details
            </h6>
            <p className='text-xs text-gray-400'>
              {step > 1 ? 'Completed' : 'Pending'}
            </p>
          </div>
        </div>
        <div>
          <div className='flex items-center'>
            <div
              className={`w-8 h-8 shrink-0 mx-[-1px] ${
                step >= 3 ? 'bg-blue-600' : 'bg-gray-600'
              } p-1.5 flex items-center justify-center rounded-full`}
            >
              <span className='text-base text-white font-bold'>3</span>
            </div>
          </div>
          <div className='mt-2'>
            <h6 className='text-sm lg:text-base font-bold text-blue-500'>
              Membership
            </h6>
            <p className='text-xs text-gray-400'>
              {step >= 3 ? 'Completed' : 'Pending'}
            </p>
          </div>
        </div>
      </div>
      {step === 1 && <Identity />}
      {step === 2 && <Contact />}
      {step === 3 && <Membership />}
    </div>
  );
};

export default Registration;
