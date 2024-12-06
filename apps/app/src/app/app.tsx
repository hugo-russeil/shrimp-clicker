import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/navbar/navbar';

export function App() {
  return (
    <div>
      <Navbar routes={{ Accueil: '/', Qcm: '/qcm' }} />
      <Outlet />
    </div>
  );
}

export default App;
