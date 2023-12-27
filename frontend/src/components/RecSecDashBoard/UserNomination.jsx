import { useNavigate } from 'react-router-dom';

const UserNomination = ({
  firstName,
  middleName,
  lastName,
  primaryEmail,
  createdAt,
  _id,
}) => {
  const navigate = useNavigate();

  return (
    <tr className=''>
      <td className='px-6 py-4 text-sm'>{`${firstName} ${
        middleName ? middleName : ''
      } ${lastName}`}</td>
      <td className='px-6 py-4 text-sm'>{primaryEmail}</td>
      <td className='px-6 py-4 text-sm'>Admin</td>
      <td className='px-6 py-4 text-sm'>
        {new Date(createdAt).toLocaleString('en-US', {
          month: 'long',
          year: 'numeric',
        })}
      </td>
      <td className='px-6 py-4'>
        <button
          onClick={() => navigate(`/dashboard/admin/verifyuser/${_id}`)}
          type='button'
          className='px-2 py-1.5 rounded-full  text-white text-xs bg-green-600 tracking-wider font-semibold outline-none border-2 border-green-600 hover:bg-white hover:text-black transition-all duration-300'
        >
          Approve
        </button>
      </td>
    </tr>
  );
};

export default UserNomination;
