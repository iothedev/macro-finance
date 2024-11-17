import { Button, Header } from '@/components';

const Text = () => (
    <div className='max-w-screen-2xl w-full mx-auto ~px-4/10 ~my-10/16'>
        <div className='flex lg:items-center justify-between lg:gap-12'>
            <h1 className='capitalize font-semibold ~text-3xl/7xl !leading-tight whitespace-nowrap'>
                Manage your
            </h1>
            <p className='~mt-4/8 ~text-sm/base lg:mt-0 max-w-xl hidden lg:block'>
                Manage your personal finances the easy way - See all your
                accounts in one place and get insights, so you can make informed
                choices about your money.
            </p>
        </div>
        <h1 className='capitalize font-semibold ~text-3xl/7xl !leading-tight max-w-4xl'>
            personal finances the easy way
        </h1>

        <p className='~mt-4/8 ~text-sm/base block lg:hidden'>
            Manage your personal finances the easy way - See all your accounts
            in one place and get insights, so you can make informed choices
            about your money.
        </p>

        <div className='~mt-6/12 gap-6 flex items-center sm:items-start justify-between flex-col sm:flex-row'>
            <Button
                variant='primary'
                href='/'
                className='rounded-3xl w-full sm:w-fit'
            >
                Digitize Now
            </Button>

            <div className='flex flex-col gap-3 items-center'>
                <div className='flex items-center'>
                    {Array.from({ length: 3 }, (_, index) => (
                        <img
                            key={index}
                            src={`/media/people/person-${index + 1}.png`}
                            className='h-12 w-12 shrink-0 rounded-full  border-background-2 bg-background-2 -ml-2'
                        />
                    ))}

                    <h1 className='ml-4 font-medium ~text-2xl/4xl'>10M</h1>
                </div>
                <div className='flex items-center gap-3'>
                    <div className='h-2 w-2 bg-accent-1 rounded-full' />
                    <span className='font-medium ~text-xs/sm'>
                        Active Users Worldwide
                    </span>
                </div>
            </div>
        </div>
    </div>
);

const Hero = () => (
    <div className='~p-2/3 w-full'>
        <div className='bg-background-2 text-foreground-2 rounded-3xl ~p-4/12 overflow-hidden relative'>
            <img
                src='/media/line.svg'
                className='absolute top-0 left-0 w-full h-full pointer-events-none'
            />

            <Header />
            <Text />
        </div>
    </div>
);

export { Hero };
