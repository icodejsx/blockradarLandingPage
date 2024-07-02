import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <section className='flex justify-between items-center '>
            {/* <div className='flex items-center gap-2 '>
                <Image src={"/logg.jpg"} alt='' width={35} height={50} />
                <Image src={"/lo.svg"} alt='' width={100} height={100} />
            </div>

            <div className='flex gap-8 items-center'>
                <Link href={""}>
                    Documentation
                </Link>
                <Link href={""}>
                    Pricing
                </Link>
            </div>

            <Link href={""} className='text-[#70FF00] border-[#70FF00] border-[1px] rounded-full p-2 text-sm  '>
                Join Private Beta
            </Link> */}
        </section>
    )
}

export default Navbar