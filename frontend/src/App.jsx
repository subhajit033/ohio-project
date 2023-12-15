import Login from './components/Login/Login';
import Identity from './components/Registration/Identity';
import Verifaication from './components/Verification/Verifaication';
import UploadNav from './components/UploadNav/UploadNav';
import Layout from './Layout/Layout';
import Home from './components/Home/Home';
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
        element: <Home />,
      },
      {
        path: '/verification',
        element: <Verifaication />,
      },
      {
        path: '/signup',
        element: <Identity />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
]);
export default App;
