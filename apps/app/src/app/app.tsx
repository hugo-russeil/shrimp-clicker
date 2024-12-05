import { Outlet } from 'react-router-dom';
import { Container } from '@chakra-ui/react';
import { Navbar } from '../components/navbar/navbar';
import Home from '../components/home/Home';

export function App() {
  return (
    <Container margin={'0'} padding={'0'} maxWidth={'100%'}>
      <Outlet />
      <Navbar routes={{ Home: '/', About: '/' }} />
      <Home />
    </Container>
  );
}

export default App;
