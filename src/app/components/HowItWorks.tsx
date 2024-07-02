import Image from 'next/image'
import React from 'react'

const HowItWorks = () => {
    return (
        <section className='w-full flex flex-col items-center gap-16 p-10 mt-20'>
            <div className='flex flex-col gap-4 items-center'>
                <h5 className='bg-gradient-to-t from-[#222322] to-[#303130]  text-xl px-6 py-2 rounded-full inline' >
                    How it Works
                </h5>
                <h1 className='text-[40px] font-bold '>
                    The Process Unveiled
                </h1>
            </div>

            <main className=' grid grid-cols-2 gap-5 items-center justify-between'>
                <div className='col-span-1 flex flex-col gap-6 items-start'>

                    <h5 className='bg-gradient-to-t from-[#222322] to-[#303130]  text px-6 py-2 text-xl rounded-full inline' >
                        Step 1
                    </h5>
                    <h1 className='text-4xl font-bold'>Integrate</h1>
                    <p className='text-xl'>Follow our straightforward integration guide to add stablecoin deposit functionality to your app.</p>

                </div>
                <div className='col-span-1 flex items-end justify-end'>
                    <Image src={"/how.svg"} alt='' width={500} height={100} />
                </div>
            </main>



            <main className=' grid grid-cols-2 gap-5 jus justify-between items-center w-full'>
                <div className='col-span-1 flex items-end justify-start'>
                    <Image src={"/step2.svg"} alt='' width={500} height={100} />
                </div>
                <div className='col-span-1 flex flex-col gap-6 items-start'>
                    <h5 className='bg-gradient-to-t from-[#222322] to-[#303130]  text px-6 py-2 text-xl rounded-full inline' >
                        Step 2
                    </h5>
                    <h1 className='text-4xl font-bold'>Deposit</h1>
                    <p className='text-xl'>Users can deposit stablecoins directly from your app, with full control over their funds.</p>

                </div>
            </main>


            <main className=' grid grid-cols-2 gap-5 items-center justify-between'>
                <div className='col-span-1 flex flex-col gap-6 items-start'>

                    <h5 className='bg-gradient-to-t from-[#222322] to-[#303130]  text px-6 py-2 text-xl rounded-full inline' >
                        Step 3
                    </h5>
                    <h1 className='text-4xl font-bold'>Secure</h1>
                    <p className='text-xl'>Follow our straightforward integration guide to add stablecoin deposit functionality to your app.</p>
                </div>
                <div className='col-span-1 flex items-end justify-end'>
                    <Image src={"/step3.svg"} alt='' width={500} height={100} />
                </div>
            </main>
        </section>
    )
}

export default HowItWorks