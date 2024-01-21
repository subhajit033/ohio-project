import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdNavigateNext } from 'react-icons/md';
import { GrFormPrevious } from 'react-icons/gr';
import { county } from '../../utils/const';
import { setFormData, prevStep, nextStep } from '../../redux/Slices/registration';
import { setToast } from '../../redux/Slices/toastSlice';
const Contact = ({ isDashBoard, formDisable }) => {
  const dispatch = useDispatch();
  const formData = useSelector((store) => store.registration.formData);
  const isAuthenticated = useSelector((store) => store.auth.isAuthenticated);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.passwordConfirm) {
      return dispatch(
        setToast({
          type: 'error',
          message: 'Password and Confirm Password Does not match'
        })
      );
    }
    dispatch(nextStep());
  };
  useEffect(() => {
    dispatch(setFormData({ mailingState: 'Ohio' }));
  }, []);
  useEffect(() => {
    // If formData.county is set, it means we are returning to this step,
    // so we want to set the initial value of the <select> tag
    if (formData.county) {
      // Ensure the selected county is one of the valid options

      // Set the initial value of the <select> tag
      document.getElementById('county').value = formData.county;
    }
  }, [formData.county]);
  return (
    <div className="max-w-4xl mx-auto font-[sans-serif] text-[#333] p-6">
      <form autoComplete='off' className={`${formDisable ? 'pointer-events-none' : 'pointer-events-auto'}`} onSubmit={handleSubmit}>
        <div className="grid sm:grid-cols-2 gap-y-7 gap-x-12">
          <div>
            <label className="text-sm mb-2 block">Mailing address *</label>
            <input
              name="lname"
              type="text"
              autoComplete='off'
              required
              className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500"
              placeholder="mailing address"
              value={formData.mailingAddress}
              onChange={(e) => dispatch(setFormData({ mailingAddress: e.target.value }))}
            />
          </div>
          <div>
            <label className="text-sm mb-2 block">Mailing address line 2</label>
            <input
              name="lname"
              type="text"
              autoComplete='off'
              className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500"
              placeholder="mailing address line 2"
              value={formData.SecMailingAddress}
              onChange={(e) => dispatch(setFormData({ SecMailingAddress: e.target.value }))}
            />
          </div>

          <div>
            <label className="text-sm mb-2 block">Mailing City *</label>
            <input
              name="lname"
              type="text"
              autoComplete='off'
              required
              className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500"
              placeholder="Mailing city"
              value={formData.mailingCity}
              onChange={(e) => dispatch(setFormData({ mailingCity: e.target.value }))}
            />
          </div>
          <div>
            <label className="text-sm mb-2 block">County *</label>
            <select
              className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500"
              name="county"
              id="county"
              required
              onChange={(e) => dispatch(setFormData({ county: e.target.value }))}
            >
              <option>Select county</option>
              {county.map((county) => {
                return (
                  <option key={county} value={county}>
                    {county}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <label className="text-sm mb-2 block">Mailing State</label>
            <input
              name="lname"
              type="text"
              autoComplete='off'
              className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500"
              placeholder="Enter mailing state"
              value="Ohio"
              disabled
            />
          </div>
          <div>
            <label className="text-sm mb-2 block">Mailing Postal Code</label>
            <input
              name="lname"
              type="text"
              autoComplete='off'
              className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500"
              placeholder="Postal code"
              required
              value={formData.postalCode}
              onChange={(e) => dispatch(setFormData({ postalCode: e.target.value }))}
            />
          </div>
          <div>
            <label className="text-sm mb-2 block">Phone No.</label>
            <input
              name="lname"
              type="text"
              autoComplete='off'
              className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500"
              placeholder="Enter Phone no"
              required
              value={formData.mobileNo}
              onChange={(e) => dispatch(setFormData({ mobileNo: e.target.value }))}
            />
          </div>
          <div>
            <label className="text-sm mb-2 block">Email Id</label>
            <input
              name="email"
              type="email"
              className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500"
              placeholder="Enter email"
              disabled={!isAuthenticated}
              required
              value={formData.primaryEmail}
              onChange={(e) => dispatch(setFormData({ primaryEmail: e.target.value }))}
            />
          </div>
          {!isDashBoard && (
            <div>
              <label className="text-sm mb-2 block">Confirm Email Id</label>
              <input
                name="email"
                type="text"
                autoComplete='off'
                className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500"
                placeholder="Confirm email"
                disabled={!isAuthenticated}
                required
                value={formData.confirmEmail}
                onChange={(e) => dispatch(setFormData({ confirmEmail: e.target.value }))}
              />
            </div>
          )}
          <div>
            <label className="text-sm mb-2 block">Secondary Email Id</label>
            <input
              name="email"
              type="text"
              autoComplete='off'
              className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500"
              placeholder="Secondary email"
              value={formData.secondaryEmail}
              onChange={(e) => dispatch(setFormData({ secondaryEmail: e.target.value }))}
            />
          </div>

          {isDashBoard ? (
            ''
          ) : (
            <div>
              <label className="text-sm mb-2 block">Password *</label>
              <input
                name="password"
                type="password"
                className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500"
                placeholder="Enter password"
                required
                value={formData.password}
                onChange={(e) => dispatch(setFormData({ password: e.target.value }))}
              />
            </div>
          )}
          {isDashBoard ? (
            ''
          ) : (
            <div>
              <label className="text-sm mb-2 block">Confirm Password *</label>
              <input
                name="cpassword"
                type="password"
                className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500"
                placeholder="confirm password"
                required
                value={formData.passwordConfirm}
                onChange={(e) => dispatch(setFormData({ passwordConfirm: e.target.value }))}
              />
            </div>
          )}

          <div>
            <label className="text-sm mb-2 block">Recording Secretary Email *</label>
            <input
              name="lname"
              type="email"
              className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500"
              placeholder="Enter Land Recorder's Email"
              required
              value={formData.secretaryEmail}
              onChange={(e) => dispatch(setFormData({ secretaryEmail: e.target.value }))}
            />
          </div>
          <div>
            <label className="text-sm mb-2 block">{`Coordinator's Email`}</label>
            <input
              name="lname"
              type="email"
              className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500"
              placeholder="Enter state Coordinater's"
              value={formData.coordinatorEmail}
              onChange={(e) => dispatch(setFormData({ coordinatorEmail: e.target.value }))}
            />
          </div>
        </div>

        <div className="!mt-10 flex justify-between">
          <button
            type="button"
            className=" shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-[#333] hover:bg-black focus:outline-none flex items-center gap-1 pointer-events-auto"
            onClick={() => dispatch(prevStep())}
          >
            <GrFormPrevious /> Previous
          </button>
          <button
            type="submit"
            className=" shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-[#333] hover:bg-black focus:outline-none flex items-center gap-1 pointer-events-auto"
          >
            Next <MdNavigateNext />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
