import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Cta = () => {
    return (
        <section className='lg:m-16  mt-20  rounded-2xl md:grid grid-cols-2 gap-8 bg bg-gradient-to-t from-[#191919] to-[#292929] items-center flex flex-col '>
            <div className='col-span-1 flex flex-col gap-8 items-start lg:w-[550px]  md:p-10 lg:p-16 p-5'>
                <h1 data-aos="fade-up"
                    data-aos-duration="1000" className='font-bold text-2xl md:text-3xl'>Ready to Enhance Your Fintech App?</h1>

                <p data-aos="fade-up"
                    data-aos-duration="2000">Join the future of digital finance with our seamless, secure, and user-friendly stablecoin deposit solution.</p>
                <Link data-aos="fade-up"
                    data-aos-duration="3000" href="" className="bg-gradient-to-t from-[#245200] to-[#70FF00] px-6 py-2 rounded-full shadow-2xl border border-[#70FF00]">
                    Join Private Beta
                </Link>

            </div>
            <div data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom" data-aos-duration="3000" className='col-span-1 flex md:items-end items-center md:justify-end md:pr-16'>
                <Image src={"/last.svg"} alt='' height={100} width={350} className='w-72 lg:w-80' />
            </div>

        </section>
    )
}

export default Cta