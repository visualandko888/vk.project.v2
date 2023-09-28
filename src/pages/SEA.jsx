import Hero from '@components/SEA/Hero';
import Section1 from '@components/SEA/Section1';
import Section1bis from '@components/SEA/Section1bis';
import Section2 from '@components/SEA/Section2';
import Section3 from '@components/SEA/Section3';
import Section4 from '@components/SEA/Section4';
import Section5 from '@components/SEA/Section5';
import Contact from '@components/SEA/Contact';
import BlogSection from '@components/Blog/BlogSection';

export default function SEA() {
  return (
    <main>
      <Hero />
      <Section1 />
      <Section1bis />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Contact />
      <BlogSection />
    </main>
  );
}
