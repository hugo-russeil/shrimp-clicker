import ConfettiExplosion from 'react-confetti-explosion';
import { Image } from '@chakra-ui/react';
import { addFish } from './collection/Collection';
import { useEffect, useState } from 'react';

const Ocean = () => {

  const [isExploding, setIsExploding] = useState(false);
  const [height, setHeight] = useState(0);
  const windowHeight = window.innerHeight;
  const navbar = document.getElementById('navbar');
  useEffect(() => {
    const navbarHeight = navbar?.style.height ? parseInt(navbar.style.height) : 0;
    setHeight(windowHeight - navbarHeight);
  }, [navbar, windowHeight]);

  return (
    <div className="w-full flex justify-center items-center overflow-y-hidden" style={{ height: `${height}px`, backgroundImage: 'url(/ocean.webp)', backgroundSize: 'cover' }}>
      <div
        id="poisson"
        className="w-20 h-20"
      >
        {isExploding && <ConfettiExplosion />}
        <Image
          src={'/tropical_fish.png'}
          alt="Image de poisson"
          imageRendering={'pixelated'}
          width={'100px'}
          height={'100px'}
          opacity={isExploding ? 0 : 1}
          onClick={() => {
            setIsExploding(true);
            addFish('tropical_fish');
          }}
        />
      </div>
    </div>
  );
}

export default Ocean;
