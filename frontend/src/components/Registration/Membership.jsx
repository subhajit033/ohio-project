import MemberShipBox from './MemberShipBox';
import { membershipType } from '../../utils/const';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { GrFormPrevious } from 'react-icons/gr';
import { prevStep } from '../../redux/Slices/registration';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setToast } from '../../redux/Slices/toastSlice';
const Membership = ({ isDashBoard }) => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formData = useSelector((store) => store.registration.formData);

  const handleRegistration = async (e) => {
    e.preventDefault();
    const userData = { ...formData };
    delete userData.passwordConfirm;
    try {
      const res = await axios({
        method: 'post',
        withCredentials: true,
        url: '/api/v1/users/signup',
        data: userData,
      });

      if (res.data.status === 'success') {
        dispatch(
          setToast({
            type: 'success',
            message: 'Registration Successfully Submitted',
          })
        );
        navigate('/approval')
      } else {
        throw new Error('failed');
      }
    } catch (error) {
      dispatch(
        setToast({
          type: 'error',
          message: 'Registration failed',
        })
      );
    }
  };

  return (
    <div className='p-6 md:p-8 lg:p-10'>
      <form className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4'>
        {membershipType.map((merberShip, i) => {
          return <MemberShipBox key={i} value={merberShip} />;
        })}
      </form>
      <div className='!mt-10 flex justify-between'>
        <button
          type='button'
          className=' shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-[#333] hover:bg-black focus:outline-none flex items-center gap-1'
          onClick={() => dispatch(prevStep())}
        >
          <GrFormPrevious /> Previous
        </button>
        {isDashBoard ? (
          <button
            type='submit'
            className=' shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-blue-600 hover:bg-black focus:outline-none flex items-center gap-1'
          >
            Update Changes
          </button>
        ) : (
          <button
            type='submit'
            className=' shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-blue-600 hover:bg-black focus:outline-none flex items-center gap-1'
            onClick={handleRegistration}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default Membership;
