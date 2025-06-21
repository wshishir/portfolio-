
import { Card, CardContent } from '@/components/ui/card';
import { Brush, Lightbulb } from 'lucide-react';
import LoopingVideo from './LoopingVideo';

export function AboutSection() {
  return (
    <section id='about' className='space-y-12'>
      <div className='space-y-4 text-center'>
        <h2 className='text-3xl font-bold  sm:text-4xl md:text-5xl hello'>
          Know Me A Little{' '}
        </h2>
        <p className='text-muted-foreground max-w-[600px] mx-4 md:mx-auto'>
          I’m a 23-year-old self-taught graphic designer from Hyderabad, India.
          Shaping brands with creativity and bold design, With over two years in
          the field, I’ve learned that design isn’t just about aesthetics—it’s
          about storytelling.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mx-3  md:mx-auto'>
        <Card className='bg-card/50 backdrop-blur-sm hover:border-[#7600DE]'>
          <CardContent className='p-6 space-y-4'>
            <div className='flex items-center gap-2'>
              <div className='p-2 rounded-full bg-white'>
                <Brush className='h-5 w-5 text-[#7600DE]' />
              </div>
              <h3 className='text-xl font-semibold hello tracking-wide'>My Approach</h3>
            </div>
            <p className='text-muted-foreground'>
              I believe that great design tells a story. My process involves
              deep research, conceptualization, and meticulous execution to
              create designs that resonate with your audience.
            </p>
          </CardContent>
        </Card>

        <Card className='bg-card/50 backdrop-blur-sm hover:border-[#7600DE]'>
          <CardContent className='p-6 space-y-4'>
            <div className='flex items-center gap-2'>
              <div className='p-2 rounded-full bg-white'>
                <Lightbulb className='h-5 w-5 text-[#7600DE]' />
              </div>
              <h3 className='text-xl font-semibold tracking-wide'>Philosophy</h3>
            </div>
            <p className='text-muted-foreground'>
              Simplicity is the ultimate sophistication. I focus on creating
              clean, purposeful designs that communicate clearly and effectively
              while standing the test of time.
            </p>
          </CardContent>
        </Card>
  </div>
    </section>
  );
}
