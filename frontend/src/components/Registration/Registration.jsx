import { useState } from 'react';

const Registration = () => {
  return (
    <div className='max-w-4xl mx-auto font-[sans-serif] text-[#333] p-6'>
      <div className='text-center mb-16'>
        <h4 className='text-xl font-semibold mt-3'>
          Fill the details
        </h4>
      </div>
      <form>
        <div className='grid sm:grid-cols-2 gap-y-7 gap-x-12'>
          <div>
            <label className='text-sm mb-2 block'>First Name *</label>
            <input
              name='name'
              type='text'
              className='bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500'
              placeholder='Enter name'
            />
          </div>
          <div>
            <label className='text-sm mb-2 block'>Middle Name</label>
            <input
              name='mname'
              type='text'
              className='bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500'
              placeholder='Enter middle name'
            />
          </div>
          <div>
            <label className='text-sm mb-2 block'>Last Name</label>
            <input
              name='lname'
              type='text'
              className='bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500'
              placeholder='Enter middle name'
            />
          </div>
          <div>
            <label className='text-sm mb-2 block'>Email Id</label>
            <input
              name='email'
              type='text'
              className='bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500'
              placeholder='Enter email'
            />
          </div>

          <div>
            <label className='text-sm mb-2 block'>Password</label>
            <input
              name='password'
              type='password'
              className='bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500'
              placeholder='Enter password'
            />
          </div>
          <div>
            <label className='text-sm mb-2 block'>Confirm Password</label>
            <input
              name='cpassword'
              type='password'
              className='bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500'
              placeholder='Enter confirm password'
            />
          </div>
          <div>
            <label className='text-sm mb-2 block'>Date of Birth</label>
            <input
              name='cpassword'
              type='date'
              className='bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500'
              placeholder='Enter DOB '
            />
          </div>
          <div>
            <label className='text-sm mb-2 block'>Home State</label>
            <input
              name='lname'
              type='text'
              className='bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500'
              placeholder='Enter home state name'
            />
          </div>
          <div>
            <label className='text-sm mb-2 block'>country</label>
            <input
              name='lname'
              type='text'
              className='bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500'
              placeholder='Enter country name'
            />
          </div>
          <div>
            <label className='text-sm mb-2 block'>Mailing address</label>
            <input
              name='lname'
              type='text'
              className='bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500'
              placeholder='mailing address'
            />
          </div>
          <div>
            <label className='text-sm mb-2 block'>Mailing address line 2</label>
            <input
              name='lname'
              type='text'
              className='bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500'
              placeholder='mailing address line 2'
            />
          </div>

          <div>
            <label className='text-sm mb-2 block'>Mailing State</label>
            <input
              name='lname'
              type='text'
              className='bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500'
              placeholder='Enter mailing state'
            />
          </div>
          <div>
            <label className='text-sm mb-2 block'>Mailing Zip Code</label>
            <input
              name='lname'
              type='text'
              className='bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500'
              placeholder='Enter mailing state'
            />
          </div>
          <div>
            <label className='text-sm mb-2 block'>Mobile No.</label>
            <input
              name='lname'
              type='text'
              className='bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500'
              placeholder='Enter mobile no'
            />
          </div>
          <div>
            <label className='text-sm mb-2 block'>
              Your Land Recorder's Email
            </label>
            <input
              name='lname'
              type='email'
              className='bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500'
              placeholder='Enter mailing state'
            />
          </div>
          <div>
            <label className='text-sm mb-2 block'>
              Your Land Recorder's Email
            </label>
            <input
              name='lname'
              type='email'
              className='bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500'
              placeholder="Enter Land Recorder's Email"
            />
          </div>
          <div>
            <label className='text-sm mb-2 block'>
              Your State Coordinater's Email
            </label>
            <input
              name='lname'
              type='email'
              className='bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500'
              placeholder="Enter state Coordinater's"
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
            />
          </div>
        </div>
        <div className='!mt-10'>
          <button
            type='button'
            className='w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-[#333] hover:bg-black focus:outline-none'
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
