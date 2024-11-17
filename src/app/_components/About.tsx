import Link from 'next/link';

interface Stat {
    amount: string;
    label: string;
}

const stats: Stat[] = [
    { amount: '456k', label: 'Macro Users from all over the globe' },
    { amount: '466M', label: "Macro's Revenue in 2023 in the first Quater" },
    { amount: '256%', label: 'Macro Investment Growth in 2023' },
];

const Box = ({ amount, label }: Stat) => (
    <div className='bg-background-3 rounded-3xl ~p-7/14 text-center flex-grow'>
        <h1 className='~text-4xl/6xl text-foreground-6'>{amount}</h1>
        <span className='block ~text-sm/lg ~mt-2/4 text-foreground-4'>
            {label}
        </span>
    </div>
);

const About = () => (
    <div className='max-w-screen-2xl w-full mx-auto ~mt-32/56 ~px-6/12'>
        <div className='relative flex lg:items-center ~gap-3/12 flex-col lg:flex-row'>
            <h1 className='font-semibold text-[250px] lg:text-[400px] absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 -z-50 text-foreground-5'>
                03
            </h1>

            <div className='lg:max-w-xl'>
                <span className='font-medium ~text-lg/2xl text-foreground-3'>
                    About Us
                </span>
                <h1 className='font-semibold ~text-2xl/6xl mt-2'>
                    Get to know More about Macro
                </h1>
            </div>

            <div className='flex flex-col gap-3'>
                <p className='~text-sm/base text-foreground-4'>
                    Lorem ipsum dolor sit amet consectetur. Vitae euismod nulla
                    erat morbi amet duis mattis. Ut neque facilisis etiam dolor
                    mauris leo nisl. Sed dictum a eget vestibulum vel vitae et
                    enim turpis.
                </p>
                <Link
                    href='/'
                    className='group font-medium flex items-center gap-5'
                >
                    <span>Get Started</span>
                    <img
                        src='/media/arrow.svg'
                        className='duration-150 group-hover:translate-x-3'
                    />
                </Link>
            </div>
        </div>

        <div className='flex flex-wrap ~gap-3/6 ~mt-6/12'>
            {stats.map((stat: Stat, index: number) => (
                <Box key={index} {...stat} />
            ))}
        </div>
    </div>
);

export { About };
