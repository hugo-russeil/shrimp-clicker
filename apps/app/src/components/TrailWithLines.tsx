import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
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

const TrailWithLines = ({ steps, stepSpacing = 400 }) => {
  let coords = [];

  for (let i = 0; i < steps.length; i++) {
    const A = 150;
    const B = 0.1;
    const k = 0;

    const y = i * stepSpacing;
    const x = A * Math.sin(B * y) - k * y;

    coords.push({ x, y });
  }

  // Calculate dimensions for the trail
  const trailHeight = coords.length * stepSpacing + 100; // Add padding

  return (
    <ArcherContainer strokeColor="red">
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
              left: '50%',
              transform: `translateX(${coords[index].x}px)`,
              top: `${coords[index].y}px`,
            }}
          >
            <Grid templateColumns="repeat(4, 1fr)" gap={6}>
              <GridItem colSpan={1}>
                <ArcherElement
                  id={'element' + index}
                  relations={[
                    {
                      targetId: 'element' + (index + 1),
                      targetAnchor: 'top',
                      sourceAnchor: 'bottom',
                      style: {
                        strokeColor: '#62B3E4',
                        strokeWidth: 2,
                        endMarker: false,
                      },
                    },
                  ]}
                >
                  <div>
                    <HoverCardRoot>
                      <HoverCardTrigger asChild>
                        <Circle
                          color="#0064A8"
                          fill="#0064A8"
                          size={'50px'}
                          className={`hover:scale-150 transition-all duration-500`}
                        />
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
                  </div>
                </ArcherElement>
              </GridItem>
              <GridItem alignContent={'center'} colSpan={3}>
                {step.content.title}
              </GridItem>
            </Grid>
          </div>
        ))}
      </div>
    </ArcherContainer>
  );
};

export default TrailWithLines;
