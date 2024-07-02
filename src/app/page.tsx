import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Cta from './components/Cta';

const Page = () => {
  return (
    <section className="w-full   ">
      <div className="flex flex-col items-center w-full gap-16" style={{ backgroundImage: 'url("/background.svg")', }}>
        <main className="flex justify-between items-center p-5 w-full">
          <div className="flex items-center gap-2">
            <Image src="/logg.jpg" alt="" width={35} height={50} />
            <Image src="/lo.svg" alt="" width={100} height={100} />
          </div>

          <div className="flex gap-8 items-center">
            <Link href="">
              Documentation
            </Link>
            <Link href="">
              Pricing
            </Link>
          </div>

          <Link href="" className="text-[#70FF00] border-[#70FF00] border-[1px] rounded-full p-2 px-3 text-sm">
            Join Private Beta
          </Link>
        </main>
        <main className="flex flex-col items-center gap-6">
          <div className="text-[4rem] flex flex-col items-center gap-4 font-bold bg-gradient-to-t from-[#a4a2a2] to-[#d6d7d6] bg-clip-text text-transparent">
            <h1>Seamless Stablecoin Deposit</h1>
            <h1>For Your Fintech App</h1>
          </div>

          <div className="w-[800px] text-center text-xl font-medium">
            <h6>Empower your customers with secure, non-custodial stablecoin deposits using our easy-to-integrate wallet infrastructure.</h6>
          </div>
          <Link href="" className="bg-gradient-to-t from-[#245200] to-[#70FF00] px-6 py-2 rounded-full shadow-2xl border border-[#70FF00]">
            Join Private Beta
          </Link>
        </main>
      </div>

      <div>

      </div>

      <div className="w-full pt-20 ">
        <Image src="/see.svg" alt="" width={100} height={100} className='object-fill w-full' />
      </div>

      <Features />
      <HowItWorks />
      <Cta />
    </section>
  );
};

export default Page;
