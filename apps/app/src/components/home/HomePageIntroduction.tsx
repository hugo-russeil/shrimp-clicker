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
          <h1> L’Océan : Le Cœur Battant de Notre Planète </h1>
          <p> L’océan est l’essence même de la vie sur Terre. À la manière d’un corps humain, 
            il régule les processus vitaux qui garantissent la santé de notre planète. 
            De la circulation des courants marins à la capture de CO2, l’océan agit comme un cœur, des poumons, 
            et bien plus encore. Pourtant, il est aujourd’hui menacé par la pollution et le changement climatique. 
            À travers cette introduction, explorons les fascinantes connexions entre l’océan et le corps humain 
            pour mieux comprendre pourquoi sa préservation est cruciale pour l’avenir de la vie sur Terre.
          </p>
          <p>
            La page suivante met en lumière certains des défis les plus urgents auxquels nos océans sont confrontés aujourd’hui. 
            Chaque fait sélectionné met en évidence des problèmes spécifiques et des opportunités de solution qui nécessitent 
            notre attention collective. Découvrez les réalités que l’océan endure et les actions que nous pouvons entreprendre 
            pour garantir sa survie, et donc la nôtre.
          </p>
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
