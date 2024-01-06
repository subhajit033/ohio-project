import { useState } from 'react';
import MemberShipBox from './MemberShipBox';
import { membershipType } from '../../utils/const';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { GrFormPrevious } from 'react-icons/gr';
import { prevStep } from '../../redux/Slices/registration';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setToast } from '../../redux/Slices/toastSlice';
import Loader from '../Loader/Loader';
import { setFormDataByLogin } from '../../redux/Slices/registration';
import { setMyDetails } from '../../redux/Slices/userSlice';

const Membership = ({ isDashBoard, formDisable }) => {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formData = useSelector((store) => store.registration.formData);

  const handleRegistration = async (e) => {
    e.preventDefault();
    setLoading(true);
    const userData = { ...formData };
    delete userData.passwordConfirm;
    delete userData.confirmEmail;
    try {
      const res = await axios({
        method: 'post',
        withCredentials: true,
        url: '/api/v1/users/signup',
        data: userData
      });

      if (res.data.status === 'success') {
        setLoading(false);
        dispatch(
          setToast({
            type: 'success',
            message: 'Registration Successfully Submitted'
          })
        );
        navigate('/approval');
      } else {
        throw new Error('failed');
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      dispatch(
        setToast({
          type: 'error',
          message: 'Registration failed'
        })
      );
    }
  };

  const updateMe = async () => {
    setLoading(true);
    try {
      const res = await axios({
        method: 'patch',
        withCredentials: true,
        url: '/api/v1/users/updateMe',
        data: formData
      });
      setLoading(false);
      if (res.data.status) {
        dispatch(setFormDataByLogin(res.data.data.data));
        dispatch(setMyDetails(res.data.data.data));
        dispatch(
          setToast({
            type: 'success',
            message: 'Data Updated Successfully'
          })
        );
      } else {
        throw new Error('failed');
      }
    } catch (err) {
      setLoading(false);
      dispatch(
        setToast({
          type: 'error',
          message: 'Something went wrong'
        })
      );
      console.log(err);
    }
  };

  return (
    <div className="p-6 md:p-8 lg:p-10">
      {loading ? <Loader /> : ''}
      <form
        className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 ${
          formDisable ? 'pointer-events-none' : 'pointer-events-auto'
        }`}
      >
        {membershipType.map((merberShip, i) => {
          return <MemberShipBox key={i} value={merberShip} />;
        })}
      </form>
      <div className="!mt-10 flex justify-between">
        <button
          type="button"
          className=" shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-[#333] hover:bg-black focus:outline-none flex items-center gap-1 pointer-events-auto"
          onClick={() => dispatch(prevStep())}
        >
          <GrFormPrevious /> Previous
        </button>
        {isDashBoard ? (
          <button
            onClick={updateMe}
            type="submit"
            className=" shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-blue-600 hover:bg-black focus:outline-none flex items-center gap-1 pointer-events-auto"
          >
            {loading ? 'Updaing changes..' : 'Update Changes'}
          </button>
        ) : (
          <button
            type="submit"
            className=" shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-blue-600 hover:bg-black focus:outline-none flex items-center gap-1 pointer-events-auto"
            onClick={handleRegistration}
          >
            {loading ? 'Validating...' : 'Submit'}
          </button>
        )}
      </div>
    </div>
  );
};

export default Membership;
