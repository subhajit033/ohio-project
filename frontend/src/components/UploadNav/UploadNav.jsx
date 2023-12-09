import { useState } from 'react';
import { IoCloudUploadOutline } from 'react-icons/io5';
import { PiFilesLight } from 'react-icons/pi';

const UploadNav = () => {
  const [activeNav, setActiveNav] = useState('#Upload');
  return (
    <div className='my-8'>
      <div className='grid grid-cols-2 gap-5'>
        <button
          onClick={() => setActiveNav('#Upload')}
          className={` text-xl ${
            activeNav == '#Upload'
              ? 'bg-[#0f172a] text-white'
              : 'bg-white text-[#0f172a]'
          } p-4 rounded  shadow-md flex items-center justify-center gap-4`}
        >
          <IoCloudUploadOutline />
          Upload Files
        </button>
        <button
          onClick={() => setActiveNav('#File')}
          className={`p-4 text-xl rounded ${
            activeNav == '#File'
              ? 'bg-[#0f172a] text-white'
              : 'bg-white text-[#0f172a]'
          } shadow-md flex items-center justify-center gap-4`}
        >
          <PiFilesLight />
          Your Files
        </button>
      </div>
      <div
        className={`shadow-xl  border border-gray-100 font-light p-8 rounded text-gray-500 bg-white mt-6`}
      >
        Raw denim you probably haven't heard of them jean shorts Austin.
        Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
        cliche tempor, williamsburg carles vegan helvetica. Reprehenderit
        butcher retro keffiyeh dreamcatcher synth.
      </div>
    </div>
  );
};

export default UploadNav;
