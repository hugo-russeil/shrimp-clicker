import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/navbar/navbar';

export function App() {
  return (
    <div>
      <Navbar routes={{ "Accueil": '/', "A propos": '/' }}  />
      <Outlet />
    </div>
  );
}

export default App;
