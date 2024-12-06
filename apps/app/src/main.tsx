import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import { Provider } from './components/ui/provider';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './app/homepage';
import QcmPage from './components/qcm/qcmPage';
import HearthComparison from './components/comparison/HearthComparison';
import LungComparison from './components/comparison/LungComparison';
import StomachComparison from './components/comparison/StomachComparison';
import LiverComparison from './components/comparison/LiverComparison';
import SkinComparison from './components/comparison/SkinComparison';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/qcm',
        element: <QcmPage />,
      },
      {
        path: '/comparison/lungs',
        element: <LungComparison/>
      },
      {
        path: '/comparison/hearth',
        element: <HearthComparison/>
      },
      {
        path: '/comparison/stomach',
        element: <StomachComparison/>
      },
      {
        path: '/comparison/liver',
        element: <LiverComparison/>
      },
      {
        path: '/comparison/skin',
        element: <SkinComparison/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
