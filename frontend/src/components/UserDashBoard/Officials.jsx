import { useSelector } from 'react-redux';
const Officials = () => {
  // const myDetails = useSelector((store) => store.registration.myDetails);
  const myDetails = useSelector((store) => store.user.myDetails);

  const OfficialsTab = ({ fieldName, value }) => {
    return (
      <div>
        <label className="text-sm font-semibold mb-2 block">{fieldName}</label>
        <input
          name="name"
          type="text"
          className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500"
          value={value}
          disabled
        />
      </div>
    );
  };
  return (
    
      <div className="grid sm:grid-cols-2 gap-y-7 gap-x-12 p-6">
        <OfficialsTab fieldName={'Nationality'} value={myDetails.nationality || 'NA'} />
        <OfficialsTab fieldName={'Status'} value={myDetails.status || 'NA'} />
        <OfficialsTab fieldName={'Recording Number'} value={myDetails.recordingNumber || 'NA'} />
        <OfficialsTab fieldName={'Master Record'} value={myDetails.masterRecord || 'NA'} />
        <OfficialsTab
          fieldName={'Date Account  Created'}
          value={new Date(myDetails?.createdAt).toLocaleString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          })}
        />
        <OfficialsTab
          fieldName={'Date Updated'}
          value={new Date(myDetails?.updatedAt).toLocaleString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          })}
        />
        <OfficialsTab fieldName={'Print Credential Card Date'} value={''} />
        <OfficialsTab fieldName={'Master Credential Card Number'} value={''} />
        <OfficialsTab fieldName={'Verified'} value={''} />
        <OfficialsTab fieldName={'Paid Credential Card'} value={''} />
        <OfficialsTab fieldName={'Deceased Date'} value={''} />
      </div>
    
  );
};

export default Officials;
