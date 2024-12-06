import React, { useEffect, useState } from 'react';
import { Button, Container, Grid, GridItem, Group, Stack } from '@chakra-ui/react';
import { Circle } from 'lucide-react';
import { ArcherContainer, ArcherElement } from 'react-archer';
import {
  HoverCardArrow,
  HoverCardContent,
  HoverCardRoot,
  HoverCardTrigger,
} from './ui/hover-card';
import { Card } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';

const TrailWithLines = ({ steps, stepSpacing = 400 }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [mobile, setMobile] = useState(false);

  // Met à jour la largeur de l'écran lorsque la fenêtre est redimensionnée
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenWidth < 768) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [screenWidth]);

  // Calculate the coordinates for each step
  const coords = [];

  for (let i = 0; i < steps.length; i++) {
    const A = 150;
    const B = 0.1;
    const k = 0;

    const y = i * stepSpacing;
    const x = A * Math.sin(B * y) - k * y;
    if (mobile) {
      coords.push({ x: 0, y });
    }
    else {
      coords.push({ x, y });
    }
  }

  // Calculate dimensions for the trail
  const trailHeight = coords.length * stepSpacing + 100; // Add padding

  const left = mobile ? '0%' : '47%';

  return (
    <ArcherContainer strokeColor="#62B3E4" strokeWidth={2}>
      <div
        style={{
          height: `${trailHeight}px`,
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {steps.map((step, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              left: left,
              transform: `translateX(${coords[index].x}px)`,
              top: `${coords[index].y}px`,
            }}
          >
            <Grid templateColumns="repeat(4, 1fr)" gap={6}>
              {/* Circle and Lines */}
              <GridItem colSpan={1}>
                <ArcherElement
                  id={`element${index}`}
                  relations={
                    index < steps.length - 1
                      ? [
                          {
                            targetId: `element${index + 1}`,
                            targetAnchor: 'top',
                            sourceAnchor: 'bottom',
                            style: {
                              strokeColor: '#62B3E4',
                              strokeWidth: 2,
                              endMarker: false,
                            },
                          },
                        ]
                      : []
                  }
                >
                  <div className={'flex justify-center mx-auto'}>
                    {!mobile ? (
                      <HoverCardRoot>
                        <HoverCardTrigger asChild>
                          <Circle color="#0064A8" fill={"#0064A8"}  size={'50px'} />
                        </HoverCardTrigger>
                        <HoverCardContent>
                          <HoverCardArrow />
                          <Card.Root
                            flexDirection="row"
                            overflow="hidden"
                            maxW={'xl'}
                          >
                            <Box>
                              <Card.Body className="min-w-[500px]">
                                <Card.Title mb="2">
                                  {step.content.title}
                                </Card.Title>
                                <Card.Description>
                                  {step.content.description}
                                </Card.Description>
                              </Card.Body>
                              <Card.Footer></Card.Footer>
                            </Box>
                          </Card.Root>
                        </HoverCardContent>
                      </HoverCardRoot>
                    ) : (
                      <Circle color="#0064A8" size={'50px'}/>
                    )}
                  </div>
                </ArcherElement>
              </GridItem>
              {/* Title */}
              <GridItem colSpan={3} className={'flex items-center'}>
                <div className={'flex flex-col'}>
                  <Text fontSize={'2xl'}>{step.content.title}</Text>
                  {mobile && (
                    <Text fontSize={'lg'}>{step.content.description}</Text>
                  )}
                </div>
              </GridItem>
            </Grid>
          </div>
        ))}
      </div>
    </ArcherContainer>
  );
};

export default TrailWithLines;
