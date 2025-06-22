'use client';

import Link from 'next/link';
import { LogoTicker } from './logo-slider';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section>
      <div className='flex flex-col items-center justify-center md:px-8 md:pt-6  md:pb-12 pb-7 text-center max-w-4xl mx-auto'>
        {/* Profile Image */}
        <div className='w-96 h-64 rounded-lg overflow-hidden mb-5 bg-black flex items-center justify-center'>
          <Image
            src='/hero.png'
            alt='Profile photo'
            width={320}
            height={320}
            className='w-full h-full object-contain'
          />
        </div>

        {/* Main Heading with Underline */}
        <div className='mb-3  md:mb-4'>
          <h1 className='text-3xl md:text-6xl lg:text-6xl font-bold leading-tight mb-4 tracking-wide'>
            Your business is{' '}
            <span className='relative'>
              unique,
              <div className='absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-white to-purple-500 rounded-full'></div>
            </span>{' '}
            <br />
            your visuals should be too.
            <br />
          </h1>
        </div>

        {/* Subtext */}
        <p className='text-gray-400 md:text-xl max-w-2xl md:mb-9  mb-4 leading-relaxed '>
          I build brand identities, logos, and packaging that match your vision.
        </p>

        {/* CTA Button */}
        <button className='bg-[#7600DE] text-white px-8 py-3 rounded-full font-semibold text-sm tracking-wide hover:bg-[#7600DE]/70 transition-colors uppercase'>
          <Link href='#projects'>View My Work</Link>
        </button>
      </div>
      <LogoTicker />
    </section>
  );
}
