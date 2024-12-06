import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/navbar/navbar';
import { useEffect, useState } from 'react';
import { useKonami } from 'react-konami-code';
import ConfettiExplosion from 'react-confetti-explosion';
import { Image } from '@chakra-ui/react';
import { addFish } from '../components/collection/Collection';

export function App() {

  const onKonamiCode = () => {
    moveImage();
    setRotate('360deg');
  }

  useKonami(onKonamiCode);

  const createCollection = () => {
    localStorage.setItem(
      'collection',
      JSON.stringify({
        pufferfish: false,
        cod: false,
        salmon: false,
        tropical_fish: false,
      })
    );
  };

  useEffect(() => {
    if (!localStorage.getItem('collection')) {
      createCollection();
    }
  }, []);

  const [position, setPosition] = useState({ top: '80%', left: '110%' });
  const [rotate, setRotate] = useState('30deg');
  const [isExploding, setIsExploding] = useState(false);
  const [display, setDisplay] = useState('none');

  const moveImage = () => {
    const position =  window.scrollY;
    const windowHeight = window.innerHeight;
    const top = position + windowHeight / 2;
    console.log(top);
    setDisplay('block');
    setTimeout(() => {
      setPosition({
        // en fonction de la ou est l'utilisateur
        top: `${top}px`,
        left: '48%',
      });
    }, 1000);
  };

  return (
    <div>
      <Navbar
        routes={{ Accueil: '/', Qcm: '/qcm', Collection: '/collection', Clicker: '/clicker' }}
      />
      <Outlet />
      <div>
        <div
          id="poisson"
          style={{
            top: position.top,
            left: position.left,
            transition: 'all 3s',
            rotate: rotate,
            display: display
          }}
          className="w-20 h-20 absolute"
        >
          {isExploding && <ConfettiExplosion />}
          <Image
            src={'/cod.png'}
            alt="Image de poisson"
            imageRendering={'pixelated'}
            width={'100px'}
            height={'100px'}
            opacity={isExploding ? 0 : 1}
            onClick={() => {
              setIsExploding(true);
              addFish('cod');
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
