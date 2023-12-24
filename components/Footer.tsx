"use client";

import { discord, github, twitter } from "@/assets/icons";
import { slideIn } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { LinkText } from "./";

const Footer = () => {
  return (
    <motion.footer
      className="container mx-auto py-8 px-6"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={slideIn({ direction: "down", delay: 0.8, duration: 0.4 })}
    >
      <div className="">
        <div className="flex flex-wrap gap-x-6 gap-y-3 mb-6">
          <LinkText href="#ecosystem" text="Ecosystem" />
          <LinkText href="#" text="Community" />
          <LinkText href="#governance" text="Governance" />
          <LinkText href="#developers" text="Developers" />
          <LinkText href="#" text="Blog" />
          <LinkText href="#" text="FAQ" />
          <LinkText href="#" text="Privacy Policy" />
          <LinkText href="#" text="Trademark Policy" />
          <LinkText href="#" text="Security" />
        </div>

      </div>
      <div className="flex justify-between items-center">
        <div className="text-xs text-secondary-text font-light self-center">
          Media inquires for Crypto Launchpad - Contact
          <Link href="#" className="pl-2 font-medium text-primary-text">
            media@cryptolaunchpad.com
          </Link>
        </div>
        <div className="flex items-center gap-3 opacity-40 max-md:flex-none">
          <Image src={twitter} alt="twitter" />
          <Image src={github} alt="github" />
          <Image src={discord} alt="discord" />
        </div>
      </div>

    </motion.footer>
  );
};

export default Footer;
