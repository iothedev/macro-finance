import clsx from 'clsx';

import Image from 'next/image';
import Link from 'next/link';

const Logo = ({ className }: { className?: string }) => (
    <Link href='/' className={clsx('flex items-center gap-3 w-fit', className)}>
        <Image src='/media/logo.svg' alt='Logo' height={26} width={48} />
        <h1 className='~text-base/2xl font-semibold'>Macro</h1>
    </Link>
);

export { Logo };
