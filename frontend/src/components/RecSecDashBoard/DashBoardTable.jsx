import UserNomination from './UserNomination';
import { useSelector } from 'react-redux';

const DashBoardTable = ({ isAdmin, approvedUsers }) => {
  const unApprovedUser = useSelector((store) => store.user.unApprovedUser);
  const approvedUser = useSelector((store) => store.user.approvedUser);

  return (
    <div className=" flex-wrap gap-4 justify-center items-start border-2 border-red-600 flex-1 py-4 px-4">
      <div className="w-screen md:w-full overflow-x-auto">
        <table className="min-w-full bg-white font-[sans-serif]">
          <thead className="bg-gray-800 whitespace-nowrap">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-white">Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-white">Email</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-white">Id</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-white">Joined At</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-white">Actions</th>
            </tr>
          </thead>
          <tbody className="whitespace-nowrap">
            {!approvedUsers
              ? unApprovedUser.map((user) => {
                  return <UserNomination key={user._id} {...user} isAdmin={isAdmin} approvedUsers={approvedUsers}  />;
                })
              : approvedUser.map((user) => {
                  return <UserNomination key={user._id} {...user} isAdmin={isAdmin} approvedUsers={approvedUsers} />;
                })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashBoardTable;
