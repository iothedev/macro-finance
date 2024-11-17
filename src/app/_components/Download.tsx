import Link from 'next/link';

interface Platform {
    icon: string;
    label: string;
    name: string;
    href: string;
}

const platforms: Platform[] = [
    {
        icon: 'google-play.svg',
        label: 'Get it now',
        name: 'Google Play',
        href: 'https://play.google.com/',
    },
    {
        icon: 'apple.svg',
        label: 'Download on the',
        name: 'Apple Store',
        href: 'https://www.apple.com/uk/app-store/',
    },
];

const Platform = ({ icon, label, name, href }: Platform) => (
    <Link
        href={href}
        target='_blank'
        className='flex items-center justify-center gap-4 bg-background-2 text-foreground-2 rounded-xl px-8 py-3 shrink-0 w-full md:w-fit'
    >
        <img src={`/media/icons/platforms/${icon}`} className='w-6' />
        <div className='flex flex-col font-medium'>
            <span className='text-xs uppercase'>{label}</span>
            <span className='~text-base/xl'>{name}</span>
        </div>
    </Link>
);

const Download = () => (
    <div className='max-w-screen-2xl w-full mx-auto ~mt-10/20 ~px-6/12'>
        <div className='flex items-center justify-between ~gap-6/12 flex-col md:flex-row'>
            <p className='~text-sm/lg text-foreground-3 max-w-3xl flex-1'>
                Financial Freedom: Central Bank of Nigeria (CBN) is giving you
                the opportunity to manage your personal finances with ease using
                our verifiably secure Personal e-Wallet. Get the app for
                yourself.
            </p>

            <div className='flex ~gap-2/4 flex-col md:flex-row w-full md:w-fit'>
                {platforms.map((platform: Platform, index: number) => (
                    <Platform key={index} {...platform} />
                ))}
            </div>
        </div>
    </div>
);

export { Download };
