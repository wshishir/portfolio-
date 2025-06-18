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
      <div className='flex flex-col items-center justify-center px-8 py-12 text-center max-w-4xl mx-auto'>
        {/* Profile Image */}
        <div className='w-24 h-24 rounded-full overflow-hidden mb-8 bg-white'>
          <Image
            src='/hero.svg'
            alt='Profile photo'
            width={96}
            height={96}
            className='w-full h-full object-cover'
          />
        </div>

        {/* Greeting */}
        <h2 className='text-xl md:text-2xl font-medium mb-6 text-gray-200'>
          Hi, I'm Lakshmika 👋
        </h2>

        {/* Main Heading with Underline */}
        <div className='mb-8'>
          <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4'>
            Designing digital
            <br />
            logos, brands &
            <br />
            <span className='relative'>
              experience.
              <div className='absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full'></div>
            </span>
          </h1>
        </div>

        {/* Subtext */}
        <p className='text-gray-400 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed'>
          a Graphic Designer and Brand Designer in India.
          <br />I specialize in Logo Design, Brand Design,
          <br />
          and Visual Identity.
        </p>

        {/* CTA Button */}
        <button className='bg-[#7600DE] text-white px-8 py-3 rounded-full font-semibold text-sm tracking-wide hover:bg-[#7600DE]/70 transition-colors uppercase'>
          View My Work
        </button>
      </div>
      <LogoTicker />
    </section>
  );
}
