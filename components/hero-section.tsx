'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';
import Link from 'next/link';
import { LogoTicker } from './logo-slider';
import Image from 'next/image';

export function HeroSection() {
  const [typedText, setTypedText] = useState('');
  const fullText =
    'I Create Designs That Commands Attention and Leaves a Mark.';

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section>
      <div className='flex flex-col items-center justify-center min-h-[70vh] text-center space-y-8 mb-16'>
        <div className='relative w-48 h-48 md:w-80 md:h-72'>
          <Image
            src='/hero.png'
            alt='Lakshmika Kesireddy'
            fill
            className='object-cover'
            priority
          />
        </div>
        <div className='space-y-4'>
          <h1 className='text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl'>
            <span className='relative'>
              Lakshmika Kesireddy👋🏻
              <span className='absolute -bottom-1 left-0 w-full h-[3px] bg-[#7600DE] animate-underline'></span>
            </span>
          </h1>
          <p className='text-2xl md:text-3xl text-muted-foreground font-light'>
            Graphic Designer & Logo Specialist
          </p>
        </div>
        <div className='h-14'>
          <p className='text-lg md:text-xl max-w-[600px] '>
            {typedText}
            <span className='animate-pulse'>|</span>
          </p>
        </div>
        <div className='flex flex-col sm:flex-row gap-4'>
          <Button
            asChild
            className='animate-fadeIn bg-[#7600DE] hover:bg-[#7600DE] text-white'
            style={{ animationDelay: '1.5s' }}
          >
            <Link href='#projects'>
              View My Work <ArrowRight className='ml-2 h-4 w-4' />
            </Link>
          </Button>
          <Button
            variant='outline'
            className='animate-fadeIn'
            style={{ animationDelay: '1.8s' }}
          >
            <Download className='mr-2 h-4 w-4' /> Download Resume
          </Button>
        </div>
      </div>
      <LogoTicker />
    </section>
  );
}
