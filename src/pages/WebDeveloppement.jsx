import Hero from '@components/WebDeveloppement/Hero';
import Section1 from '@components/WebDeveloppement/Section1';
import Section2 from '@components/WebDeveloppement/Section2';
import Section3 from '@components/WebDeveloppement/Section3';
import Section4 from '@components/WebDeveloppement/Section4';
import Section5 from '@components/WebDeveloppement/Section5';
import Contact from '@components/WebDeveloppement/Contact';
import BlogSection from '@components/Blog/BlogSection';

export default function WebDeveloppement() {
  return (
    <main>
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Contact />
      <BlogSection />
    </main>
  );
}
