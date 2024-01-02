
import {useSelector} from 'react-redux'
const Officials = () => {

  const formData = useSelector((store) => store.registration.formData);

  

  const OfficialsTab = ({ fieldName, value }) => {
    return (
      <div>
        <label className='text-sm font-semibold mb-2 block'>{fieldName}</label>
        <input
          name='name'
          type='text'
          className='bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500'
          value={value}
          disabled
        />
      </div>
    );
  };
  return (
    <div className=' flex-wrap gap-4 justify-center items-start border-2 border-red-600 flex-1 py-4 px-4'>
    <div className='grid sm:grid-cols-2 gap-y-7 gap-x-12 p-6'>
      <OfficialsTab fieldName={'Nationality'} value={''} />
      <OfficialsTab fieldName={'Status'} value={''} />
      <OfficialsTab fieldName={'Recording Number'} value={''} />
      <OfficialsTab fieldName={'Master Record'} value={''} />
      <OfficialsTab fieldName={'Date Account  Created'} value={new Date(formData?.createdAt).toLocaleString('en-US', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })} />
      <OfficialsTab fieldName={'Date Updated'} value={new Date(formData?.updatedAt).toLocaleString('en-US', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })} />
      <OfficialsTab fieldName={'Print Credential Card Date'} value={''} />
      <OfficialsTab fieldName={'Master Credential Card Number'} value={''} />
      <OfficialsTab fieldName={'Verified'} value={''} />
      <OfficialsTab fieldName={'Paid Credential Card'} value={''} />
      <OfficialsTab fieldName={'Deceased Date'} value={''} />
    </div>
    </div>
  );
};

export default Officials;
