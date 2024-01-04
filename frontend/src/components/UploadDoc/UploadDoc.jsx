import { useEffect, useState } from 'react';
import ProgressBar from '@ramonak/react-progress-bar';

import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setToast } from '../../redux/Slices/toastSlice';
import Loader from '../Loader/Loader';

const UploadDoc = ({ name, tab }) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const { userId } = useParams();

  const uploadFile = async (e) => {
    const form = new FormData();
    form.append('upload_file', e.target.files[0]);
    form.append('name', name);
    form.append('fileType', tab);
    if (confirm('Do you want to upload this file')) {
      setLoading(true);
      try {
        const res = await axios({
          method: 'post',
          withCredentials: true,
          url: `/api/v1/upload/${userId}`,
          data: form
        });
        console.log(res);
        dispatch(setToast({ type: 'success', message: 'File Uploaded succesfully' }));
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
        dispatch(setToast({ type: 'error', message: 'Uploading failed' }));
      }
    } else {
      dispatch(setToast({ type: 'error', message: 'Uploading cancelled!!' }));
    }
  };

  return (
    <div className="font-[sans-serif] max-w-md ">
      {loading ? <Loader /> : ''}
      <label className="text-sm text-black mb-2 block">{name}</label>
      <input
        type="file"
        className="w-full text-black text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-2.5 file:px-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-black rounded mb-4"
        onChange={uploadFile}
      />
      <ProgressBar completed={0} bgColor="#5e83e6" labelColor="#ffffff" maxCompleted={100} />
    </div>
  );
};

export default UploadDoc;
