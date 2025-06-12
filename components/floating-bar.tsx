'use client';

import { CalendarIcon, HomeIcon, MailIcon, PencilIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import { buttonVariants } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { Dock, DockIcon } from '@/components/ui/float';
import Behance from '@/public/icons/image.png';

export type IconProps = React.HTMLAttributes<SVGElement>;

const Icons = {
  calendar: (props: IconProps) => <CalendarIcon {...props} />,
  email: (props: IconProps) => <MailIcon {...props} />,
  linkedin: (props: IconProps) => (
    <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' {...props}>
      <title>LinkedIn</title>
      <path
        fill='currentColor'
        d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
      />
    </svg>
  ),
  instagram: (props: IconProps) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      x='0px'
      y='0px'
      width='100'
      height='100'
      viewBox='0,0,256,256'
      className='fill:#FFFFFF;'
      {...props}
    >
      <g
        fill='#ffffff'
        strokeLinecap='butt'
        strokeLinejoin='miter'
        strokeMiterlimit='10'
        className='mix-blend-mode: normal'
      >
        <g transform='scale(4,4)'>
          <path d='M21.58008,7c-8.039,0 -14.58008,6.54494 -14.58008,14.58594v20.83203c0,8.04 6.54494,14.58203 14.58594,14.58203h20.83203c8.04,0 14.58203,-6.54494 14.58203,-14.58594v-20.83398c0,-8.039 -6.54494,-14.58008 -14.58594,-14.58008zM47,15c1.104,0 2,0.896 2,2c0,1.104 -0.896,2 -2,2c-1.104,0 -2,-0.896 -2,-2c0,-1.104 0.896,-2 2,-2zM32,19c7.17,0 13,5.83 13,13c0,7.17 -5.831,13 -13,13c-7.17,0 -13,-5.831 -13,-13c0,-7.169 5.83,-13 13,-13zM32,23c-4.971,0 -9,4.029 -9,9c0,4.971 4.029,9 9,9c4.971,0 9,-4.029 9,-9c0,-4.971 -4.029,-9 -9,-9z'></path>
        </g>
      </g>
    </svg>
  ),
  Behance: (props: IconProps) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      x='0px'
      y='0px'
      width='100'
      height='100'
      viewBox='0,0,256,256'
    >
      <g
        fill='#ffffff'
        fillRule='nonzero'
        stroke='none'
        strokeWidth='1'
        strokeLinecap='butt'
        strokeLinejoin='miter'
        strokeMiterlimit='10'
        className='mix-blend-mode: normal'
      >
        <g transform='scale(8,8)'>
          <path d='M1,6.75v18.5h8.9375c0.82813,0 6.53125,-0.16797 6.53125,-5.375c0,-3.25391 -2.23828,-4.35937 -3.375,-4.6875c0.83594,-0.39453 2.5,-1.33203 2.5,-3.84375c0,-1.39844 -0.19922,-4.59375 -5.90625,-4.59375zM21.375,8.46875v1.6875h6.90625v-1.6875zM5.0625,9.90625h3.8125c0.35938,0 2.78125,-0.19141 2.78125,2.125c0,1.98047 -1.75,2.1875 -2.46875,2.1875h-4.125zM25,11.6875c-5.22266,0 -6.3125,4.53516 -6.3125,6.5c0,5.83203 4.78125,6.5 6.3125,6.5c4.12891,0 5.30078,-2.67187 5.78125,-4.15625h-3c-0.11719,0.38281 -0.99219,1.625 -2.65625,1.625c-2.78906,0 -3.03125,-2.17969 -3.03125,-3.15625h8.875c0.17969,-3.375 -1.29687,-7.3125 -5.96875,-7.3125zM24.90625,14.21875c0.83203,0 1.50391,0.24219 1.90625,0.6875c0.40234,0.44922 0.69922,1.10547 0.78125,1.96875h-5.5c0.01563,-0.23828 0.07031,-0.51172 0.15625,-0.8125c0.08594,-0.30859 0.21875,-0.60156 0.4375,-0.875c0.21875,-0.26953 0.52344,-0.50391 0.875,-0.6875c0.35938,-0.1875 0.80469,-0.28125 1.34375,-0.28125zM5.0625,17h4.40625c0.875,0 2.9375,0.13672 2.9375,2.65625c0,2.44141 -2.59766,2.4375 -3,2.4375h-4.34375z'></path>
        </g>
      </g>
    </svg>
  ),
};

const DATA = {
  navbar: [
    { href: '#', icon: HomeIcon, label: 'Home' },
  ],
  contact: {
    social: {
      Instagram: {
        name: 'Instagram',
        url: 'https://www.instagram.com/designedbylaksh/',
        icon: Icons.instagram,
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/lakshmika-kesireddy/',
        icon: Icons.linkedin,
      },
      Behance: {
        name: 'Behance',
        url: 'https://www.behance.net/lakshmikesired',
        icon: Icons.Behance,
      },
      email: {
        name: 'Send Email',
        url: 'mailto:designbylakshmika@gmail.com',
        icon: Icons.email,
      },
    },
  },
};

export function FloatingBar() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <TooltipProvider>
        <Dock direction='middle'>
          {DATA.navbar.map((item) => (
            <DockIcon key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    aria-label={item.label}
                    className={cn(
                      buttonVariants({ variant: 'ghost', size: 'icon' }),
                      'size-12 rounded-full'
                    )}
                  >
                    <item.icon className='size-4' />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator orientation='vertical' className='h-full' />
          {Object.entries(DATA.contact.social).map(([name, social]) => (
            <DockIcon key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={social.url}
                    aria-label={social.name}
                    className={cn(
                      buttonVariants({ variant: 'ghost', size: 'icon' }),
                      'size-12 rounded-full'
                    )}
                  >
                    <social.icon className='size-4' />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator orientation='vertical' className='h-full py-2' />
          <button className='p-2 border rounded-lg bg-[#7600DE]'>Contact me</button>
        </Dock>
      </TooltipProvider>
    </div>
  );
}
