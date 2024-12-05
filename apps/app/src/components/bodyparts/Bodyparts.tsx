import { ImagePinContainer } from 'react-image-pin';
import { ImagePin } from 'react-image-pin/dist/components/ImagePinContainer';
import { HoverCardArrow, HoverCardContent, HoverCardRoot, HoverCardTrigger } from '../ui/hover-card';
import { Card, Image } from '@chakra-ui/react';
import { Badge, Box, HStack } from '@chakra-ui/react';
import { Button } from '../ui/button';

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
    description: "TODO",
    coords: [40, 45],
    href: "/",
  }, {
    title: "Coeur",
    description: "TODO",
    coords: [51, 44],
    href: "/",
  }, {
    title: "Estomac",
    description: "TODO",
    coords: [57, 57],
    href: "/",
  }
]

const sendToViaClickedPin = (pin: ImagePin)=> {

  // TODO : Navigate to the corresponding page

  const MATCHING_LINK = LINKS.find((link, index) => {
    return `${index}` === pin.id;
  });

  console.log('User clicked on link href', MATCHING_LINK?.href);

  // use navigate on the matching link href.
  // navigate(MATCHING_LINK?.href || "/");
}

export const CustomPin = ({ pin }: { pin: ImagePin }) => {

  const { title, description } = LINKS.find((link, index) => `${index}` === pin.id)!;

  return (
    <HoverCardRoot positioning={{placement: "top"}}>
      <HoverCardTrigger asChild>
        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
        <a
          href={'/'}
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
  // const navigate = useNavigate();

  return (
    <div>
      <h1 className={'text-2xl w-full text-center my-12'}>
        Explore les similarités du corps humain et des océans
      </h1>
      <div className={'w-[30%] mx-auto'}>
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
          onExistingPin={sendToViaClickedPin}
        />
      </div>
    </div>
  );
}
