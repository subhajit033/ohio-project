import { statusDocument, notices, incidentReport, landPatent, privateDocs } from '../../utils/const';
import { useState, useEffect } from 'react';
import FileIcon from './FileIcon';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UploadedFiles = ({ viewDocs, uploadTab }) => {
  // const [docUploaded, setDocUploaded] = useState([])
  // const tab = useSelector((store) => store.tabNav.tab);
  // const { userId } = useParams();
  // console.log(userId);
  // const docs = useSelector((store) => store.registration.docUploaded);
  // useEffect(()=>{
  //   setDocUploaded(docs)

  // }, [docs])

  // const getDocsUser = async () => {
  //   const res = await axios.get(`/api/v1/users/getDocs/${userId}`, { withCredentials: true });
  //   console.log(res);
  //   setDocUploaded(res.data.data.data.documents);
  // };
  // if (viewDocs) {
  //   getDocsUser();
  // }
  // if (!docUploaded) {
  //   return <h1>No documnets...</h1>;
  // }
  // console.log(docUploaded);
  const [docUploaded, setDocUploaded] = useState([]);
  // let tab = useSelector((store) => store.tabNav.tab);
  // useEffect(()=>{
  //   tab = uploadTab;

  // }, [uploadTab])
  const reduxTab = useSelector((store) => store.tabNav.tab);
  const [tab, setTab] = useState(reduxTab);

  useEffect(() => {
    // If viewDocs is true, use uploadTab, otherwise use the tab from the Redux store
    setTab(viewDocs ? uploadTab : reduxTab);
  }, [viewDocs, uploadTab, reduxTab]);

  const { userId } = useParams();
  const docs = useSelector((store) => store.registration.docUploaded);

  useEffect(() => {
    setDocUploaded(docs);
  }, [docs]);

  useEffect(() => {
    let isMounted = true;

    const getDocsUser = async () => {
      if (viewDocs && userId) {
        try {
          const res = await axios.get(`/api/v1/users/getDocs/${userId}`, { withCredentials: true });
          if (isMounted) {
            setDocUploaded(res.data.data.data.documents);
          }
        } catch (error) {
          console.error('Error fetching documents', error);
          // Handle error appropriately
        }
      }
    };

    getDocsUser();

    return () => {
      isMounted = false;
    };
  }, [viewDocs, userId]);

  console.log(tab);

  return (
    <>
      <div className=" flex-wrap gap-4 justify-center items-start flex-1 py-4 px-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-10 gap-4">
          {tab === 'Status' &&
            docUploaded
              .filter((doc) => doc.fileType === tab)
              .map((doc) => {
                return <FileIcon key={doc._id} {...doc} />;
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
