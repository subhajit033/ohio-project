import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Verifaication from './components/Verification/Verifaication';
import DashBoard from './components/UserDashBoard/DashBoard';
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
        element: <Registration />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/dashboard',
        element: <DashBoard />,
      },

    ],
  },
]);
export default App;
