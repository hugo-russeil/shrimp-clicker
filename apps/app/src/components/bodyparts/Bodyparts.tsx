import { ImagePinContainer } from 'react-image-pin';
import { ImagePin } from 'react-image-pin/dist/components/ImagePinContainer';
import { HoverCardArrow, HoverCardContent, HoverCardRoot, HoverCardTrigger } from '../ui/hover-card';
import { Card, Image } from '@chakra-ui/react';
import { Badge, Box, HStack } from '@chakra-ui/react';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';

export type PinpointLinksType = Array<{
  //      [x     , y     ]
  title: string
  description: string
  coords: [number, number]
  href: string
}>

const LINKS: PinpointLinksType = [
  {
    title: "Poumons",
    description: "Les plantes marines sont les poumons des océans",
    coords: [40, 45],
    href: "/comparison/lungs",
  }, {
    title: "Coeur",
    description: "Les courants marins sont le cœur de la planète",
    coords: [51, 44],
    href: "/comparison/hearth",
  }, {
    title: "Estomac",
    description: "Les zones de convergence sont l’estomac des océans",
    coords: [57, 57],
    href: "/comparison/stomach",
  }, {
    title: "Foie",
    description: "Les filtres naturels sont le foie des océans",
    coords: [50, 53],
    href: "/comparison/liver",
  }, {
    title: "Peau",
    description: "La surface des océans est comme la peau de la planète",
    coords: [30, 40],
    href: "/comparison/skin",
  }
]

export const CustomPin = ({ pin }: { pin: ImagePin }) => {
  const navigate = useNavigate();

  const sendToViaClickedPin = (pin: ImagePin) => {

    console.log("CustomPin ", pin.id);

    const { href } = LINKS.find((link, index) => `${index}` === pin.id)!;
    navigate(href);
  }

  const href = LINKS.find((link, index) => `${index}` === pin.id)!.href;

  const { title, description } = LINKS.find((link, index) => `${index}` === pin.id)!;

  return (
    <HoverCardRoot positioning={{placement: "top"}}>
      <HoverCardTrigger asChild>
        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
        <a
          href={href}
          className={`absolute w-5 h-5 rounded-full bg-lime-400 hover:bg-lime-500 hover:scale-150 transition-all duration-300`}
        />
      </HoverCardTrigger>
      <HoverCardContent>
        <HoverCardArrow />
        <Card.Root flexDirection="row" overflow="hidden" maxW={"xl"}>
          <Box>
            <Card.Body className="min-w-[500px]">
              <Card.Title mb="2">{title}</Card.Title>
              <Card.Description> {description} </Card.Description>
            </Card.Body>
            <Card.Footer>
              <Button bgColor={"colorPalette.300"} className={"p-6 text-black"} onClick={() => { sendToViaClickedPin(pin); }}>En savoir plus</Button>
            </Card.Footer>
          </Box>
        </Card.Root>
      </HoverCardContent>
    </HoverCardRoot>
  );
};

export default function Bodyparts() {

  const width = window.innerWidth;
  const isMobile = width < 768;

  return (
    <div>
      <h1 className={'text-2xl w-full md:w-2/3 text-center my-12'}>
        Explore les similarités du corps humain et des océans
      </h1>
      <div className={isMobile? 'w-full mx-auto': 'w-1/3 mx-auto'}>
        <ImagePinContainer
          image={'bodyparts.png'}
          imageAlt={'Parties du corps humain'}
          draggable={false}
          pins={LINKS.map((link, index) => {
            return {
              id: `${index}`,
              draggable: false,
              positionX: link.coords[0],
              positionY: link.coords[1],
            };
          })}
          customPinComponent={(pin) => <CustomPin pin={pin} />}
        />
      </div>
    </div>
  );
}
