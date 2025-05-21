import { jak } from '@/app/layout';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Brush, Lightbulb } from 'lucide-react';

export function AboutSection() {
  return (
    <section id='about' className='space-y-12 py-12'>
      <div className='space-y-4 text-center'>
        <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
          About Me
        </h2>
        <p className='text-muted-foreground max-w-[600px] mx-auto'>
          I’m a 23-year-old self-taught graphic designer from Hyderabad, India
          🇮🇳 shaping brands with creativity and bold design. With over two years
          in the field, I’ve learned that design isn’t just about
          aesthetics—it’s about storytelling.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Card className='bg-card/50 backdrop-blur-sm hover:border-[#7600DE]/40'>
          <CardContent className='p-6 space-y-4'>
            <div className='flex items-center gap-2'>
              <div className='p-2 rounded-full bg-[#7600DE]/10'>
                <Brush className='h-5 w-5 text-[#7600DE]' />
              </div>
              <h3 className='text-xl font-semibold'>My Approach</h3>
            </div>
            <p className='text-muted-foreground'>
              I believe that great design tells a story. My process involves
              deep research, conceptualization, and meticulous execution to
              create designs that resonate with your audience.
            </p>
          </CardContent>
        </Card>

        <Card className='bg-card/50 backdrop-blur-sm hover:border-[#7600DE]/40'>
          <CardContent className='p-6 space-y-4'>
            <div className='flex items-center gap-2'>
              <div className='p-2 rounded-full bg-[#7600DE]/10'>
                <Lightbulb className='h-5 w-5 text-[#7600DE]' />
              </div>
              <h3 className='text-xl font-semibold'>Philosophy</h3>
            </div>
            <p className='text-muted-foreground'>
              Simplicity is the ultimate sophistication. I focus on creating
              clean, purposeful designs that communicate clearly and effectively
              while standing the test of time.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className='space-y-4'>
        <h3 className='text-xl font-semibold text-center'>
          Skills & Expertise
        </h3>
        <div className='flex flex-wrap justify-center gap-2'>
          <Badge
            variant='outline'
            className='bg-[#BBFF00]/10 hover:bg-[#BBFF00]/20'
          >
            Logo Design
          </Badge>
          <Badge
            variant='outline'
            className='bg-[#BBFF00]/10 hover:bg-[#BBFF00]/20'
          >
            Brand Identity
          </Badge>
          <Badge
            variant='outline'
            className='bg-[#BBFF00]/10 hover:bg-[#BBFF00]/20'
          >
            Typography
          </Badge>
          <Badge
            variant='outline'
            className='bg-[#BBFF00]/10 hover:bg-[#BBFF00]/20'
          >
            Illustration
          </Badge>
          <Badge
            variant='outline'
            className='bg-[#BBFF00]/10 hover:bg-[#BBFF00]/20'
          >
            UI/UX Design
          </Badge>
          <Badge
            variant='outline'
            className='bg-[#BBFF00]/10 hover:bg-[#BBFF00]/20'
          >
            Adobe Creative Suite
          </Badge>
          <Badge
            variant='outline'
            className='bg-[#BBFF00]/10 hover:bg-[#BBFF00]/20'
          >
            Figma
          </Badge>
          <Badge
            variant='outline'
            className='bg-[#BBFF00]/10 hover:bg-[#BBFF00]/20'
          >
            Motion Graphics
          </Badge>
        </div>
      </div>
    </section>
  );
}
