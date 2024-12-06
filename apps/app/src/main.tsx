import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import { Provider } from './components/ui/provider';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './app/homepage';

import Clicker from './components/Clicker';
import QcmPage from './components/qcm/qcmPage';

import Collection from './components/collection/Collection';

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
        path: '/clicker',
        element: <Clicker />,
      },
      {
        path: '/collection',
        element: <Collection />,
      },
      {
        path: '/qcm',
        element: <QcmPage />,
      },
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
