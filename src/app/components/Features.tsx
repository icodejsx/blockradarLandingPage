import Image from 'next/image'
import React from 'react'

const Features = () => {
    return (
        <section className='w-full flex flex-col items-center gap-16 p-10'>
            <div className='flex flex-col gap-4 items-center'>
                <h5 className='bg-gradient-to-t from-[#222322] to-[#303130]  text-xl px-6 py-2 rounded-full inline' >
                    Features
                </h5>
                <h1 className='text-[40px] font-bold '>
                    Why Our Solution Stands Out
                </h1>
            </div>

            <main className=' grid grid-cols-4 gap-5'>
                <div className='col-span-1 p-5 bg-[#191919] rounded-lg flex flex-col gap-9'>
                    <Image src="1.svg" alt='' width={40} height={10} />
                    <div className='flex flex-col gap-3 py-'>
                        <p className='font-bold text-[#FEFEFE] text-[16px]'> Seamless Integration</p>
                        <h1 className='text-[#B2B5B3] text-sm'>Our wallet infrastructure is designed for effortless integration. Get up and running with stablecoin deposits in no time.</h1>
                    </div>
                </div>

                <div className='col-span-1 p-5 bg-[#191919] rounded-lg flex flex-col gap-9'>
                    <Image src="2.svg" alt='' width={40} height={10} />
                    <div className='flex flex-col gap-3 py-'>
                        <p className='font-bold text-[#FEFEFE] text-[16px]'> Non-Custodial Security</p>
                        <h1 className='text-[#B2B5B3] text-sm'>Your users retain full control over their funds. Enjoy peace of mind with our secure, non-custodial solution.</h1>
                    </div>
                </div>

                <div className='col-span-1 p-5 bg-[#191919] rounded-lg flex flex-col gap-9'>
                    <Image src="3.svg" alt='' width={40} height={10} />
                    <div className='flex flex-col gap-3 py-'>
                        <p className='font-bold text-[#FEFEFE] text-[16px]'> User Empowerment</p>
                        <h1 className='text-[#B2B5B3] text-sm'>Enhance your app’s functionality and offer your users the stability and convenience of stablecoins.</h1>
                    </div>
                </div>

                <div className='col-span-1 p-5 bg-[#191919] rounded-lg flex flex-col gap-9'>
                    <Image src="4.svg" alt='' width={40} height={10} />
                    <div className='flex flex-col gap-3 py-'>
                        <p className='font-bold text-[#FEFEFE] text-[16px]'>Developer-Friendly</p>
                        <h1 className='text-[#B2B5B3] text-sm'>Enhance your app’s functionality and offer your users the stability and convenience of stablecoins.</h1>
                    </div>
                </div>
            </main>

        </section>
    )
}

export default Features