import React from 'react';
import { ImgComparisonSlider } from '@img-comparison-slider/react';
import { Container, Image, Text, Box } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required Swiper modules
import { Autoplay } from "swiper/modules";

const ComparisonTemplate : React.FC< {
  organPath: string,
  oceanPath: string,
  title: string
  organName: string,
  oceanName: string,
  organDescription: Array<string>,
  oceanDescription: Array<string>
}> = ({ organPath, oceanPath, title, organName, oceanName, organDescription, oceanDescription }) => {

  return (
    <Container className={"flex flex-col items-center w-full"}>
      <Text className={"text-3xl font-bold my-6"}>{title}</Text>

      <ImgComparisonSlider className={"mx-auto w-full"}>
        <Image src={organPath} slot={"first"} className={"mx-auto w-2/5 h-full"} bg={"bg"} />
        <Image src={oceanPath} slot={"second"} className={"mx-auto w-2/5 h-full"} bg={"bg"} />
      </ImgComparisonSlider>

      <Container className={"flex flex-row justify-between mt-8 w-full"}>
        <Container className={"w-1/2"}>
          <Text className={"text-2xl font-bold text-center"}>{organName} :</Text>
          <Box>
            <Swiper style={{zIndex: -4}}
                    modules={[Autoplay]}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                      delay: 5000,
                      disableOnInteraction: false
                    }}
            >
              {organDescription.map((description) => {
                return (
                  <SwiperSlide className={"text-center text-2xl mx-auto"}>
                    <Text className={"text-lg"}>{description}</Text>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Box>
        </Container>
        <Container className={"w-1/2"}>
          <Text className={"text-2xl font-bold text-center"}>{oceanName} :</Text>
          <Box>
            <Swiper style={{zIndex: -4}}
                    modules={[Autoplay]}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                      delay: 5000,
                      disableOnInteraction: false
                    }}
            >
              {oceanDescription.map((description) => {
                return (
                  <SwiperSlide className={"text-center text-2xl mx-auto"}>
                    <Text className={"text-lg"}>{description}</Text>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Box>
        </Container>
      </Container>
    </Container>
  );
};


export default ComparisonTemplate;
