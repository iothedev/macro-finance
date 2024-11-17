import { Logo, Button } from '@/components';
import Link from 'next/link';

const Header = () => (
    <div className='px-4 py-2 relative w-full flex items-center justify-between'>
        <Logo />

        <div className='text-center ~text-sm/base font-medium space-x-12 hidden md:block'>
            <Link href='/'>Features</Link>
            <Link href='/'>Pricing</Link>
            <Link href='/'>About Us</Link>
            <Link href='/'>FAQ</Link>
        </div>

        <Button variant='primary' href='/' className='hidden md:block'>
            Get Started
        </Button>
    </div>
);

export { Header };
