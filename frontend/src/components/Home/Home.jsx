

const Home = () => {
  return (
    <div
      style={{
        background:
          'linear-gradient(45deg, rgba(213,219,169,0.6470237753304446) 9%, rgba(17,0,255,0.45934870530243344) 90%)',
      }}
      className=' font-[sans-serif] h-[89vh]'
    >
      <div className='relative overflow-hidden'>
        <div className='max-w-screen-xl  py-16 px-4 sm:px-6 lg:py-32 lg:px-8'>
          <div className='relative text-center lg:text-left'>
            <h1 className='text-2xl tracking-tight leading-10 font-extrabold text-blue-500 sm:text-5xl sm:leading-none md:text-3xl lg:text-5xl'>
              The Ohio Assembly Land and
              <br className='xl:hidden' />
              <span className='text-blue-700'> Soil Jurisdiction</span>
            </h1>
            <p className='mt-4 text-left max-w-md text-lg text-gray-600 sm:text-xl md:mt-5 md:max-w-3xl leading-tight tracking-tighter lg:tracking-normal '>
              We are The legitimate republication form of government on the continental United States for Ohio
            </p>

            <div className='mt-12 flex items-start gap-4 sm:flex sm:justify-center lg:justify-start'>
              <div className='rounded-md shadow'>
                <button className='w-full flex items-center justify-center px-8 py-3 text-base font-semibold rounded-md text-indigo-600 bg-white hover:text-indigo-500 hover:bg-indigo-100 transition duration-150 ease-in-out'>
                  Play Video
                </button>
              </div>
              <div className='sm:mt-0 sm:ml-4'>
                <button className='w-full flex items-center justify-center px-8 py-3 text-base font-semibold rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition duration-150 ease-in-out'>
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
          <img
            className='h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full'
            src='https://readymadeui.com/hotel-img.webp'
            alt='Delicious Food'
          />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
