import Link from 'next/link';
import Image from 'next/image';

export function SiteHeader() {
  return (
    <header className='sticky top-6 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-center py-1'>
      <Link href='/' className='flex items-center space-x-2'>
        <Image src='logo.png' width={200} height={100} alt='logo' />
      </Link>
    </header>
  );
}
