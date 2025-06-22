import { Instagram, Linkedin, ArrowRight, Heart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function DzinrNavbar() {
  return (
    <footer className='bg-black text-white relative overflow-hidden md:mx-24 md:pb-1 pb-12'>
      <hr className='h-px my-8  bg-gray-200 border-0 dark:bg-gray-700'></hr>
      <div className=''>
        {/* Main content area */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-12 px-8'>
          {/* Logo */}
          <div className='flex justify-center lg:justify-start'>
            <Link className='text-4xl font-bold tracking-wider' href='/'>
              <Image src='logo.png' width={160} height={100} alt='logo' />
            </Link>
          </div>

          {/* Support section */}
          <div className='text-center'>
            <p className='text-gray-400 text-sm mb-2 tracking-wide'>
              NEED SUPPORT?
            </p>
            <a
              href='mailto:designbylakshmika@gmail.com'
              className='text-gray-300 hover:text-white transition-colors'
            >
              designbylakshmika@gmail.com
            </a>
          </div>

          {/* Social media */}
          <div className='flex justify-center lg:justify-end'>
            <div className='text-center lg:text-right'>
              <p className='text-gray-400 text-sm mb-3 tracking-wide'>
                FOLLOW ME
              </p>
              <div className='flex gap-4 justify-center lg:justify-end'>
                <Link
                  href='https://www.instagram.com/designedbylaksh/'
                  className='text-gray-400 '
                  aria-label='Instagram'
                  target="_blank"
                >
                  <Instagram size={24} />
                </Link>
                <Link
                  href='https://www.linkedin.com/in/lakshmika-kesireddy/'
                  className='text-gray-400 '
                  aria-label='LinkedIn'
                  target="_blank"
                  
                >
                  <Linkedin size={24} />
                </Link>
                <Link
                  href='https://www.behance.net/lakshmikesired'
                  aria-label='Behance'
                  target="_blank"
                >
                  <Image
                    src='/behance.svg'
                    alt='behance'
                    width={26}
                    height={24}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700'></hr>

        {/* Bottom section */}
        <div className='flex flex-col lg:flex-row items-center justify-between gap-6 px-12'>
          {/* Designed by */}
          <Link
            href='https://shishir.site'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-1 text-gray-400 text-sm hover:text-white transition-colors z-10'
          >
            Made with <Heart size={16} className='text-red-500 fill-red-500' />
            by Shishir
          </Link>

          {/* Copyright */}
          <div className='text-gray-400 text-sm text-center lg:text-right whitespace-nowrap'>
            Lakshmika © Copyright 2025 All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
