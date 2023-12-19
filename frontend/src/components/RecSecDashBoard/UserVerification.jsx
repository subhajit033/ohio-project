import UploadNav from './UploadNav';

const UserVerification = () => {
  return (
    <div>
      {/* user details dash board */}
      <div className=' h-[88vh] overflow-auto'>
        <div className='flex items-center justify-center  gap-4'>
          <img
            src='https://readymadeui.com/team-1.webp'
            className='w-24 h-24 rounded-full'
          />
          <div>
            <h4 className='text-base text-[#333] font-bold '>John Doe</h4>
            <h4 className='text-base text-[#333] font-bold '>
              DOB - 3 JAN 2001
            </h4>
            <h4 className='text-base text-[#333] font-bold '>
              Place Of Inhabitance -{' '}
              <span className='text-blue-600'>Delhi, In</span>
            </h4>
          </div>
        </div>
        <UploadNav />
      </div>
    </div>
  );
};

export default UserVerification;
