import Waves from './Wave';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { CheckCheck, Sprout, X } from 'lucide-react';
import { useInterval } from 'react-interval-hook';
import { Image } from '@chakra-ui/react';
import ConfettiExplosion from 'react-confetti-explosion';
import { addFish } from './collection/Collection';

type AutoclickerUpgrade = {
  name: string;
  cost: number;
  description: string;
  ShrimpPerSec: number;
};

interface FinalManualClickUpgrade {
  ShrimpPerClick: number;
}

interface NormalManualClickUpgrade {
  onUnlock: () => void;
}

type ManualClickUpgrade = {
  name: string;
  cost: number;
  description: string;
} & (NormalManualClickUpgrade | FinalManualClickUpgrade);

const ShrimpConfetti = ({ x, y }: { x: number; y: number }) => {
  return (
    <img
      src={'shrimp.png'}
      alt="Shrimp"
      className="absolute w-8 h-8 animate-shrimp-confetti"
      style={{
        top: `${y}px`,
        left: `${x}px`,
      }}
    />
  );
};


const AUTOCLICK_UPGRADES: Array<AutoclickerUpgrade> = [
  {
    name: 'Remous légers',
    cost: 10,
    description:
      "De petites perturbations de l'eau stimulent légèrement la production de shrimp.",
    ShrimpPerSec: 1,
  },
  {
    name: 'Courants côtiers',
    cost: 100,
    description:
      'Des courants réguliers apportent un flux continu de nutriments.',
    ShrimpPerSec: 5,
  },
  {
    name: 'Eaux enrichies',
    cost: 10_000,
    description:
      'Des eaux naturellement riches en éléments nutritifs augmentent la production.',
    ShrimpPerSec: 15,
  },
  {
    name: 'Remontées profondes',
    cost: 1_000_000,
    description:
      'Des remontées d’eaux froides et riches en minéraux boostent le développement du shrimp',
    ShrimpPerSec: 100,
  },
  {
    name: 'Récif nourricier',
    cost: 10_000_000,
    description:
      'Un récif qui soutient un écosystème florissant augmente grandement la production.',
    ShrimpPerSec: 10_000,
  },
  {
    name: 'Écosystème optimal',
    cost: 1_000_000_000,
    description:
      'Un environnement parfaitement équilibré et optimisé assure une production maximale.',
    ShrimpPerSec: 1_000_000,
  },
];

