import { Button } from '@/components';

const MoneyManagement = () => (
    <div className='max-w-screen-2xl w-full mx-auto ~mt-32/56 ~px-6/12'>
        <div className='relative rounded-3xl bg-background-2 text-foreground-2 ~px-6/12 ~py-16/44'>
            <img
                src='/media/money-lines.png'
                className='absolute top-0 left-0 w-full h-full object-cover opacity-15'
            />

            <div className='relative flex flex-col max-w-2xl'>
                <h1 className='font-semibold text-[250px] lg:text-[400px] absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-foreground-5 opacity-5 pointer-events-none'>
                    02
                </h1>
                <h1 className='font-semibold ~text-2xl/5xl'>
                    Simple way to manage your money
                </h1>
                <p className='~text-xs/base ~mt-3/6'>
                    Lorem ipsum dolor sit amet consectetur. Vitae euismod nulla
                    erat morbi amet duis mattis. Ut neque facilisis etiam dolor
                    mauris leo nisl. Sed dictum a eget vestibulum vel vitae et
                    enim turpis. Nunc facilisi sed dignissim purus erat
                    adipiscing adipiscing pellentesque. Quis amet vitae
                    pellentesque molestie adipiscing etiam.
                </p>
                <Button variant='primary' className='~mt-3/6 w-full sm:w-fit rounded-3xl'>
                    Digitize Now
                </Button>
            </div>

            <div className='absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block'>
                    <img
                        src='/media/cards.png'
                        className='w-full max-w-md translate-x-32'
                    />
            </div>
        </div>
    </div>
);

export { MoneyManagement };
