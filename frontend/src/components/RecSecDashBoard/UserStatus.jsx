import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUnApprovedUserSlice, setAprovedUserSlice } from '../../redux/Slices/userSlice';
import axios from 'axios';
const UserStatus = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [approvedUser, setApprovedUser] = useState([]);
  const [unApprovedUser, setUnApprovedUser] = useState([]);
  const getUsers = async () => {
    try {
      const res = await axios.get('/api/v1/users', { withCredentials: true });
      const users = res.data.data.data;
      setApprovedUser(users.filter((user) => user.isApproved === true));
      setUnApprovedUser(users.filter((user) => user.isApproved === false));
      dispatch(setUnApprovedUserSlice(users.filter((user) => user.isApproved === false)));
      dispatch(setAprovedUserSlice(users.filter((user) => user.isApproved === true)));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className=" flex-wrap gap-4 justify-center items-start border-2 border-red-600 flex-1 py-4 px-4">
      <div className="grid grid-cols-2 gap-8">
        <div
          onClick={() => navigate('/dashboard/admin/userStatus/unapproved')}
          className="text-center bg-gray-200 p-4 border-b-4 border-red-600 rounded-md cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="fill-red-600 w-10 inline-block" viewBox="0 0 512 512">
            <path
              d="M437 268.152h-50.118c-6.821 0-13.425.932-19.71 2.646-12.398-24.372-37.71-41.118-66.877-41.118h-88.59c-29.167 0-54.479 16.746-66.877 41.118a74.798 74.798 0 0 0-19.71-2.646H75c-41.355 0-75 33.645-75 75v80.118c0 24.813 20.187 45 45 45h422c24.813 0 45-20.187 45-45v-80.118c0-41.355-33.645-75-75-75zm-300.295 36.53v133.589H45c-8.271 0-15-6.729-15-15v-80.118c0-24.813 20.187-45 45-45h50.118c4.072 0 8.015.553 11.769 1.572a75.372 75.372 0 0 0-.182 4.957zm208.59 133.589h-178.59v-133.59c0-24.813 20.187-45 45-45h88.59c24.813 0 45 20.187 45 45v133.59zm136.705-15c0 8.271-6.729 15-15 15h-91.705v-133.59a75.32 75.32 0 0 0-.182-4.957 44.899 44.899 0 0 1 11.769-1.572H437c24.813 0 45 20.187 45 45v80.119z"
              data-original="#000000"
            />
            <path
              d="M100.06 126.504c-36.749 0-66.646 29.897-66.646 66.646-.001 36.749 29.897 66.646 66.646 66.646 36.748 0 66.646-29.897 66.646-66.646s-29.897-66.646-66.646-66.646zm-.001 103.292c-20.207 0-36.646-16.439-36.646-36.646s16.439-36.646 36.646-36.646 36.646 16.439 36.646 36.646-16.439 36.646-36.646 36.646zM256 43.729c-49.096 0-89.038 39.942-89.038 89.038s39.942 89.038 89.038 89.038 89.038-39.942 89.038-89.038c0-49.095-39.942-89.038-89.038-89.038zm0 148.076c-32.554 0-59.038-26.484-59.038-59.038 0-32.553 26.484-59.038 59.038-59.038s59.038 26.484 59.038 59.038c0 32.554-26.484 59.038-59.038 59.038zm155.94-65.301c-36.748 0-66.646 29.897-66.646 66.646.001 36.749 29.898 66.646 66.646 66.646 36.749 0 66.646-29.897 66.646-66.646s-29.897-66.646-66.646-66.646zm0 103.292c-20.206 0-36.646-16.439-36.646-36.646.001-20.207 16.44-36.646 36.646-36.646 20.207 0 36.646 16.439 36.646 36.646s-16.439 36.646-36.646 36.646z"
              data-original="#000000"
            />
          </svg>
          <h3 className="text-4xl font-extrabold mt-5">{unApprovedUser.length}</h3>
          <p className="text-gray-700 font-semibold mt-3">Unapproved Members</p>
        </div>
        <div onClick={() => navigate('/dashboard/admin/userStatus/approved')} className="text-center bg-gray-200 p-4 border-b-4 border-green-600 rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="fill-green-600 w-10 inline-block" viewBox="0 0 512 512">
            <path
              d="M437 268.152h-50.118c-6.821 0-13.425.932-19.71 2.646-12.398-24.372-37.71-41.118-66.877-41.118h-88.59c-29.167 0-54.479 16.746-66.877 41.118a74.798 74.798 0 0 0-19.71-2.646H75c-41.355 0-75 33.645-75 75v80.118c0 24.813 20.187 45 45 45h422c24.813 0 45-20.187 45-45v-80.118c0-41.355-33.645-75-75-75zm-300.295 36.53v133.589H45c-8.271 0-15-6.729-15-15v-80.118c0-24.813 20.187-45 45-45h50.118c4.072 0 8.015.553 11.769 1.572a75.372 75.372 0 0 0-.182 4.957zm208.59 133.589h-178.59v-133.59c0-24.813 20.187-45 45-45h88.59c24.813 0 45 20.187 45 45v133.59zm136.705-15c0 8.271-6.729 15-15 15h-91.705v-133.59a75.32 75.32 0 0 0-.182-4.957 44.899 44.899 0 0 1 11.769-1.572H437c24.813 0 45 20.187 45 45v80.119z"
              data-original="#000000"
            />
            <path
              d="M100.06 126.504c-36.749 0-66.646 29.897-66.646 66.646-.001 36.749 29.897 66.646 66.646 66.646 36.748 0 66.646-29.897 66.646-66.646s-29.897-66.646-66.646-66.646zm-.001 103.292c-20.207 0-36.646-16.439-36.646-36.646s16.439-36.646 36.646-36.646 36.646 16.439 36.646 36.646-16.439 36.646-36.646 36.646zM256 43.729c-49.096 0-89.038 39.942-89.038 89.038s39.942 89.038 89.038 89.038 89.038-39.942 89.038-89.038c0-49.095-39.942-89.038-89.038-89.038zm0 148.076c-32.554 0-59.038-26.484-59.038-59.038 0-32.553 26.484-59.038 59.038-59.038s59.038 26.484 59.038 59.038c0 32.554-26.484 59.038-59.038 59.038zm155.94-65.301c-36.748 0-66.646 29.897-66.646 66.646.001 36.749 29.898 66.646 66.646 66.646 36.749 0 66.646-29.897 66.646-66.646s-29.897-66.646-66.646-66.646zm0 103.292c-20.206 0-36.646-16.439-36.646-36.646.001-20.207 16.44-36.646 36.646-36.646 20.207 0 36.646 16.439 36.646 36.646s-16.439 36.646-36.646 36.646z"
              data-original="#000000"
            />
          </svg>
          <h3 className="text-4xl font-extrabold mt-5">{approvedUser.length}</h3>
          <p className="text-gray-700 font-semibold mt-3">Approved Members</p>
        </div>
      </div>
    </div>
  );
};

export default UserStatus;
