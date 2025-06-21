'use client';

import Link from 'next/link';
import { LogoTicker } from './logo-slider';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section>
      <div className='flex flex-col items-center justify-center px-8 pt-10 pb-16 text-center max-w-4xl mx-auto'>
        {/* Profile Image */}
        <div className='w-24 h-24 rounded-full overflow-hidden mb-8 bg-white'>
          <Image
            src='/pfp.png'
            alt='Profile photo'
            width={96}
            height={96}
            className='w-full h-full object-cover'
          />
        </div>

        {/* Greeting */}
        <h2 className='text-xl md:text-2xl font-medium mb-6 text-gray-200 tracking-wide'>
          Hi, I'm Lakshmika 👋
        </h2>

        {/* Main Heading with Underline */}
        <div className='mb-8'>
          <h1 className='text-4xl md:text-6xl lg:text-6xl font-bold leading-tight mb-4 tracking-wide'>
            Your business is{' '}
            <span className='relative'>
              unique
              <div className='absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-white to-purple-500 rounded-full'></div>
            </span>{' '}
            — your visuals should be too.
            <br />
          </h1>
        </div>

        {/* Subtext */}
        <p className='text-gray-400 text-lg md:text-xl max-w-2xl mb-9 leading-relaxed hidden md:flex'>
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
