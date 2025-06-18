'use client';

import {
  ArrowRight,
  CalendarIcon,
  HomeIcon,
  MailIcon,
  PencilIcon,
} from 'lucide-react';
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
      shapeRendering='geometricPrecision'
      textRendering='geometricPrecision'
      imageRendering='optimizeQuality'
      fillRule='evenodd'
      clipRule='evenodd'
      viewBox='0 0 512 512'
    >
      <path
        fill='#fff'
        fillRule='nonzero'
        d='M170.663 256.157c-.083-47.121 38.055-85.4 85.167-85.483 47.121-.092 85.407 38.03 85.499 85.16.091 47.129-38.047 85.4-85.176 85.492-47.112.09-85.399-38.039-85.49-85.169zm-46.108.091c.141 72.602 59.106 131.327 131.69 131.186 72.592-.141 131.35-59.09 131.209-131.692-.141-72.577-59.114-131.335-131.715-131.194-72.585.141-131.325 59.115-131.184 131.7zm237.104-137.091c.033 16.953 13.817 30.681 30.772 30.648 16.961-.033 30.689-13.811 30.664-30.764-.033-16.954-13.818-30.69-30.78-30.657-16.962.033-30.689 13.818-30.656 30.773zm-208.696 345.4c-24.958-1.087-38.511-5.234-47.543-8.709-11.961-4.629-20.496-10.178-29.479-19.094-8.966-8.95-14.532-17.46-19.202-29.397-3.508-9.032-7.73-22.569-8.9-47.527-1.269-26.982-1.559-35.077-1.683-103.432-.133-68.339.116-76.434 1.294-103.441 1.069-24.942 5.242-38.512 8.709-47.536 4.628-11.977 10.161-20.496 19.094-29.479 8.949-8.982 17.459-14.532 29.403-19.202 9.025-3.525 22.561-7.714 47.511-8.9 26.998-1.277 35.085-1.551 103.423-1.684 68.353-.132 76.448.108 103.456 1.295 24.94 1.086 38.51 5.217 47.527 8.709 11.968 4.628 20.503 10.144 29.478 19.094 8.974 8.95 14.54 17.443 19.21 29.412 3.524 9 7.714 22.553 8.892 47.494 1.285 26.999 1.576 35.095 1.7 103.433.132 68.355-.117 76.451-1.302 103.441-1.087 24.958-5.226 38.52-8.709 47.561-4.629 11.952-10.161 20.487-19.103 29.471-8.941 8.949-17.451 14.531-29.403 19.201-9.009 3.517-22.561 7.714-47.494 8.9-26.998 1.269-35.086 1.559-103.448 1.684-68.338.132-76.424-.125-103.431-1.294zM149.977 1.773c-27.239 1.285-45.843 5.648-62.101 12.018-16.829 6.561-31.095 15.354-45.286 29.604C28.381 57.653 19.655 71.944 13.144 88.79c-6.303 16.299-10.575 34.912-11.778 62.168C.172 178.264-.102 186.973.031 256.489c.133 69.508.439 78.234 1.741 105.547 1.302 27.231 5.649 45.828 12.019 62.093 6.569 16.83 15.353 31.088 29.611 45.288 14.25 14.201 28.55 22.918 45.404 29.438 16.282 6.295 34.902 10.583 62.15 11.778 27.305 1.203 36.022 1.468 105.521 1.335 69.532-.132 78.25-.439 105.555-1.733 27.239-1.303 45.826-5.665 62.1-12.019 16.829-6.586 31.095-15.353 45.288-29.611 14.191-14.251 22.917-28.55 29.428-45.405 6.304-16.282 10.592-34.903 11.777-62.134 1.195-27.322 1.478-36.048 1.344-105.556-.133-69.516-.447-78.225-1.741-105.523-1.294-27.255-5.657-45.844-12.019-62.118-6.577-16.829-15.352-31.079-29.602-45.287-14.25-14.192-28.55-22.935-45.404-29.429-16.29-6.305-34.903-10.601-62.15-11.779C333.747.164 325.03-.102 255.506.031c-69.507.133-78.224.431-105.529 1.742z'
      />
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
  navbar: [{ href: '#', icon: HomeIcon, label: 'Home' }],
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
      Email: {
        name: 'Send Email',
        url: 'mailto:designbylakshmika@gmail.com',
        icon: Icons.email,
      },
    },
  },
};

export function FloatingBar() {
  return (
    <div className='flex flex-col items-center justify-center fixed bottom-1 left-0 right-0 '>
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
          <button className='p-2 rounded-lg bg-[#7600DE]'>
            <Link href='#contact'>Contact Me</Link>
          </button>
        </Dock>
      </TooltipProvider>
    </div>
  );
}
