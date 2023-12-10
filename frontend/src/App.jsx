import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Verifaication from './components/Verification/Verifaication';
import UploadNav from './components/UploadNav/UploadNav';
import Layout from './Layout/Layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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
        element: <UploadNav />,
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
    ],
  },
]);
export default App;
