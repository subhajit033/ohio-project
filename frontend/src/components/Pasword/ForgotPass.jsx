import { useState } from 'react';
import axios from 'axios';
import Loader from '../Loader/Loader';

const ForgotPass = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);


  const senfResetmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios({
        method: 'post',
        withCredentials: true,
        url: '/api/v1/users/forgotPassword',
        data: { email }
      });
      setLoading(false);
      alert('An email with reset link sent to your registered email');
    } catch (err) {
      setLoading(false);
      alert('No user found with this email id');
    }
  };
  return (
    <div className=" flex-wrap gap-4 justify-center items-start  py-4 px-4">
      <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
        <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <div className="font-semibold text-3xl">
              <p>Forgot Password</p>
            </div>
          </div>
          {loading ? <Loader /> : ''}
          <div>
            <form onSubmit={senfResetmail}>
              <div className="flex flex-col space-y-16">
                <div>
                  <label className="text-sm mb-2 block">Enter Your Email</label>
                  <input
                    name="text"
                    type="text"
                    className="bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="flex flex-col space-y-5">
                  <div>
                    <button
                      type="submit"
                      className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm"
                    >
                      {loading ? 'Verifying...' : 'Submit'}
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

export default ForgotPass;
