import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Cta = () => {
    return (
        <section className='md:m-16 m-3 mt-20  rounded-2xl md:grid grid-cols-2 gap-8 bg bg-gradient-to-t from-[#191919] to-[#292929] items-center flex flex-col-reverse '>
            <div className='col-span-1 flex flex-col gap-8 items-start lg:w-[550px] md:p-16 p-5'>
                <h1 className='font-bold md:text-3xl'>Ready to Enhance Your Fintech App?</h1>

                <p>Join the future of digital finance with our seamless, secure, and user-friendly stablecoin deposit solution.</p>
                <Link href="" className="bg-gradient-to-t from-[#245200] to-[#70FF00] px-6 py-2 rounded-full shadow-2xl border border-[#70FF00]">
                    Join Private Beta
                </Link>

            </div>
            <div className='col-span-1 flex md:items-end items-center md:justify-end md:pr-16'>
                <Image src={"/last.svg"} alt='' height={100} width={350} className='w-60 md:w-80' />
            </div>

        </section>
    )
}

export default Cta