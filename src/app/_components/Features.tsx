import { Button } from '@/components';
import clsx from 'clsx';

interface Feature {
    name: string;
    icon: string;
    description: string;
    isActive?: boolean;
}

const features: Feature[] = [
    {
        name: 'Protection',
        icon: 'shield.svg',
        description:
            'Lorem ipsum dolor sit amet consectetur. Vitae euismod nulla',
    },
    {
        name: 'Flexibility',
        icon: 'flexibility.svg',
        description:
            'Lorem ipsum dolor sit amet consectetur. Vitae euismod nulla',
    },
    {
        name: 'Tracking',
        icon: 'graph.svg',
        description:
            'Lorem ipsum dolor sit amet consectetur. Vitae euismod nulla',
        isActive: true,
    },
    {
        name: 'Easiness',
        icon: 'heart.svg',
        description:
            'Lorem ipsum dolor sit amet consectetur. Vitae euismod nulla',
    },
];

const Box = ({ name, icon, description, isActive }: Feature) => (
    <div
        className={clsx(
            'bg-background-3 rounded-3xl ~p-3/4 text-center w-full',
            isActive && '!bg-background-2 text-foreground-2'
        )}
    >
        <span className='font-medium ~text-sm/lg'>{name}</span>
        <img
            src={`/media/icons/features/${icon}`}
            className='mx-auto max-h-16 ~my-3/5'
        />
        <span className='~text-xs/sm'>{description}</span>
    </div>
);

const Text = () => (
    <div className='relative flex flex-col max-w-2xl'>
        <h1 className='font-semibold text-[250px] lg:text-[400px] absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 -z-50 text-foreground-5'>
            01
        </h1>

        <span className='font-medium ~text-lg/2xl text-foreground-3'>
            Features
        </span>
        <h1 className='font-semibold ~text-2xl/6xl mt-2'>
            Best Features Given by Macro
        </h1>
        <p className='~text-sm/base text-foreground-4 ~mt-3/6'>
            Why is accounting so hard? Because managing personal finances is not
            just about accounting, but it's also about organizing your expenses
            and income. This tool lets you to quickly set-up a personal budget
            and track your daily expenses and income
        </p>
        <Button
            variant='primary'
            className='w-full sm:w-fit rounded-3xl ~mt-3/6'
        >
            Digitize Now
        </Button>
    </div>
);

const Features = () => (
    <div className='max-w-screen-2xl w-full mx-auto ~mt-32/56 ~px-6/12'>
        <div className='flex xl:items-center justify-between ~gap-6/12 flex-col xl:flex-row'>
            <Text />

            <div className='mt-4 sm:mt-0 flex gap-4 flex-1 xl:max-w-xl'>
                <div className='~mt-3/6 flex flex-col gap-4 w-full'>
                    <Box {...features[0]} />
                    <Box {...features[1]} />
                </div>
                <div className='~-mt-3/6 flex flex-col gap-4 w-full'>
                    <Box {...features[2]} />
                    <Box {...features[3]} />
                </div>
            </div>
        </div>
    </div>
);

export { Features };
