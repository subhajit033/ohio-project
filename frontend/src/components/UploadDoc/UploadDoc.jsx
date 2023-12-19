import React from 'react';

const UploadDoc = ({ name }) => {
  return (
    <div className='font-[sans-serif] max-w-md '>
      <label className='text-sm text-black mb-2 block'>{name}</label>
      <input
        type='file'
        className='w-full text-black text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-2.5 file:px-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-black rounded'
      />
    </div>
  );
};

export default UploadDoc;
