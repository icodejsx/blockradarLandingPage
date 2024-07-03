"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Cta from './components/Cta';
import { FiMenu, FiX } from 'react-icons/fi';

const Page = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="w-full   ">
      <div className="flex flex-col items-center w-full gap-16" style={{ backgroundImage: 'url("/background.svg")', }}>
        <header className="w-full p-5">
          <main className="flex justify-between items-center w-full">
            <div className="flex items-center gap-2">
              <Image
                src="/aaa.png"
                alt=""
                width={35}
                height={50}
                style={{
                  boxShadow: '0px 10px 30px rgba(305, 355, 255, 0.4)'  // Even larger shadow
                }}
              />
              <Image src="/lo.svg" alt="" width={100} height={100} />
            </div>

            {/* Hamburger Icon for Mobile */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-2xl focus:outline-none text-white">
                {isMenuOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>

            {/* Links and Button for Desktop */}
            <nav className="hidden md:flex gap-8 items-center">
              <Link href=""
                className="text-white">Documentation
              </Link>
              <Link href="">
                Pricing
              </Link>
            </nav>

            <div className="hidden md:flex">
              <Link href="" className="text-[#70FF00] border-[#70FF00] border-[1px] rounded-full p-2 px-3 text-sm">
                Join Private Beta

              </Link>
            </div>
          </main>

          {/* Dropdown Menu for Mobile */}
          {isMenuOpen && (
            <div className="md:hidden flex flex-col gap-4 mt-4 relative bg-[] p-4 rounded-lg">
              <Link href="" className="text-white">Documentation
              </Link>
              <Link href="" className="text-white">Pricing
              </Link>
              <Link href="" className="text-[#70FF00] border-[#70FF00] border-[1px] rounded-full p-2 px-3 text-sm text-center">
                Join Private Beta

              </Link>
            </div>
          )}
        </header>
        <main className="flex flex-col items-center gap-6 p-5">
          <div className="hidden  md:text-[4rem] md:flex flex-col items-center md:gap-4  font-bold bg-gradient-to-t from-[#a4a2a2] to-[#d6d7d6] bg-clip-text text-transparent">
            <h1>Seamless Stablecoin Deposit</h1>
            <h1>For Your Fintech App</h1>
          </div>

          <div className="md:hidden  text-3xl md:text-[4rem] flex flex-col items-center md:gap-4  text- font-bold bg-gradient-to-t from-[#a4a2a2] to-[#d6d7d6] bg-clip-text text-transparent">
            <h1>Seamless Stablecoin Deposit For Your Fintech App</h1>

          </div>


          <div className="lg:w-[800px] md:text-center md:text-xl font-medium">
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
