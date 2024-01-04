import UploadNav from './UploadNav';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setToast } from '../../redux/Slices/toastSlice';

const UserVerification = ({ approvedUsers, viewDocs }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userId } = useParams();
  const unApprovedUser = useSelector((store) => store.user.unApprovedUser);
  const approvedUser = useSelector((store) => store.user.approvedUser);
  //getting unapproved user from redux
  let user;
  if (approvedUsers) {
    user = approvedUser.filter((user) => user._id === userId)[0];
  } else {
    user = user = unApprovedUser.filter((user) => user._id === userId)[0];
  }

  const [loading, setLoading] = useState(false);
  const getOtp = async () => {
    try {
      setLoading(true);
      const res = await axios({
        method: 'post',
        withCredentials: true,
        url: '/api/v1/users/approve-user'
      });
      setLoading(false);
      dispatch(setToast({ type: 'success', message: 'otp sent to your email' }));
      navigate(`/dashboard/admin/approveUser/${userId}`);
    } catch (err) {
      setLoading(false);
      dispatch(setToast({ type: 'error', message: 'something went wrong' }));
    }
  };
  return (
    <div className=" flex-wrap gap-4 justify-center items-start border-2 border-red-600 flex-1 py-4 px-4">
      {/* user details dash board */}
      <div className=" h-[88vh] overflow-auto">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center justify-center  gap-4">
            <img
              src={user.photo || 'https://icon-library.com/images/icon-user/icon-user-15.jpg'}
              className="w-24 h-24 rounded-full"
            />
            <div>
              <h4 className="text-base text-[#333] font-bold ">
                <span className="text-blue-600">
                  {' '}
                  {`${user.firstName || ''} ${user.middleName || ''} ${user.lastName || ''}`}
                </span>{' '}
              </h4>
              <h4 className="text-base text-[#333] font-bold ">
                DOB -{' '}
                <span className="text-blue-600">
                  {new Date(user.born).toLocaleString('en-US', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </span>
              </h4>
              <h4 className="text-base text-[#333] font-bold ">
                Place Of Inhabitance - <span className="text-blue-600">{user.placeOfInhabitance}</span>
              </h4>
            </div>
          </div>
          {!approvedUsers ? (
            <div className="space-x-4">
              <button
                type="button"
                className="px-6 py-2.5 rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-green-600 hover:bg-green-700 active:bg-green-600"
                onClick={getOtp}
              >
                {loading ? 'Verifing...' : 'Approve'}
              </button>
              <button
                type="button"
                className="px-6 py-2.5 rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-red-600 hover:bg-red-700 active:bg-red-600"
              >
                Decline
              </button>
              <button
                type="button"
                className="px-6 py-2.5 rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-[#333] hover:bg-[#222] active:bg-[#333]"
              >
                Officials
              </button>
            </div>
          ) : (
            <button
              type="button"
              className="px-6 py-2.5 rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-green-600 hover:bg-green-700 active:bg-green-600"
            >
              Update User
            </button>
          )}
        </div>
        <UploadNav viewDocs={viewDocs} />
      </div>
    </div>
  );
};

export default UserVerification;
