"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import logo from "../public/logo.png";
import { LaunchLink, LinkText } from "./Links";
import { navVariants } from "@/utils/motion";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { MobileMenuContext } from "@/contexts/MobileMenuContext";

const Navbar = () => {
  const { opened, changeOpened } = useContext(MobileMenuContext);
  const [isActiveMenu, setActiveMenu] = useState(false);

  useEffect(() => {
    // Function to handle scrolling to the section
    const handleScrollToSection = (e: MouseEvent) => {
      e.preventDefault();
      const target = e.target as HTMLAnchorElement;
      const targetId = target.getAttribute('href')?.substring(1);
      if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Attach click event listeners to all links with the class 'scroll-link'
    const scrollLinks = document.querySelectorAll('.scroll-link');
    scrollLinks.forEach((link) => {
      link.addEventListener('click', handleScrollToSection as EventListener);
    });

    // Clean up event listeners on component unmount
    return () => {
      scrollLinks.forEach((link) => {
        link.removeEventListener('click', handleScrollToSection as EventListener);
      });
    };
  }, []);

  const handleMenu = () => {
    changeOpened();
  };

  const openMenu = () => {
    setActiveMenu(!isActiveMenu);
  };
  
  return (
    <motion.nav
      className="px-6 xl:container md:w-full mx-auto py-2 sticky top-0 backdrop-blur-lg z-50"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={navVariants}
    >
      <div className="flex justify-between">
        <Link href="#">
          <Image src={logo} alt="logo" />
        </Link>
        <div className="self-center">
          <div className={`lg:flex items-center gap-6 mobile-menu ${isActiveMenu ? "menu-open" : ""}`} >
            <div className="hidden max-lg:block text-end text-white absolute right-4 cursor-pointer">
              <svg onClick={openMenu} className="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
            </div>
            <LinkText href="#ecosystem" text="Ecosystem" active />
            <LinkText href="#community" text="Community" />
            <LinkText href="#governance" text="Governance" />
            <LinkText href="#developers" text="Developers" />
            <LinkText href="#" text="Blog" />
            <LinkText href="#" text="FAQ" />
            <LinkText href="#" text="Jobs" />
            <LaunchLink href="#" text="Launch App" />
          </div>
        </div>
        <motion.button
          className="p-3 self-center flex lg:hidden flex-col items-end gap-[6px] bg-[#333437] rounded-md hover:rounded-xl transition-all"
          onClick={openMenu}
        >
          <span className="w-[28px] h-0.5 bg-[#7A7A7A] rounded-sm" />
          <span className="w-[20px] h-0.5 bg-[#7A7A7A] rounded-sm" />
          <span className="w-[20px] h-0.5 bg-[#7A7A7A] rounded-sm" />
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
