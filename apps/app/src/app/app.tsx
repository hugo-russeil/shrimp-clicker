import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/navbar/navbar';
import { useEffect } from 'react';

export function App() {
  const createCollection = () => {
    localStorage.setItem(
      'collection',
      JSON.stringify({
        pufferfish: false,
        cod: false,
        salmon: false,
        tropical_fish: false,
      })
    );
  };

  useEffect(() => {
    if (!localStorage.getItem('collection')) {
      createCollection();
    }
  }, []);

  return (
    <div>
      <Navbar
        routes={{ Accueil: '/', Qcm: '/qcm', Collection: '/collection' }}
      />
      <Outlet />
    </div>
  );
}

export default App;
