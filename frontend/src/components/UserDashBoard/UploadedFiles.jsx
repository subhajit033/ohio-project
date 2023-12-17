import {statusDocument, notices, incidentReport, landPatent, privateDocs} from '../../utils/const'
import FileIcon from './FileIcon'
import { useSelector } from 'react-redux'
const UploadedFiles = () => {
    const tab = useSelector((store)=> store.tabNav.tab);

  return (
    <div className='flex flex-wrap gap-4 justify-center items-start border-2 border-red-600 flex-1 py-4 px-4'>
        {tab === 'Status' && statusDocument.map((name, i)=>{
            return <FileIcon  key={i} name={name}/>
        })}

        {tab === 'Notices' && notices.map((name, i)=>{
            return <FileIcon  key={i} name={name}/>
        })}
        {tab === 'Land' && landPatent.map((name, i)=>{
            return <FileIcon  key={i} name={name}/>
        })}
        {tab === 'Incident Report' && incidentReport.map((name, i)=>{
            return <FileIcon  key={i} name={name}/>
        })}
        {tab === 'Private' && privateDocs.map((name, i)=>{
            return <FileIcon  key={i} name={name}/>
        })}
        
    </div>
  )
}

export default UploadedFiles