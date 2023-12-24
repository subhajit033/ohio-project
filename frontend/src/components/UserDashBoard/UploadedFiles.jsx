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

  return (
    <>
      <div className=' flex-wrap gap-4 justify-center items-start border-2 border-red-600 flex-1 py-4 px-4'>
        <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-10 gap-4'>
          {tab === 'Status' &&
            statusDocument.map((name, i) => {
              return <FileIcon key={i} name={name} />;
            })}

          {tab === 'Notices' &&
            notices.map((name, i) => {
              return <FileIcon key={i} name={name} />;
            })}
          {tab === 'Land' &&
            landPatent.map((name, i) => {
              return <FileIcon key={i} name={name} />;
            })}
          {tab === 'Incident Report' &&
            incidentReport.map((name, i) => {
              return <FileIcon key={i} name={name} />;
            })}
          {tab === 'Private' &&
            privateDocs.map((name, i) => {
              return <FileIcon key={i} name={name} />;
            })}
          {/* 'Personal Details', 'Contact', 'Membership' */}
        </div>
        
        
      </div>
    </>
  );
};

export default UploadedFiles;
