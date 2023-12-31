import { useEffect } from 'react';
import Identity from './Identity';
import Contact from './Contact';
import Membership from './Membership';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { setFormData } from '../../redux/Slices/registration';

const Registration = ({ isDashBoard }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const step = useSelector((store) => store.registration.step);
  
  useEffect(() => {
    authenticateEmail();
  }, []);
  const authenticateEmail = async () => {
    try {
      const res = await axios.get('/api/v1/users/authenticateEmail', { withCredentials: true });
      if (res?.data?.status) {
        const { name, email } = res.data.data.data;
        const nameLength = name.split(' ');
        if (nameLength.length === 3) {
          dispatch(
            setFormData({
              firstName: nameLength[0],
              middleName: nameLength[1],
              lastName: nameLength[2],
              primaryEmail: email,
              confirmEmail: email
            })
          );
        } else if (nameLength.length === 2) {
          dispatch(
            setFormData({ firstName: nameLength[0], lastName: nameLength[1], primaryEmail: email, confirmEmail: email })
          );
        }
      } else {
        throw new Error('failed');
      }
    } catch (err) {
      console.log(err);
      navigate('/unverifiedEmail');
    }
  };

  return (
    <div className="mt-6">
      <div className="flex items-start max-w-screen-lg mx-auto">
        <div className="w-full">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 shrink-0 mx-[-1px] bg-blue-600 p-1.5 flex items-center justify-center rounded-full">
              <span className="text-base text-white font-bold">1</span>
            </div>
            <div className={`w-full h-1 mx-4 rounded-lg ${step > 1 ? 'bg-blue-600' : 'bg-gray-600'}`}></div>
          </div>
          <div className="mt-2 mr-4">
            <h6 className="text-sm lg:text-base font-bold text-blue-500">Personal Info</h6>
          </div>
        </div>
        <div className="w-full">
          <div className="flex items-center w-full">
            <div
              className={`w-8 h-8 shrink-0 mx-[-1px] ${
                step >= 2 ? 'bg-blue-600' : 'bg-gray-600'
              } p-1.5 flex items-center justify-center rounded-full`}
            >
              <span className="text-base text-white font-bold">2</span>
            </div>
            <div className={`w-full h-1 mx-4 rounded-lg ${step > 2 ? 'bg-blue-600' : 'bg-gray-600'}`}></div>
          </div>
          <div className="mt-2 mr-4">
            <h6 className="text-sm lg:text-base font-bold text-blue-500">Contact Details</h6>
          </div>
        </div>
        <div>
          <div className="flex items-center">
            <div
              className={`w-8 h-8 shrink-0 mx-[-1px] ${
                step >= 3 ? 'bg-blue-600' : 'bg-gray-600'
              } p-1.5 flex items-center justify-center rounded-full`}
            >
              <span className="text-base text-white font-bold">3</span>
            </div>
          </div>
          <div className="mt-2">
            <h6 className="text-sm lg:text-base font-bold text-blue-500">Membership</h6>
          </div>
        </div>
      </div>
      {step === 1 && <Identity isDashBoard={isDashBoard} />}
      {step === 2 && <Contact isDashBoard={isDashBoard} />}
      {step === 3 && <Membership isDashBoard={isDashBoard} />}
    </div>
  );
};

export default Registration;
