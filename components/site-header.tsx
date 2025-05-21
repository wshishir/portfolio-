import Link from 'next/link';
import { Button } from './ui/button';

export function SiteHeader() {
  return (
    <header className='sticky top-1.5 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-16 max-w-3xl items-center justify-between'>
        <Link href='/' className='flex items-center space-x-2'>
          <span className='text-xl font-bold tracking-tight'>
            Lakshmika & Co.
          </span>
        </Link>
        <Button className='text-white bg-[#7600DE] hover:bg-[#7600DE] rounded-full '>
          Contact me
        </Button>
      </div>
    </header>
  );
}
