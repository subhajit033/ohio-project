import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UserNomination = ({ firstName, middleName, lastName, primaryEmail, createdAt, _id, isAdmin, approvedUsers, recordingNumber}) => {
  const navigate = useNavigate();
  const myDetails = useSelector((store) => store.user.myDetails);

  return (
    <tr className="">
      <td className="px-6 py-4 text-sm">{`${firstName} ${middleName ? middleName : ''} ${lastName}`}</td>
      <td className="px-6 py-4 text-sm">{primaryEmail}</td>
      <td className="px-6 py-4 text-sm">{recordingNumber? recordingNumber: 'test-user'}</td>
      <td className="px-6 py-4 text-sm">
        {new Date(createdAt).toLocaleString('en-US', {
          month: 'long',
          year: 'numeric'
        })}
      </td>
      {!approvedUsers ? (
        <td className="px-6 py-4">
          <button
            onClick={() => navigate(`/dashboard/admin/verifyuser/${_id}`)}
            type="button"
            className="px-2 py-1.5 rounded-full  text-white text-xs bg-green-600 tracking-wider font-semibold outline-none border-2 border-green-600 hover:bg-white hover:text-black transition-all duration-300"
          >
            Approve
          </button>
        </td>
      ) : (
        <td className="px-6 py-4 space-x-2">
          {myDetails.role === 'secretary' && <button
            onClick={() => navigate(`/dashboard/admin/userStatus/approved/uploadDocs/${_id}`)}
            type="button"
            className="px-2 py-1.5 rounded-full  text-white text-xs bg-blue-600 tracking-wider font-semibold outline-none border-2 border-blue-600 hover:bg-white hover:text-black transition-all duration-300"
          >
            Upload
          </button>}
          <button
            onClick={() => navigate(`/dashboard/admin/userStatus/approved/viewDocs/${_id}`)}
            type="button"
            className="px-2 py-1.5 rounded-full  text-white text-xs bg-blue-600 tracking-wider font-semibold outline-none border-2 border-blue-600 hover:bg-white hover:text-black transition-all duration-300"
          >
            View
          </button>
        </td>
      )}
    </tr>
  );
};

export default UserNomination;
