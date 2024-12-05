import { Outlet } from 'react-router-dom';
import { ExerciseQcm, jsonDefault } from '../components/qcm/exerciseqcm';

export function App() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default App;
