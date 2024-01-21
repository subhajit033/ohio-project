import UploadNav from './UploadNav';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setToast } from '../../redux/Slices/toastSlice';
import { setNationality } from '../../redux/Slices/userSlice';
import { states } from '../../utils/const';

const UserVerification = ({ approvedUsers, viewDocs }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userId } = useParams();
  const unApprovedUser = useSelector((store) => store.user.unApprovedUser);
  const nationality = useSelector((store) => store.user.nationality);
  const approvedUser = useSelector((store) => store.user.approvedUser);
  const myDetails = useSelector((store) => store.user.myDetails);
  //getting unapproved user from redux
  let user;
  if (approvedUsers) {
    user = approvedUser.filter((user) => user._id === userId)[0];
  } else {
    user = user = unApprovedUser.filter((user) => user._id === userId)[0];
  }

  const [loading, setLoading] = useState(false);
  const getOtp = async () => {
    if (!nationality || nationality === 'Nationality') {
      return dispatch(setToast({ type: 'error', message: 'Select Nationality before approving user' }));
    }

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
              {/* <button
                type="button"
                className="px-6 py-2.5 rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-[#333] hover:bg-[#222] active:bg-[#333]"
              >
                Officials
              </button> */}

              <select
                onChange={(e) => dispatch(setNationality(e.target.value))}
                className="border-2 border-black px-4 py-1.5 rounded-lg"
                name="nationality"
                id="nationality"
              >
                <option value="Nationality">Nationality</option>
                {states.map((state) => {
                  return (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  );
                })}
              </select>
            </div>
          ) : (
            <div className="space-x-4">
              {myDetails.role === 'secretary' && !viewDocs && (
                <button
                  type="button"
                  onClick={() => {
                    dispatch(setToast({ type: 'success', message: 'User updated succesfully' }));
                    navigate('/dashboard/admin');
                  }}
                  className="px-6 py-2.5 rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-green-600 hover:bg-green-700 active:bg-green-600"
                >
                  Update User
                </button>
              )}
              <button
                type="button"
                onClick={() => navigate(`/dashboard/admin/viewuser/${userId}`)}
                className="px-6 py-2.5 rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-green-600"
              >
                View User
              </button>
            </div>
          )}
        </div>
        {myDetails.role === 'secretary' && <UploadNav viewDocs={viewDocs} />}
      </div>
    </div>
  );
};

export default UserVerification;
