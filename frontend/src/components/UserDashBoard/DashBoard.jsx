
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'
import UploadedFiles from './UploadedFiles'

const DashBoard = () => {
  return (
    <div className='flex justify-around'>
        <SideBar />
        <Outlet />
    </div>
  )
}

export default DashBoard