export default function Clicker() {
  const [isSquishing, setIsSquishing] = useState(false);
  const [confetti, setConfetti] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const handleShrimpClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    setIsSquishing(true);
    manualClickHandler();
  
    // Get bounding box of the main shrimp
    const container = e.currentTarget.getBoundingClientRect();
    const randomOffsetX = Math.random() * 100 - 50; // Random value between -50 and 50
    const randomOffsetY = Math.random() * 100 - 50; // Random value between -50 and 50
  
    const newConfetti = {
      id: Date.now(),
      x: container.left + container.width / 2 + randomOffsetX, // Center of shrimp + offset
      y: container.top + container.height / 2 + randomOffsetY, // Center of shrimp + offset
    };
  
    setConfetti((prev) => [...prev, newConfetti]);
  
    setTimeout(() => {
      setIsSquishing(false);
    }, 1000); // Reset squish after 1s
  
    // Remove confetti after animation
    setTimeout(() => {
      setConfetti((prev) => prev.filter((item) => item.id !== newConfetti.id));
    }, 2000); // Match this with the CSS animation duration
  };
  


  const MANUAL_UPGRADES: Array<ManualClickUpgrade> = [
    {
      name: 'Filet à shrimp',
      cost: 10,
      description:
        'Un filet simple permet de capturer un peu de shrimp à chaque clic',
      ShrimpPerClick: 1,
    },
    {
      name: 'Pompe à main',
      cost: 100,
      description:
        'Une pompe améliore la capacité de collecte manuelle par clic',
      ShrimpPerClick: 5,
    },
    {
      name: 'Collecteur filtrant',
      cost: 10_000,
      description:
        'Un outil filtrant permet de récolter une quantité accrue de shrimp.',
      ShrimpPerClick: 15,
    },
    {
      name: 'Filet automatisé',
      cost: 100_000,
      description:
        "Un filet motorisé augmente considérablement l'efficacité de la récolte.",
      ShrimpPerClick: 15,
    },
    {
      name: 'Station flottante',
      cost: 1_000_000,
      description:
        'Une station semi-automatisée maximise le shrimp récolté par action.',
      ShrimpPerClick: 15,
    },
    {
      name: 'Système de collecte avancé',
      cost: 100_000_000,
      description:
        'Un équipement de pointe permet une récolte optimale à chaque clic.',
      ShrimpPerClick: 15,
    },
    {
      name: 'Surpriiiise !',
      cost: 1_000_000_000,
      description: "Et non, pas d'indice !",
      onUnlock: () => {
        moveImage();
      },
    },
  ];

  const [totalCollectedShrimps, setTotalCollectedShrimps] = useState(0);
  const [collectedShrimps, setCollectedShrimps] = useState(0);

  const [unlockedAutoclickUpgrades, setUnlockedAutoclickUpgrades] = useState<
    Array<string>
  >([]);
  const [unlockedManualUpgrades, setUnlockedManualUpgrades] = useState<
    Array<string>
  >([]);

  const [position, setPosition] = useState({ top: '80%', left: '110%' });
  const [rotate, setRotate] = useState('30deg');
  const [isExploding, setIsExploding] = useState(false);

  const moveImage = () => {
    setPosition({
      top: '80%',
      left: '48%',
    });
  };

  const increaseShrimp = (quantity = 1) => {
    setCollectedShrimps(collectedShrimps + quantity);
    setTotalCollectedShrimps(totalCollectedShrimps + quantity);
  };

  const tryBuyAutoclickUpgrades = (upgrade: AutoclickerUpgrade) => {
    if (collectedShrimps >= upgrade.cost) {
      setCollectedShrimps(collectedShrimps - upgrade.cost);
      setUnlockedAutoclickUpgrades([
        ...unlockedAutoclickUpgrades,
        upgrade.name,
      ]);
    }
  };

  const tryBuyManualUpgrades = (upgrade: ManualClickUpgrade) => {
    if (collectedShrimps >= upgrade.cost) {
      setCollectedShrimps(collectedShrimps - upgrade.cost);
      setUnlockedManualUpgrades([...unlockedManualUpgrades, upgrade.name]);
    }
  };

  const manualClickHandler = () => {
    const ShrimpToAdd = MANUAL_UPGRADES.filter(
      (upgrade) => unlockedManualUpgrades.includes(upgrade.name)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
    ).reduce((acc, upgrade) => acc + (upgrade.ShrimpPerClick ?? 0), 1);

    increaseShrimp(ShrimpToAdd);
  };

  useInterval(() => {
    const ShrimpToAdd = AUTOCLICK_UPGRADES.filter((upgrade) =>
      unlockedAutoclickUpgrades.includes(upgrade.name)
    ).reduce((acc, upgrade) => acc + upgrade.ShrimpPerSec, 0);
    increaseShrimp(ShrimpToAdd);
  }, 1_000);

  return (
    <div className={'bg-[#D3D3D3] min-h-[100vh] text-black'}>
      <div>
        <div
          id="poisson"
          style={{
            top: position.top,
            left: position.left,
            transition: 'all 3s',
            rotate: rotate,
          }}
          className="w-20 h-20 absolute"
        >
          {isExploding && <ConfettiExplosion />}
          <Image
            src={'/salmon.png'}
            alt="Image de poisson"
            imageRendering={'pixelated'}
            width={'100px'}
            height={'100px'}
            opacity={isExploding ? 0 : 1}
            onClick={() => {
              setIsExploding(true);
              addFish('salmon');
            }}
          />
        </div>
      </div>
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
      <h1
        className={'text-2xl w-full text-center my-12 text-black font-medium'}
      >
        Shrimp Clicker!
      </h1>
      <div className={'flex flex-col lg:flex-row w-[80%] mx-auto'}>
        <div className={'grow'}>
          <ol className={'w-full items-center'}>
            {MANUAL_UPGRADES.map((upgrade, index) => {
              const hasUnlocked = unlockedManualUpgrades.includes(upgrade.name);

              return (
                <li key={index} className={'p-4 flex flex-col lg:flex-row '}>
                  <div
                    className={
                      'flex flex-col lg:flex-row justify-between w-full'
                    }
                  >
                    <div>
                      <div className={'flex flex-row gap-2'}>
                        {hasUnlocked ? <CheckCheck /> : <X />}
                        <h2 className={'text-black font-medium'}>
                          {upgrade.name}
                          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                          {/* @ts-expect-error */}
                          {upgrade?.ShrimpPerClick ? (
                            <>
                              <span> |</span>{' '}
                              <em className={'italic text-sm'}>
                                {
                                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                  // @ts-expect-error
                                  upgrade?.ShrimpPerClick
                                }{' '}
                                shrimp/s
                              </em>
                            </>
                          ) : (
                            ''
                          )}
                        </h2>
                      </div>
                      <p className={'text-black italic text-sm'}>
                        {upgrade.description}
                      </p>
                    </div>
                    {!hasUnlocked && (
                      <Button
                        className={'text-white p-6 float-right w-[40%]'}
                        bgColor={'#64b3f1'}
                        disabled={collectedShrimps < upgrade.cost}
                        onClick={() => {
                          tryBuyManualUpgrades(upgrade);
                          if ('onUnlock' in upgrade) {
                            upgrade.onUnlock();
                          }
                        }}
                      >
                        <div
                          className={'flex flex-col lg:flex-row items-center'}
                        >
                          <Sprout className={'ml-2'} />
                          <span>{upgrade.cost.toLocaleString('fr-FR')}</span>
                        </div>
                      </Button>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
        <div className={'flex flex-col justify-evenly gap-4 grow-0'}>
          {/* Shrimp Confetti */}
          {confetti.map((item) => (
            <ShrimpConfetti key={item.id} x={item.x} y={item.y} />
          ))}
        <img
          src={'shrimp.png'}
          alt={'Shrimp'}
          className={`drop-shadow-xl select-none transition-all duration-20 w-[40%] mx-auto ${
            isSquishing ? 'hover:scale-90' : 'hover:scale-100'
          }`}
          onClick={handleShrimpClick}
        />

          <div className={'mx-auto'}>
            <div className={'flex flex-col lg:flex-row items-center'}>
              <Sprout className={'inline'} />
              <p className={'w-full italic'}>Shrimp : {collectedShrimps}</p>
            </div>
            <div className={'flex flex-col lg:flex-row items-center'}>
              <Sprout className={'inline fill-lime-400'} />
              <p className={'w-full italic'}>
                Collected shrimp (total): {totalCollectedShrimps}
              </p>
            </div>
          </div>
        </div>
        <div className={'grow'}>
          <ol className={'w-full items-center'}>
            {AUTOCLICK_UPGRADES.map((upgrade, index) => {
              const hasUnlocked = unlockedAutoclickUpgrades.includes(
                upgrade.name
              );

              return (
                <li key={index} className={'p-4 flex flex-col lg:flex-row'}>
                  <div
                    className={
                      'flex flex-col lg:flex-row justify-between w-full'
                    }
                  >
                    <div>
                      <div className={'flex flex-row gap-2'}>
                        {hasUnlocked ? <CheckCheck /> : <X />}
                        <h2 className={'text-black font-medium'}>
                          {upgrade.name} |
                          <em className={'italic text-sm'}>
                            {' '}
                            {upgrade.ShrimpPerSec} shrimp/s
                          </em>
                        </h2>
                      </div>
                      <p className={'text-black italic text-sm'}>
                        {upgrade.description}
                      </p>
                    </div>
                    {!hasUnlocked && (
                      <Button
                        className={'text-white p-6 float-right w-[40%]'}
                        bgColor={'#64b3f1'}
                        disabled={collectedShrimps < upgrade.cost}
                        onClick={() => {
                          tryBuyAutoclickUpgrades(upgrade);
                        }}
                      >
                        <div
                          className={'flex flex-col lg:flex-row items-center'}
                        >
                          <Sprout className={'ml-2'} />
                          <span>{upgrade.cost.toLocaleString('fr-FR')}</span>
                        </div>
                      </Button>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}
