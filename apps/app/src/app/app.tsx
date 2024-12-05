import { Outlet } from 'react-router-dom';
import { Container } from '@chakra-ui/react';
import { Grid } from '@chakra-ui/react';
import Waves from './Wave';
import Trail from './Trail';
import TrailWithLines from './TrailWithLines';
import { CheckCircle } from 'lucide-react';
import { Navbar } from '../components/navbar/navbar';

export function App() {
  const content = [
    <Container>
      <p> Test 1 </p>
    </Container>,
    <Container>
      <p> Test 2 </p>
    </Container>,
    <Container>
      <p> Test 3 </p>
    </Container>,
    <Container>
      <p> Test 4 </p>
    </Container>,
    <Container>
      <p> Test 5 </p>
    </Container>,
    <Container>
      <p> Test 6 </p>
    </Container>,
    <Container>
      <p> Test 7 </p>
    </Container>,
    <Container>
      <p> Test 8 </p>
    </Container>,
    <Container>
      <p> Test 9 </p>
    </Container>,
    <Container>
      <p> Test 10 </p>
    </Container>,
  ];
  return (
    <Container margin={'0'} padding={'0'} maxWidth={'100%'}>
      <Navbar routes={{ Home: '/', About: '/' }} />
      <Outlet />
      <Container
        margin={'0'}
        padding={'0'}
        maxWidth={'100%'}
        backgroundColor={'#D3D3D3'}
      >
        <Waves
          className={'h-8'}
          colors={['fill-white', 'fill-white', 'fill-white', 'fill-white']}
          backgroundColor={'white'}
          reversed={true}
        />
        <Container marginTop={'5%'}>
          <Grid gap={24} textAlign={'center'} color={'black'}>
            <h1> Titre </h1>
            <p> Introduction </p>
            <TrailWithLines
              steps={content.map((c, index) => ({
                icon: <CheckCircle />,
                isCompleted: false,
                onClick: () => {
                  return;
                },
                content: c,
              }))}
            />
          </Grid>
        </Container>
      </Container>
    </Container>
  );
}

export default App;
