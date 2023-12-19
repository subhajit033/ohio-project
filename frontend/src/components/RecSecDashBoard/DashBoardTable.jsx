import React from 'react';

const DashBoardTable = () => {
  return (
    <div className='w-screen md:w-full overflow-x-auto'>
      <table className='min-w-full bg-white font-[sans-serif]'>
        <thead className='bg-gray-800 whitespace-nowrap'>
          <tr>
            <th className='px-6 py-3 text-left text-sm font-semibold text-white'>
              Name
            </th>
            <th className='px-6 py-3 text-left text-sm font-semibold text-white'>
              Email
            </th>
            <th className='px-6 py-3 text-left text-sm font-semibold text-white'>
              Id
            </th>
            <th className='px-6 py-3 text-left text-sm font-semibold text-white'>
              Joined At
            </th>
            <th className='px-6 py-3 text-left text-sm font-semibold text-white'>
              Actions
            </th>
          </tr>
        </thead>
        <tbody className='whitespace-nowrap'>
          <tr className=''>
            <td className='px-6 py-4 text-sm'>John Doe</td>
            <td className='px-6 py-4 text-sm'>john@example.com</td>
            <td className='px-6 py-4 text-sm'>Admin</td>
            <td className='px-6 py-4 text-sm'>2022-05-15</td>
            <td className='px-6 py-4'>
              <button
                type='button'
                className='px-2 py-1.5 rounded-full  text-white text-xs bg-green-600 tracking-wider font-semibold outline-none border-2 border-green-600 hover:bg-white hover:text-black transition-all duration-300'
              >
                Approve
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DashBoardTable;
