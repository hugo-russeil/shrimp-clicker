import { Grid } from '@chakra-ui/react';
import Waves from './../Wave';
import TrailWithLines from './../TrailWithLines';
import { CheckCircle } from 'lucide-react';
import { Container } from '@chakra-ui/react';
import { OceanProblems } from '../../data/data';

const getRandomFacts = (data, count) => {
  // Shuffle the array
  const shuffled = [...data].sort(() => Math.random() - 0.5);
  // Slice the first `count` items
  const selected = shuffled.slice(0, count);
  // Sort the selected items by `id`
  return selected.sort((a, b) => a.id - b.id);
};

const HomePageIntroduction = () => {
  // Get 7 random problems while maintaining order
  const selectedFacts = getRandomFacts(OceanProblems, 7);

  const homeContent = selectedFacts.map((fact) => ({
    title: fact.nom,
    description: fact.description,
  }));

  return (
    <Container
      margin={'0'}
      padding={'0'}
      maxWidth={'100%'}
      backgroundColor={'#D3D3D3'}
    >
      <Waves
        className={'h-8 shadow-lg'}
        colors={[
          'fill-[#DEDEDE]',
          'fill-[#DEDEDE]',
          'fill-[#ABABAB]',
          'fill-white',
        ]}
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
