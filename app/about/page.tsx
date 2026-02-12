import ServerSection from '../components/ServerSection';
import AboutHero from '../components/AboutHero';
import AboutContact from '../components/AboutContact';

export const metadata = {
  title: 'About - Yana',
  description: 'Learn more about Yana, Social Media VA and Graphic Designer'
};

export default function About() {
  return (
    <>
      <AboutHero />
      <ServerSection showPet petType="cat" petPosition="center" />
      <AboutContact />
      <ServerSection showPet petType="guinea-pig" petPosition="center" className="mt-16" />
    </>
  );
}