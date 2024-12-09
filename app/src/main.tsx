import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import { Provider } from './components/ui/provider';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Clicker from './components/Clicker';

import Collection from './components/collection/Collection';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Clicker />,
      },
      {
        path: '/clicker',
        element: <Clicker />,
      },
      {
        path: '/collection',
        element: <Collection />,
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
