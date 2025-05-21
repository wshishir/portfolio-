import React from 'react';
import { FloatingDock } from '@/components/ui/floating-dock';
import {
  IconBrandBehance,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconExchange,
  IconHome,
  IconMail,
  IconNewSection,
  IconTerminal2,
} from '@tabler/icons-react';

export function FloatingBar() {
  const links = [
    {
      title: 'Home',
      icon: (
        <IconHome className='h-full w-full text-neutral-500 dark:text-neutral-300' />
      ),
      href: '/',
    },

    {
      title: 'LinkedIn',
      icon: (
        <IconBrandLinkedin className='h-full w-full text-neutral-500 dark:text-neutral-300' />
      ),
      href: 'https://www.linkedin.com/in/lakshmika-kesireddy/',
    },
    {
      title: 'Mail',
      icon: (
        <IconMail className='h-full w-full text-neutral-500 dark:text-neutral-300' />
      ),
      href: 'mailto:[designbylakshmika@gmail.com]',
    },
    {
      title: 'Behance',
      icon: (
        <IconBrandBehance className='h-full w-full text-neutral-500 dark:text-neutral-300' />
      ),
      href: 'https://www.behance.net/lakshmikesired',
    },
    {
      title: 'Instagram',
      icon: (
        <IconBrandInstagram className='h-full w-full text-neutral-500 dark:text-neutral-300' />
      ),
      href: 'https://www.instagram.com/designedbylaksh/',
    },
  ];
  return (
    <div className='fixed bottom-0 left-1/2 transform -translate-x-1/2 '>
      <div className='flex items-center justify-center h-[5rem] w-full'>
        <FloatingDock
          mobileClassName='translate-y-20' // only for demo, remove for production
          items={links}
        />
      </div>
    </div>
  );
}
