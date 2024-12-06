import Waves from './Wave';
import { useState } from 'react';
import { Button } from './ui/button';
import { CheckCheck, Sprout, X } from 'lucide-react';
import { useInterval } from 'react-interval-hook';

type AutoclickerUpgrade = {
  name: string;
  cost: number;
  description: string;
  planktonPerSec: number;
};

interface FinalManualClickUpgrade {
  planktonPerClick: number
}

interface NormalManualClickUpgrade {
  onUnlock: () => void
}

type ManualClickUpgrade = {
  name: string;
  cost: number;
  description: string;
} & (NormalManualClickUpgrade | FinalManualClickUpgrade);

const AUTOCLICK_UPGRADES: Array<AutoclickerUpgrade> = [
  {
    name: 'Remous légers',
    cost: 10,
    description: 'De petites perturbations de l\'eau stimulent légèrement la production de plancton.',
    planktonPerSec: 1,
  },
  {
    name: 'Courants côtiers',
    cost: 100,
    description: 'Des courants réguliers apportent un flux continu de nutriments.',
    planktonPerSec: 5,
  },
  {
    name: 'Eaux enrichies',
    cost: 10_000,
    description: 'Des eaux naturellement riches en éléments nutritifs augmentent la production.',
    planktonPerSec: 15,
  },
  {
    name: 'Remontées profondes',
    cost: 1_000_000,
    description: 'Des remontées d’eaux froides et riches en minéraux boostent le développement du plancton',
    planktonPerSec: 100,
  },
  {
    name: 'Récif nourricier',
    cost: 10_000_000,
    description: 'Un récif qui soutient un écosystème florissant augmente grandement la production.',
    planktonPerSec: 10_000,
  },
  {
    name: 'Écosystème optimal',
    cost: 1_000_000_000,
    description: 'Un environnement parfaitement équilibré et optimisé assure une production maximale.',
    planktonPerSec: 1_000_000,
  },
];


const MANUAL_UPGRADES: Array<ManualClickUpgrade> = [
  {
    name: 'Filet à plancton',
    cost: 10,
    description: 'Un filet simple permet de capturer un peu de plancton à chaque clic',
    planktonPerClick: 1,
  },
  {
    name: 'Pompe à main',
    cost: 100,
    description: 'Une pompe améliore la capacité de collecte manuelle par clic',
    planktonPerClick: 5,
  },
  {
    name: 'Collecteur filtrant',
    cost: 10_000,
    description: 'Un outil filtrant permet de récolter une quantité accrue de plancton.',
    planktonPerClick: 15,
  },
  {
    name: 'Filet automatisé',
    cost: 100_000,
    description: 'Un filet motorisé augmente considérablement l\'efficacité de la récolte.',
    planktonPerClick: 15,
  },
  {
    name: 'Station flottante',
    cost: 1_000_000,
    description: 'Une station semi-automatisée maximise le plancton récolté par action.',
    planktonPerClick: 15,
  },
  {
    name: 'Système de collecte avancé',
    cost: 100_000_000,
    description: 'Un équipement de pointe permet une récolte optimale à chaque clic.',
    planktonPerClick: 15,
  },
  {
    name: 'Surpriiiise !',
    cost: 1_000_000_000,
    description: 'Et non, pas d\'indice !',
    onUnlock: () => {
      console.log('Funny fish unlocked')
    }
  },
];


