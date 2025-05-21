'use client';
import Image from 'next/image';
import Logo1 from '@/public/logos-01.png';
import Logo2 from '@/public/logos-02.png';
import Logo3 from '@/public/logos-03.png';
import Logo4 from '@/public/logos-04.png';
import Logo5 from '@/public/logos-05.png';
import Logo6 from '@/public/logos-06.png';
import Logo7 from '@/public/logos-07.png';
import Logo8 from '@/public/logos-08.png';
import { motion } from 'framer-motion';

export const LogoTicker = () => {
  return (
    <div className=' bg-black'>
      <div className='container'>
        <div className='flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
          <motion.div
            className='flex gap-14 flex-none pr-14'
            animate={{
              translateX: '-50%',
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
              repeatType: 'loop',
            }}
          >
            <Image src={Logo1} alt='logo' className='logo-ticker-image' />
            <Image src={Logo2} alt='logo' className='logo-ticker-image' />
            <Image src={Logo3} alt='logo' className='logo-ticker-image' />
            <Image src={Logo4} alt='logo' className='logo-ticker-image' />
            <Image src={Logo5} alt='logo' className='logo-ticker-image' />
            <Image src={Logo6} alt='logo' className='logo-ticker-image' />
            <Image src={Logo1} alt='logo' className='logo-ticker-image' />
            <Image src={Logo2} alt='logo' className='logo-ticker-image' />
            <Image src={Logo3} alt='logo' className='logo-ticker-image' />
            <Image src={Logo4} alt='logo' className='logo-ticker-image' />
            <Image src={Logo5} alt='logo' className='logo-ticker-image' />
            <Image src={Logo6} alt='logo' className='logo-ticker-image' />
            <Image src={Logo7} alt='logo' className='logo-ticker-image' />
            <Image src={Logo8} alt='logo' className='logo-ticker-image' />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
