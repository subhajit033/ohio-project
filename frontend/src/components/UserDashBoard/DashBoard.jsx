
import SideBar from './SideBar'
import Shop from './Shop'
import UploadedFiles from './UploadedFiles'

const DashBoard = () => {
  return (
    <div className='flex justify-around'>
        <SideBar />
        <UploadedFiles />
    </div>
  )
}

export default DashBoard