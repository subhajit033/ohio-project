import {
  statusDocument,
  notices,
  incidentReport,
  landPatent,
  privateDocs,
} from '../../utils/const';
import FileIcon from './FileIcon';
import { useSelector } from 'react-redux';

const UploadedFiles = () => {
  const tab = useSelector((store) => store.tabNav.tab);
  const docUploaded = useSelector((store) => store.registration.docUploaded);
  if (!docUploaded) {
    return <h1>No documnets...</h1>;
  }

  return (
    <>
      <div className=' flex-wrap gap-4 justify-center items-start border-2 border-red-600 flex-1 py-4 px-4'>
        <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-10 gap-4'>
          {tab === 'Status' &&
            docUploaded
              .filter((doc) => doc.fileType === tab)
              .map((doc) => {
                return <FileIcon key={doc._id}  {...doc} />;
              })}

          {tab === 'Notices' &&
            docUploaded
              .filter((doc) => doc.fileType === tab)
              .map((doc) => {
                return <FileIcon key={doc._id} {...doc} />;
              })}
          {tab === 'Land' &&
            docUploaded
              .filter((doc) => doc.fileType === tab)
              .map((doc) => {
                return <FileIcon key={doc._id} {...doc} />;
              })}
          {tab === 'Incident Report' &&
            docUploaded
              .filter((doc) => doc.fileType === tab)
              .map((doc) => {
                return <FileIcon key={doc._id} {...doc} />;
              })}
          {tab === 'Private' &&
            docUploaded
              .filter((doc) => doc.fileType === tab)
              .map((doc) => {
                return <FileIcon key={doc._id} {...doc} />;
              })}
          {/* 'Personal Details', 'Contact', 'Membership' */}
        </div>
      </div>
    </>
  );
};

export default UploadedFiles;
