import BodypartsContainer from '../components/bodyparts/BodypartsContainer';
import HomePageIntroduction from '../components/home/HomePageIntroduction';
import SeaLevel from '../components/home/SeaLevel';

export default function Homepage() {

  return (
    <>
      <SeaLevel/>
      <HomePageIntroduction/>
      <BodypartsContainer/>
    </>
  )
}
