import Section from './components/Section';
import WorkGrid from './components/WorkGrid';
import Hero from './components/Hero';

export const metadata = {
  title: 'Yana - Social Media VA & Graphic Designer',
  description: 'Portfolio showcasing social media management and graphic design work'
};

export default function Home() {
  return (
    <>
      <Hero />
      <Section showPet petType="cat" petPosition="center" />
      <WorkGrid />
    </>
  );
}