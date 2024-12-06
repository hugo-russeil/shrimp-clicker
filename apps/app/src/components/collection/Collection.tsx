import { useEffect, useState } from 'react';
import { Container, SimpleGrid } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import Waves from '../utils/Waves';
import ConfettiExplosion from 'react-confetti-explosion';

export const addFish = (fishName: string) => {
  const listFishs = JSON.parse(localStorage.getItem('collection')) || [];
  listFishs.push({ name: fishName });
  localStorage.setItem('collection', JSON.stringify(listFishs));
};

const Collection = () => {
  const [fishs, setFishs] = useState([]);
  const [nbFishs, setNbFishs] = useState(0);

  useEffect(() => {
    const listFishs = JSON.parse(localStorage.getItem('collection') || '[]');
    setNbFishs(listFishs.length || 0);
    setFishs(listFishs || []);
  }, []);

  return (
    /* TODO Changer le height ici */
    <Container
      margin={'0'}
      padding={'0'}
      maxWidth={'100%'}
      height={'899px'}
      backgroundColor={'#D3D3D3'}
    >
      <h1 className="text-black text-center pt-16"> {nbFishs} / 4 </h1>
      <SimpleGrid
        backgroundColor={'#D3D3D3'}
        paddingTop={'5%'}
        justifyItems={'center'}
        columns={4}
        gap="80px"
      >
        {nbFishs === 4 && (
            <ConfettiExplosion />
        )}
        {nbFishs === 4 && (
            <ConfettiExplosion />
        )}
        {nbFishs === 4 && (
            <ConfettiExplosion />
        )}
        {nbFishs === 4 && (
            <ConfettiExplosion />
        )}
        {fishs.map((fish: { name: string }, index) => {
          return (
            <div key={index}>
              <Image
                imageRendering={'crisp-edges'}
                width={'350px'}
                height={'350px'}
                src={fish.name + '.png'}
                border={'1px solid black'}
                rounded={'15px'}
                verticalAlign={'center'}
              />
            </div>
          );
        })}
      </SimpleGrid>
    </Container>
  );
};

export default Collection;
