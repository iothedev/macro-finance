import { Button, Logo } from '@/components';
import Link from 'next/link';

const Footer = () => (
    <div className='~p-2/3 w-full ~mt-32/56'>
        <div className='bg-background-2 text-foreground-2 rounded-3xl ~px-6/12 ~py-12/24 overflow-hidden relative'>
            <img
                src='/media/footer-lines.png'
                className='absolute top-0 left-0 w-full h-full object-cover opacity-15 object-left-bottom'
            />

            <div className='relative flex flex-col items-center text-center mx-auto max-w-3xl'>
                <h1 className='font-semibold ~text-2xl/6xl'>
                    Join Macro for finance management
                </h1>
                <Button
                    variant='primary'
                    className='w-full sm:w-fit ~mt-6/12 rounded-3xl'
                >
                    Join Macro Now
                </Button>
            </div>

            <div className='relative ~mt-24/64'>
                <Logo className='mx-auto'/>

                <div className='~mt-4/8 flex items-center justify-around flex-wrap gap-6 text-center ~text-xs/lg'>
                    <Link href='/'>Terms & Agreements</Link>
                    <span>@2023 Macro All Rights Reserved</span>
                    <Link href='/'>Privacy Policy</Link>
                </div>
            </div>
        </div>
    </div>
);

export { Footer };
