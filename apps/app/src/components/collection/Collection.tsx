import { useEffect, useState } from 'react';
import { Container, SimpleGrid } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
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
    <Container
      margin={'0'}
      padding={'0'}
      maxWidth={'100%'}
      minHeight={'100vh'}
      backgroundColor={'#D3D3D3'}
    >
      <h1 className="text-black text-center pt-8 text-2xl font-bold">
        {nbFishs} / 4
      </h1>
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
      <SimpleGrid
        paddingTop={'5%'}
        justifyItems={'center'}
        columns={[2, 3, 4]}
        spacing={10}
      >
        {fishs.map((fish: { name: string }, index) => {
          return (
            <div
              key={index}
              className="flex justify-center items-center bg-white rounded-lg shadow-md"
            >
              <Image
                imageRendering={'crisp-edges'}
                width={['150px', '250px', '350px']}
                height={['150px', '250px', '350px']}
                src={fish.name + '.png'}
                border={'1px solid black'}
                rounded={'15px'}
                alt={`Fish ${index + 1}`}
              />
            </div>
          );
        })}
      </SimpleGrid>
    </Container>
  );
};

export default Collection;
