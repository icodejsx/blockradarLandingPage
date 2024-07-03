import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <section className='px-10 pb-4  pt-20 flex flex-col w-full gap-20'>
            <div className=' flex items-start gap-24 justify-start'>
                <div className=''>

                    <Image src={"/d.png"} alt='' width={200} height={100} />
                </div>
                <main className='flex flex-col gap-4'>
                    <p className=''>Links</p>
                    <div className='flex flex-col gap-5 text-[#B7B7B7]'>
                        <Link href={""}> About Us</Link>
                        <Link href={""}> Features </Link>
                        <Link href={""}> Pricing </Link>
                    </div>
                </main>

                <main className='flex flex-col gap-4'>
                    <p className=''>Socials</p>
                    <div className='flex flex-col gap-5 text-[#B7B7B7]'>
                        <Link href={""}>Linkedin</Link>
                        <Link href={""}> Twitter </Link>
                        <Link href={""}> Facebook </Link>
                    </div>
                </main>
            </div>
            <div className='flex justify-between'>
                <p className='text-[#696969] text-xs'>2024 Blocktadar Company Group. All right reserved.</p>
                <div className='flex items-center gap-3 text-sm text-[#B7B7B7]'>
                    <Link href={""} >Privacy Policy</Link>
                    <Link href={""} >Terms of Use</Link>

                </div>
            </div>
        </section>
    )
}

export default Footer