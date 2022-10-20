import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { scroller } from 'react-scroll';
import Banner from '../../components/banner';
import Courses from '../../components/courses';
import About from '../../components/about';
import { AboutMobTop, AboutMobBot } from '../../components/aboutMobile';
import Trainers from '../../components/trainers';
import Join from '../../components/join';
import Contact from '../../components/contact';
import useWindowWidth from '../../hooks/window/useWindowWidth';

export default function Home() {
  const scrollId = useSelector((state) => state.scrollId);
  const windowWidth = useWindowWidth();

  useEffect(() => {
    scroller.scrollTo(scrollId);
  });

  return (
    <>
      <Banner />
      {windowWidth > 750 && <About />}
      <Courses />
      {windowWidth <= 750 && <AboutMobTop />}
      <Trainers />
      <Join />
      {windowWidth <= 750 && <AboutMobBot />}
      <Contact />
    </>
  );
}
