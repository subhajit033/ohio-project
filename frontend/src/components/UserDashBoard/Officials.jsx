import { officials } from '../../utils/const';

const Officials = () => {
  const OfficialsTab = ({ fieldName }) => {
    return (
      <div>
        <label className='text-sm font-semibold mb-2 block'>{fieldName}</label>
        <input
          name='name'
          type='text'
          className='bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500'
          value={'will update'}
          disabled
        />
      </div>
    );
  };
  return (
    <div className='grid sm:grid-cols-2 gap-y-7 gap-x-12 p-6'>
      {officials.map((fieldName) => {
        return <OfficialsTab key={fieldName} fieldName={fieldName} />;
      })}
    </div>
  );
};

export default Officials;