export default function Clicker() {
  const [totalCollectedPlanktons, setTotalCollectedPlanktons] = useState(0);
  const [collectedPlanktons, setCollectedPlanktons] = useState(0);

  const [unlockedAutoclickUpgrades, setUnlockedAutoclickUpgrades] = useState<Array<string>>([]);
  const [unlockedManualUpgrades, setUnlockedManualUpgrades] = useState<Array<string>>([]);

  const increasePlankton = (quantity = 1) => {
    setCollectedPlanktons(collectedPlanktons + quantity);
    setTotalCollectedPlanktons(totalCollectedPlanktons + quantity);
  };

  const tryBuyAutoclickUpgrades = (upgrade: AutoclickerUpgrade) => {
    if (collectedPlanktons >= upgrade.cost) {
      setCollectedPlanktons(collectedPlanktons - upgrade.cost);
      setUnlockedAutoclickUpgrades([...unlockedAutoclickUpgrades, upgrade.name]);
    }
  };

  const tryBuyManualUpgrades = (upgrade: ManualClickUpgrade) => {
    if (collectedPlanktons >= upgrade.cost) {
      setCollectedPlanktons(collectedPlanktons - upgrade.cost);
      setUnlockedManualUpgrades([...unlockedManualUpgrades, upgrade.name]);
    }
  };

  const manualClickHandler = () => {
    const planktonToAdd = MANUAL_UPGRADES.filter((upgrade) =>
      unlockedManualUpgrades.includes(upgrade.name)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
    ).reduce((acc, upgrade) => acc + (upgrade.planktonPerClick ?? 0), 1);

    increasePlankton(planktonToAdd);
  };

  useInterval(() => {
    const planktonToAdd = AUTOCLICK_UPGRADES.filter((upgrade) =>
      unlockedAutoclickUpgrades.includes(upgrade.name)
    ).reduce((acc, upgrade) => acc + upgrade.planktonPerSec, 0);
    increasePlankton(planktonToAdd);
  }, 1_000);

  return (
    <div className={'bg-[#D3D3D3] min-h-[100vh] text-black'}>
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
        Plank-ton-O<em className={'text-xs top-5'}>2</em> !
      </h1>
      <div className={'flex flex-row w-[80%] mx-auto'}>
        <div className={'grow'}>
          <ol className={'w-full items-center'}>
            {MANUAL_UPGRADES.map((upgrade, index) => {
              const hasUnlocked = unlockedManualUpgrades.includes(upgrade.name);

              return (
                <li key={index} className={'p-4 flex flex-row'}>
                  <div className={'flex flex-row justify-between w-full'}>
                    <div>
                      <div className={'flex flex-row gap-2'}>
                        {hasUnlocked ? <CheckCheck /> : <X />}
                        <h2 className={'text-black font-medium'}>
                          {upgrade.name}
                          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                          { /* @ts-expect-error */ }
                          { upgrade?.planktonPerClick ? <>
                            <span> |</span> <em className={'italic text-sm'}>
                            {
                              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                              // @ts-expect-error
                              upgrade?.planktonPerClick
                            } pklt/s
                          </em>
                          </> : ''}
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
                        disabled={collectedPlanktons < upgrade.cost}
                        onClick={() => {
                          tryBuyManualUpgrades(upgrade);
                        }}
                      >
                        <div className={"flex flex-row items-center"}>
                          <Sprout className={"ml-2"} />
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
          <img
            src={'planktono2.png'}
            alt={'Plancton'}
            className={
              'drop-shadow-xl select-none hover:scale-105 transition-all duration-300 w-[40%] mx-auto'
            }
            onClick={() => {
              manualClickHandler();
            }}
          />
          <div className={'mx-auto'}>
            <div className={'flex flex-row items-center'}>
              <Sprout className={'inline'} />
              <p className={'w-full italic'}>
                Plancton : {collectedPlanktons}
              </p>
            </div>
            <div className={'flex flex-row items-center'}>
              <Sprout className={'inline fill-lime-400'} />
              <p className={'w-full italic'}>
                Plancton collecté (total): {totalCollectedPlanktons}
              </p>
            </div>
          </div>
        </div>
        <div className={'grow'}>
          <ol className={'w-full items-center'}>
            {AUTOCLICK_UPGRADES.map((upgrade, index) => {
              const hasUnlocked = unlockedAutoclickUpgrades.includes(upgrade.name);

              return (
                <li key={index} className={'p-4 flex flex-row'}>
                  <div className={'flex flex-row justify-between w-full'}>
                    <div>
                      <div className={'flex flex-row gap-2'}>
                        {hasUnlocked ? <CheckCheck /> : <X />}
                        <h2 className={'text-black font-medium'}>
                          {upgrade.name} |
                          <em className={'italic text-sm'}>
                            {' '}
                            {upgrade.planktonPerSec} plkt/s
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
                        disabled={collectedPlanktons < upgrade.cost}
                        onClick={() => {
                          tryBuyAutoclickUpgrades(upgrade);
                        }}
                      >
                        <div className={"flex flex-row items-center"}>
                          <Sprout className={"ml-2"} />
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
