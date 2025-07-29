import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Projects from '@/components/Projects';
import ProjectRecommender from '@/components/ProjectRecommender';
import AIChat from '@/components/AIChat';

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Header />
      <Hero />
      <Projects />
      <ProjectRecommender />
      <AIChat />
      <Footer />
    </main>
  );
}
