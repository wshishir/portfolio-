import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { ProjectsSection } from '@/components/projects-section';
import { ContactSection } from '@/components/contact-section';
import { FloatingBar } from '@/components/floating-bar';
import { SiteHeader } from '@/components/site-header';
import ServicesSection from '@/components/services-section';
import LoopingVideo from '@/components/LoopingVideo';

export default function Home() {
  return (
    <div className='max-h-screen bg-black'>
      <SiteHeader />
      <main className='flex flex-col items-center mb-16 bg-black'>
        <div className='container max-w-3xl px-4 py-6 space-y-24'>
          <HeroSection />
          <AboutSection />
          <LoopingVideo
            src='/videos/intro.mp4'
            width='1000px' // Adjust as needed
            height='550px' // 16:9 ratio for 1200px width
          />
          <ServicesSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      </main>
      <FloatingBar />
    </div>
  );
}
