"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Cta from './components/Cta';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const variants = {
  open: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  closed: { opacity: 0, x: "-100%", transition: { duration: 0.5 } },

};

const Page = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    })
  }, [])

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <section className="w-full   ">
      <div className="flex flex-col items-center w-full gap-10 md:gap-16" style={{ backgroundImage: 'url("/background.svg")', }}>
        <header className="w-full p-5 bg-[#111111] relative z-50">
          <main className="flex justify-between items-center w-full">
            <div className="flex items-center gap-2">
              <Image
                src="/aaa.png"
                alt=""
                width={35}
                height={50}
              // style={{
              //   boxShadow: '0px 10px 30px rgba(305, 355, 255, 0.4)'  // Even larger shadow
              // }}
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
              <Link href="" className="text-white">Documentation</Link>
              <Link href="">Pricing</Link>
            </nav>

            <div className="hidden md:flex">
              <Link href="" className="text-[#70FF00] border-[#70FF00] border-[1px] rounded-full p-2 px-3 text-sm">
                Join Private Beta
              </Link>
            </div>
          </main>

          {/* Dropdown Menu for Mobile */}
          <motion.div
            ref={menuRef}
            className={`md:hidden flex flex-col gap-4 mt-4 bg-[#111111] p-4 rounded-lg absolute top-full left-0 w-full z-40 ${isMenuOpen ? 'block' : 'hidden'}`}
            initial="closed"
            animate={isMenuOpen ? "open" : "closed"}
            variants={variants}
          >
            <Link href="" className="text-white">Documentation</Link>
            <Link href="" className="text-white">Pricing</Link>
            <Link href="" className="text-[#70FF00] border-[#70FF00] border-[1px] rounded-full p-2 px-3 text-sm text-center">
              Join Private Beta
            </Link>
          </motion.div>
        </header>

        <main className="flex flex-col items-center gap-6 p-5">
          <div data-aos-duration="1000" data-aos="fade-up" className="hidden md:text-5xl  lg:text-[4rem] md:flex flex-col items-center md:gap-4  font-bold bg-gradient-to-t from-[#a4a2a2] to-[#d6d7d6] bg-clip-text text-transparent">
            <h1 >Seamless Stablecoin Deposit</h1>
            <h1 >For Your Fintech App</h1>
          </div>

          <div data-aos-duration="1000" data-aos="fade-up" className="md:hidden  text-2xl md:text-[4rem] flex flex-col items-center md:gap-4  text-center font-bold bg-gradient-to-t from-[#a4a2a2] to-[#d6d7d6] bg-clip-text text-transparent">
            <h1>Seamless Stablecoin Deposit For Your Fintech App</h1>

          </div>


          <div data-aos-duration="3000" data-aos="fade-up" className="lg:w-[800px] md:w-[600px] text-center md:text-xl font-medium">
            <h6>Empower your customers with secure, non-custodial stablecoin deposits using our easy-to-integrate wallet infrastructure.</h6>
          </div>
          <Link data-aos-duration="3000" data-aos="fade-up" href="" className="bg-gradient-to-t from-[#245200] to-[#70FF00] px-6 py-2 rounded-full shadow-2xl border border-[#70FF00]">
            Join Private Beta
          </Link>
        </main>
      </div>

      <div>

      </div>

      <div data-aos-duration="3000" data-aos="fade-up" className="w-full pt-20 ">
        <Image src="/see.svg" alt="" width={100} height={100} className='object-fill md:w-full w-[90rem]' />
      </div>

      <Features />
      <HowItWorks />
      <Cta />
    </section>
  );
};

export default Page;
