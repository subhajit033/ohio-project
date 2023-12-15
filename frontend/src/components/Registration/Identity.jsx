import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { setFormData } from '../../redux/Slices/registration';
const Identity = () => {
  const dispatch = useDispatch();
  const formData = useSelector((store) => store.registration.formData);

  return (
    <div className='max-w-4xl mx-auto font-[sans-serif] text-[#333] p-6'>
      <div className='text-center mb-16'>
        <h4 className='text-xl font-semibold mt-3'>Personal Details</h4>
      </div>
      <form>
        <div className='grid sm:grid-cols-2 gap-y-7 gap-x-12'>
          <div>
            <label className='text-sm mb-2 block'>First Name *</label>
            <input
              name='name'
              type='text'
              className='bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500'
              placeholder='First Name'
              value={formData.firstName}
              onChange={(e) =>
                dispatch(setFormData({ firstName: e.target.value }))
              }
            />
          </div>
          <div>
            <label className='text-sm mb-2 block'>Middle Name</label>
            <input
              name='mname'
              type='text'
              className='bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500'
              placeholder='middle name'
              value={formData.middleName}
              onChange={(e) =>
                dispatch(setFormData({ middleName: e.target.value }))
              }
            />
          </div>
          <div>
            <label className='text-sm mb-2 block'>Last Name *</label>
            <input
              name='lname'
              type='text'
              className='bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500'
              placeholder='Last name'
              value={formData.lastName}
              onChange={(e) =>
                dispatch(setFormData({ lastName: e.target.value }))
              }
            />
          </div>

          <div>
            <label className='text-sm mb-2 block'>Date of Birth *</label>
            <input
              name='cpassword'
              type='date'
              className='bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500'
              placeholder='Enter DOB'
              value={formData.dob}
              onChange={(e) => dispatch(setFormData({ dob: e.target.value }))}
            />
          </div>

          <div>
            <label className='text-sm mb-2 block'>Photo</label>
            <input
              name='lname'
              type='file'
              className='bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500'
              accept='image/*'
              placeholder='select photo'
              
              onChange={(e) =>
                dispatch(setFormData({ photo: e.target.files[0] }))
              }
            />
          </div>
          <div>
            <label className='text-sm mb-2 block'>Seal</label>
            <input
              name='lname'
              type='file'
              className='bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500'
              accept='image/*'
              placeholder='select image'
              
              onChange={(e) =>
                dispatch(setFormData({ seal: e.target.files[0] }))
              }
            />
          </div>
        </div>
        <div className='!mt-10 flex justify-between'>
          <button
            type='button'
            className=' shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-[#333] hover:bg-black focus:outline-none flex items-center gap-1'
          >
            <GrFormPrevious /> Previous
          </button>
          <button
            type='button'
            className=' shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-[#333] hover:bg-black focus:outline-none flex items-center gap-1'
          >
            Next <MdNavigateNext />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Identity;
