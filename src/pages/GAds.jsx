import Hero from '@components/GAds/Hero';
import Section1 from '@components/GAds/Section1';
import Section1bis from '@components/GAds/Section1bis';
import Section2 from '@components/GAds/Section2';
import Section3 from '@components/GAds/Section3';
import Section4 from '@components/GAds/Section4';
import Section5 from '@components/GAds/Section5';
import Contact from '@components/GAds/Contact';
import BlogSection from '@components/Blog/BlogSection';

export default function GAds() {
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
