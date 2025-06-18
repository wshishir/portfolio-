import Link from 'next/link';
import { Button } from './ui/button';
import Image from 'next/image';

export function SiteHeader() {
  return (
    <header className='sticky top-1.5 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-16 max-w-3xl items-center justify-center'>
        <Link href='/' className='flex items-center space-x-2'>
          <Image src='logo.png' width={120} height={40} alt='logo'/>
        </Link>
      </div>
    </header>
  );
}
