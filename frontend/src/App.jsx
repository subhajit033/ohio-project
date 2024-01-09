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
import Otp from './components/RecSecDashBoard/Otp';
import UnVerifedEmail from './components/AlertPages/UnVerifedEmail';
import ForgotPass from './components/Pasword/ForgotPass';
import ResetPass from './components/Pasword/ResetPass';

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
        element: <Home />
      },
      {
        path: '/verification',
        element: <Verifaication />
      },
      {
        path: '/signup',
        element: <Registration isDashBoard={false} />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/approval',
        element: <Approval />
      },
      {
        path: '/unverifiedEmail',
        element: <UnVerifedEmail />
      },
      {
        path: '/forgot-password',
        element: <ForgotPass />
      },
      {
        path: '/reset-password/:resetToken',
        element: <ResetPass />
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
                element: <Officials />
              },
              {
                path: 'docs',
                element: <UploadedFiles />
              },
              {
                path: 'shop',
                element: <Shop />
              },

              {
                path: 'details',
                element: (
                  <div className=" flex-wrap gap-4 justify-center h-[89vh] overflow-auto items-start border-2 border-red-600 flex-1 py-4 px-4">
                    <Registration isDashBoard={true} me={true} viewUser={false} />
                  </div>
                )
              },
              {
                path: 'admin',
                element: <UserStatus mainAdmin={false} />
              },
              {
                path: 'admin/userStatus/unapproved',
                element: <DashBoardTable approvedUsers={false} mainAdmin={false} />
              },
              {
                path: 'admin/userStatus/approved',
                element: <DashBoardTable approvedUsers={true} mainAdmin={false} />
              },
              {
                path: 'admin/userStatus/approved/viewDocs/:userId',
                element: <UserVerification approvedUsers={true} viewDocs={true} />
              },
              {
                path: 'admin/userStatus/approved/uploadDocs/:userId',
                element: <UserVerification approvedUsers={true} viewDocs={false} />
              },
              {
                path: 'admin/viewuser/:userId',
                element: (
                  <div className=" flex-wrap gap-4 justify-center h-[89vh] overflow-auto items-start border-2 border-red-600 flex-1 py-4 px-4">
                    <Registration isDashBoard={true} viewUser={true} me={false} />
                  </div>
                )
              },
              {
                path: 'admin/verifyuser/:userId',
                element: <UserVerification approvedUsers={false} viewDocs={false} />
              },
              {
                path: 'admin/approveUser/:userId',
                element: <Otp />
              },
              //admin path
              {
                path: 'admin1',
                element: <UserStatus mainAdmin={true} />
              },
              {
                path: 'admin1/users',
                element: <DashBoardTable mainAdmin={true} />
              },
              
              
            ]
          }
        ]
      }
    ]
  }
]);
export default App;
