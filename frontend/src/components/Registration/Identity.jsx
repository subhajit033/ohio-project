import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdNavigateNext } from 'react-icons/md';
import { setToast } from '../../redux/Slices/toastSlice';
import { setFormData, nextStep } from '../../redux/Slices/registration';
import axios from 'axios';
import Loader from '../Loader/Loader';
const Identity = ({ isDashBoard }) => {
  console.log('isDash ', isDashBoard);
  const dispatch = useDispatch();
  const formData = useSelector((store) => store.registration.formData);
  const[loading, setLoading] = useState(false);

  const [DOB, setDOB] = useState('');

  useEffect(() => {
    if (DOB) {
      calculateAgeFromDOB(DOB);
    }
  }, [DOB]);
  useEffect(() => {
    if (formData.sex) {
      document.getElementById('sex').value = formData.sex;
    }
  }, [formData.sex]);

  function calculateAgeFromDOB(dob) {
    const today = new Date();
    const birthDate = new Date(dob);

    let age = today.getFullYear() - birthDate.getFullYear();

    // Check if the birthday has occurred this year
    if (
      today.getMonth() < birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() &&
        today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    dispatch(setFormData({ personType: age >= 18 ? 'Adult' : 'Minor' }));
  }

  const uploadFile = async (file, fileType) => {
    try {
      setLoading(true);
      const upload = new FormData();
      upload.append('uploadPhoto', file);
      const res = await axios({
        method: 'post',
        withCredentials: true,
        url: '/api/v1/upload',
        data: upload,
      });
      console.log(res);
      setLoading(false);
      dispatch(
        setToast({ type: 'success', message: 'File uploaded succesfully' })
      );

      if (fileType === 'photo') {
        dispatch(setFormData({ photo: res.data.url }));
      } else if (fileType === 'seal') {
        dispatch(setFormData({ seal: res.data.url }));
      }

      console.log(res);
    } catch (error) {
      console.log(error);
      setLoading(false);
      dispatch(
        setToast({
          type: 'error',
          message: 'Error occour while file uploading',
        })
      );
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  }
  

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(nextStep());
  };

  return (
    <div className='max-w-4xl mx-auto font-[sans-serif] text-[#333] p-6'>
      {loading? <Loader />: ""}
      <form onSubmit={handleSubmit}>
        <div className='grid sm:grid-cols-2 gap-y-7 gap-x-12'>
          <div>
            <label className='text-sm mb-2 block'>First Name *</label>
            <input
              name='name'
              type='text'
              className='bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500'
              placeholder='First Name'
              value={formData.firstName}
              required
              onChange={(e) =>
                dispatch(setFormData({ firstName: e.target.value }))
              }
            />
          </div>
          <div>
            <label className='text-sm mb-2 block'>Middle Name</label>
            <input
              name='mname'
              type='text'
              className='bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500'
              placeholder='middle name'
              value={formData.middleName}
              onChange={(e) =>
                dispatch(setFormData({ middleName: e.target.value }))
              }
            />
          </div>
          <div>
            <label className='text-sm mb-2 block'>Last Name *</label>
            <input
              name='lname'
              type='text'
              className='bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500'
              placeholder='Last name'
              value={formData.lastName}
              required
              onChange={(e) =>
                dispatch(setFormData({ lastName: e.target.value }))
              }
            />
          </div>

          <div>
            <label className='text-sm mb-2 block'>Date of Birth *</label>
            <input
              name='cpassword'
              type='date'
              className='bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500'
              required
              placeholder='Enter DOB'
              value={isDashBoard? formatDate(formData.born): formData.born}
              onChange={(e) => {
                dispatch(setFormData({ born: e.target.value }));
                setDOB(e.target.value);
              }}
            />
          </div>

          <div>
            <label className='text-sm mb-2 block'>Sex *</label>
            <select
              className='bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500'
              name='sex'
              id='sex'
              required
              onChange={(e) => dispatch(setFormData({ sex: e.target.value }))}
            >
              <option>Select your gender</option>
              <option value='Male'>Man</option>
              <option value='Female'>Woman</option>
              <option value='Boy'>Boy</option>
              <option value='Girl'>Girl</option>
            </select>
          </div>
          <div>
            <label className='text-sm mb-2 block'>Adult/Minor</label>
            <input
              name='lname'
              type='text'
              className='bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500'
              placeholder='Adult/Minor'
              value={formData.personType}
              disabled
            />
          </div>
          <div>
            <label className='text-sm mb-2 block'>Place of Inhabitance</label>
            <input
              name='lname'
              type='text'
              className='bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500'
              placeholder='place of inhabitance'
              value={formData.placeOfInhabitance}
              onChange={(e) =>
                dispatch(setFormData({ placeOfInhabitance: e.target.value }))
              }
            />
          </div>
          {/* <div>
            <label className='text-sm mb-2 block'>Photo</label>
            <input
              name='lname'
              type='file'
              className='bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500'
              accept='image/*'
              placeholder='select photo'
              onChange={(e) => uploadFile(e.target.files[0], 'photo')}
            />
          </div>
          <div>
            <label className='text-sm mb-2 block'>Seal</label>
            <input
              name='lname'
              type='file'
              className='bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500'
              accept='image/*'
              placeholder='select image'
              onChange={(e) => uploadFile(e.target.files[0], 'seal')}
            />
          </div> */}
          <div className='form__group form__photo-upload'>
            <img
              id='user-avatar'
              className='form__user-photo'
              src={
                formData.photo
                  ? formData.photo
                  : 'https://icon-library.com/images/icon-user/icon-user-15.jpg'
              }
              alt='User photo'
            />
            <input
              className='form__upload'
              type='file'
              accept='image/'
              name='image'
              onChange={(e) => uploadFile(e.target.files[0], 'photo')}
              id='photo'
            />
            <label htmlFor='photo'>Choose user photo</label>
          </div>
          <div className='form__group form__photo-upload'>
            <img
              id='user-avatar'
              className='form__user-photo'
              src={
                formData.seal
                  ? formData.seal
                  : 'https://icon-library.com/images/icon-user/icon-user-15.jpg'
              }
              alt='User photo'
            />
            <input
              className='form__upload'
              type='file'
              accept='image/'
              name='image'
              onChange={(e) => uploadFile(e.target.files[0], 'seal')}
              id='photo'
            />
            <label htmlFor='photo'>Choose seal photo</label>
          </div>
        </div>
        
          <div className='!mt-10 flex justify-end'>
            <button
              type='submit'
              className=' shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-[#333] hover:bg-black focus:outline-none flex items-center gap-1'
            >
              Next <MdNavigateNext />
            </button>
          </div>
        
      </form>
    </div>
  );
};

export default Identity;
