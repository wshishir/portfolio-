import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { ProjectsSection } from '@/components/projects-section';
import { ContactSection } from '@/components/contact-section';
import { FloatingBar } from '@/components/floating-bar';
import { SiteHeader } from '@/components/site-header';
import ServicesSection from '@/components/services-section';
import LoopingVideo from '@/components/LoopingVideo';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className='max-h-screen bg-black'>
      <SiteHeader />
      <main className='flex flex-col items-center mb-16 bg-black'>
        <div className='container max-w-screen px-4 py-6 space-y-24'>
          <div className='container max-w-4xl px-4 py-6 space-y-24'>
          <HeroSection />
          <AboutSection />
          <LoopingVideo
            src='/videos/intro.mp4'
            // Responsive sizing and spacing for mobile
            className='w-full max-w-[1000px] h-[180px] sm:h-[300px] md:h-[400px] lg:h-[550px] object-cover rounded-2xl my-4 sm:my-8'
          />
          <ServicesSection />
          <ProjectsSection />
          <ContactSection />
          </div>
          <Footer />
        </div>
      </main>
      <FloatingBar />
    </div>
  );
}
