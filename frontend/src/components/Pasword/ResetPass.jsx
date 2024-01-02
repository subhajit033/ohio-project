import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from '../Loader/Loader';
const ResetPass = () => {
  const { resetToken } = useParams();
  console.log(resetToken);
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [loading, setLoading] = useState(false);

  const resetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios({
        method: 'patch',
        withCredentials: true,
        url: `/api/v1/users/resetPassword/${resetToken}`,
        data: { password }
      });
      setLoading(false);
      alert('Password Updated Successfully !!, Login Again');
      window.open('/login', '_self');
    } catch (err) {
      console.log(err);
      setLoading(false);
      alert('Reset Link expired');
    }
  };
  return (
    <div className=" flex-wrap gap-4 justify-center items-start  py-4 px-4">
      <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
        <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <div className="font-semibold text-3xl">
              <p>Reset Password</p>
            </div>
          </div>
          {loading ? <Loader /> : ''}
          <div>
            <form onSubmit={resetPassword}>
              <div className="flex flex-col space-y-8">
                <div>
                  <label className="text-sm mb-2 block">Password</label>
                  <input
                    name="password"
                    type="password"
                    className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm mb-2 block">Password Confirm</label>
                  <input
                    name="password"
                    type="password"
                    className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500"
                    placeholder="Confirm password"
                    value={passwordConfirm}
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    required
                  />
                </div>

                <div className="flex flex-col space-y-5">
                  <div>
                    <button
                      type="submit"
                      className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm"
                    >
                      {loading ? 'Updating Password...' : 'Update Password'}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPass;
