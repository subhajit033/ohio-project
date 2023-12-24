import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Verifaication from './components/Verification/Verifaication';
import DashBoard from './components/UserDashBoard/DashBoard';
import Layout from './Layout/Layout';
import Home from './components/Home/Home';
import UploadedFiles from './components/UserDashBoard/UploadedFiles';
import UserStatus from './components/RecSecDashBoard/UserStatus';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DashBoardTable from './components/RecSecDashBoard/DashBoardTable';
import UserVerification from './components/RecSecDashBoard/UserVerification';
import Approval from './components/Registration/Approval';
import Shop from './components/UserDashBoard/Shop';
import Officials from './components/UserDashBoard/Officials';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

const App = () => {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: '/verification',
        element: <Verifaication />,
      },
      {
        path: '/signup',
        element: <Registration />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/approval',
        element: <Approval />,
      },
      {
        path: '/dashboard',
        element: <ProtectedRoute />,
        children: [
          {
            element: <DashBoard />,
            children: [
              {
                path: '',
                element: <Officials />,
              },
              {
                path: 'docs',
                element: <UploadedFiles />,
              },
              {
                path: 'shop',
                element: <Shop />,
              },
              
              {
                path: 'details',
                element: (
                  <div className=' flex-wrap gap-4 justify-center h-[89vh] overflow-auto items-start border-2 border-red-600 flex-1 py-4 px-4'>
                    <Registration isDashborad={true} />
                  </div>
                ),
              },
              {
                path: 'admin',
                element: <UserStatus />,
              },
              {
                path: 'admin/userStatus',
                element: <DashBoardTable />,
              },
              {
                path: 'admin/verifyuser',
                element: <UserVerification />,
              },
            ],
          },
        ],
      },
    ],
  },
]);
export default App;
