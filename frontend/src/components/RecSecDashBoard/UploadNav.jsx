import { useState } from 'react';
import { IoCloudUploadOutline } from 'react-icons/io5';
import { PiFilesLight } from 'react-icons/pi';
import UploadDocContainer from '../UploadDoc/UploadDocContainer';
import UploadedFiles from '../UserDashBoard/UploadedFiles';

const UploadNav = ({viewDocs}) => {
  const [activeNav, setActiveNav] = useState('Status');
  return (
    <div className="my-8">
      <div className="grid  grid-cols-2 md:grid-cols-5 gap-2 md:gap-5">
        <button
          onClick={() => setActiveNav('Status')}
          className={` text-base ${
            activeNav == 'Status' ? 'bg-[#121e31] text-white' : 'bg-white text-[#121e31]'
          } rounded-md p-3  shadow-md flex items-center justify-center gap-4`}
        >
          <PiFilesLight />
          Status
        </button>
        <button
          onClick={() => setActiveNav('Notices')}
          className={` text-base ${
            activeNav == 'Notices' ? 'bg-[#121e31] text-white' : 'bg-white text-[#121e31]'
          } rounded-md p-3  shadow-md flex items-center justify-center gap-4`}
        >
          <PiFilesLight />
          Notices
        </button>
        <button
          onClick={() => setActiveNav('Land')}
          className={` text-base ${
            activeNav == 'Land' ? 'bg-[#121e31] text-white' : 'bg-white text-[#121e31]'
          } rounded-md p-3  shadow-md flex items-center justify-center gap-4`}
        >
          <PiFilesLight />
          Land
        </button>
        <button
          onClick={() => setActiveNav('Incident Report')}
          className={` text-base ${
            activeNav == 'Incident Report' ? 'bg-[#121e31] text-white' : 'bg-white text-[#121e31]'
          } rounded-md p-3  shadow-md flex items-center justify-center gap-4`}
        >
          <PiFilesLight />
          Incident Report
        </button>
        <button
          onClick={() => setActiveNav('Private')}
          className={` text-base ${
            activeNav == 'Private' ? 'bg-[#121e31] text-white' : 'bg-white text-[#121e31]'
          } rounded-md p-3  shadow-md flex items-center justify-center gap-4`}
        >
          <PiFilesLight />
          Private
        </button>
      </div>
      <div className={`border border-gray-100 font-light p-8 rounded text-gray-500 bg-white mt-6`}>
        {/* <UploadDocContainer tab={activeNav} /> */}
        <UploadedFiles viewDocs={viewDocs} uploadTab={activeNav} />
      </div>
    </div>
  );
};

export default UploadNav;
