import { Navbar } from '../components/navbar/navbar';
import { Outlet } from 'react-router-dom';

export function App() {
  return (
    <div>
      <Navbar routes={{ "Accueil": '/', "A propos": '/' }}  />
      <Outlet />
    </div>
  );
}

export default App;
