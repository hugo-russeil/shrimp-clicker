import { Grid } from '@chakra-ui/react';
import Waves from './../Wave';
import TrailWithLines from './../TrailWithLines';
import { CheckCircle } from 'lucide-react';
import { Container } from '@chakra-ui/react';

const HomePageIntroduction = () => {
  const homeContent = [
    {
      title: 'Test1',
      description: 'TODO',
    },
    {
      title: 'Test2',
      description: 'TODO',
    },
    {
      title: 'Test3',
      description: 'TODO',
    },
    {
      title: 'Test4',
      description: 'TODO',
    },
    {
      title: 'Test5',
      description: 'TODO',
    },
    {
      title: 'Test6',
      description: 'TODO',
    },
    {
      title: 'Test7',
      description: 'TODO',
    },
  ];

  return (
    <Container
      margin={'0'}
      padding={'0'}
      maxWidth={'100%'}
      backgroundColor={'#D3D3D3'}
    >
      <Waves
        className={'h-8 shadow-lg'}
        colors={['fill-[#DEDEDE]', 'fill-[#DEDEDE]', 'fill-[#ABABAB]', 'fill-white']}
        backgroundColor={'white'}
        reversed={true}
      />
      <Container marginTop={'5%'}>
        <Grid gap={24} textAlign={'center'} color={'black'}>
          <h1> Titre </h1>
          <p> Introduction </p>
          <TrailWithLines
            steps={homeContent.map((content, index) => ({
              icon: <CheckCircle />,
              isCompleted: false,
              onClick: () => {
                return;
              },
              content: content,
            }))}
          />
        </Grid>
      </Container>
    </Container>
  );
};

export default HomePageIntroduction;
