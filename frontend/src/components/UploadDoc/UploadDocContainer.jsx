import UploadDoc from './UploadDoc';
import {
  statusDocument,
  notices,
  landPatent,
  privateDocs,
  incidentReport,
} from '../../utils/const';

const UploadDocContainer = ({ tab }) => {
  return (
    <div className='max-w-4xl mx-auto font-[sans-serif] text-[#333] p-6'>
      <form>
        <div className='grid sm:grid-cols-2 gap-y-7 gap-x-12'>
          {tab === '#Status' &&
            statusDocument.map((name) => {
              return <UploadDoc key={name} name={name} />;
            })}
          {tab === '#Notices' &&
            notices.map((name) => {
              return <UploadDoc key={name} name={name} />;
            })}
          {tab === '#Land' &&
            landPatent.map((name) => {
              return <UploadDoc key={name} name={name} />;
            })}

          {tab === '#Incident Report' &&
            incidentReport.map((name) => {
              return <UploadDoc key={name} name={name} />;
            })}

          {tab === '#Private' &&
            privateDocs.map((name) => {
              return <UploadDoc key={name} name={name} />;
            })}
        </div>
      </form>
    </div>
  );
};

export default UploadDocContainer;
