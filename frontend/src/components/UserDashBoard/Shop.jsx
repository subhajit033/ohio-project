const Shop = () => {
  const ShopCards = () => {
    return (
      <div className='w-72'>
        <div className='bg-white shadow-md border border-gray-200 rounded-lg max-w-sm '>
          <a href='#'>
            <img
              className='rounded-t-lg'
              src='https://flowbite.com/docs/images/blog/image-1.jpg'
              alt=''
            />
          </a>
          <div className='p-5'>
            <a href='#'>
              <h5 className='text-gray-900 font-bold text-xl tracking-tight mb-2'>
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p className='font-normal text-sm text-gray-600  leading-tight'>
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <p className='my-1 font-semibold'>$58</p>
            <a
              href='#'
              className='text-white bg-[#121e31] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              Purchase
              <svg
                className='-mr-1 ml-2 h-4 w-4'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className='p-6 grid grid-cols-2 md:grid-cols-3 gap-6 md:h-[89vh] overflow-auto'>
      <ShopCards />
      <ShopCards />
      <ShopCards />
      <ShopCards />
      <ShopCards />
    </div>
  );
};

export default Shop;
