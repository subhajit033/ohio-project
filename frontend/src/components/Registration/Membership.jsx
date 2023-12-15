import React from 'react';
import MemberShipBox from './MemberShipBox';
import { membershipType } from '../../utils/const';
import { useSelector, useDispatch } from 'react-redux';
import { MdNavigateNext } from 'react-icons/md';
import { GrFormPrevious } from 'react-icons/gr';
import {
  setFormData,
  prevStep,
  nextStep,
} from '../../redux/Slices/registration';
const Membership = () => {
  const dispatch = useDispatch();
  const formData = useSelector((store) => store.registration.formData);
  const step = useSelector((store) => store.registration.step);
  return (
    <div className='p-6 md:p-8 lg:p-10'>
      <form className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4'>
        {membershipType.map((merberShip, i) => {
          return <MemberShipBox key={i} value={merberShip} />;
        })}
      </form>
      <div className='!mt-10 flex justify-between'>
        <button
          type='button'
          className=' shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-[#333] hover:bg-black focus:outline-none flex items-center gap-1'
          onClick={() => dispatch(prevStep())}
        >
          <GrFormPrevious /> Previous
        </button>
        <button
          type='submit'
          className=' shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-blue-600 hover:bg-black focus:outline-none flex items-center gap-1'
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Membership;