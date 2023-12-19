import { useEffect, useState } from 'react';

const UploadDoc = ({ name }) => {
  const [file, setFile] = useState(null);
  useEffect(() => {
    if (file) {
      if (confirm('Do you want to upload this file')) {
        console.log('uplod');
      } else {
        console.log('failed');
      }
    }
  });

  return (
    <div className='font-[sans-serif] max-w-md '>
      <label className='text-sm text-black mb-2 block'>{name}</label>
      <input
        type='file'
        className='w-full text-black text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-2.5 file:px-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-black rounded'
        onChange={(e) => setFile(e.target.files[0])}
      />
    </div>
  );
};

export default UploadDoc;
