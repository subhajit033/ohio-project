const DocUploadSuccess = () => {
  return (
    <div
      className='shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] text-black flex w-max max-w-sm rounded overflow-hidden'
      role='alert'
    >
      <div className='flex items-center px-4 bg-green-500'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-5 shrink-0 fill-white inline'
          viewBox='0 0 512 512'
        >
          <ellipse
            cx='256'
            cy='256'
            data-original='#000'
            rx='256'
            ry='255.832'
          />
          <path
            className='fill-green-500'
            d='m235.472 392.08-121.04-94.296 34.416-44.168 74.328 57.904 122.672-177.016 46.032 31.888z'
            data-original='#000'
          />
        </svg>
      </div>
      <div className='py-2.5 sm:inline text-sm font-semibold mx-4'>
        <p>Update successfully</p>
        <p className='text-xs text-gray-400'>
          Some important information will appear here
        </p>
      </div>
    </div>
  );
};

export default DocUploadSuccess;
