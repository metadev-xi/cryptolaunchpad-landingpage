"use client";
import {
  ArrowLink,
  Block,
  Title,
  Text,
  ButtonLink,
  DiagArrowLink,
} from "@/components";
import { developersBg, apply } from "@/assets/images";
import Image from "next/image";

import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";

const Developers = () => {
  return (
    <section className="py-8 px-6 container mx-auto" id="developers">
      <div className="mb-4">
        <ArrowLink text="DEVELOPERS" href="#" />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <motion.div
          className="col-span-2 flex flex-col justify-between max-lg:col-span-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={slideIn({ direction: "left", delay: 0.6, duration: 0.6 })}
        >
          <Block
            imgSrc={developersBg}
            imgAlt="developers"
            imgStyles="w-full h-[421px]"
            blockStyles="w-full h-[421px] p-8 flex justify-end  flex flex-col gap-4 mb-4"
          >
            <div className="max-w-xl flex flex-col gap-4 z-20">
              <Title type="title1" text="Superpowers for DeFi developers." />
              <Text text="Build Defi apps and tools on the largest crypto project on Ethereum. Get started with quick start guides, protocol documentation, a Javascript SDK, and fully open source code." />
              <ButtonLink text="Documentation" href="#" />
            </div>
          </Block>
          <div className="grid grid-cols-2 gap-4">
            <Block blockStyles="flex col-span-1 max-sm:col-span-2">
              <div className="w-full h-full p-6 flex items-center">
                <DiagArrowLink text="V3 Whitepaper" href="#" space />
              </div>
            </Block>
            <Block blockStyles="flex col-span-1 max-sm:col-span-2">
              <div className="w-full h-full p-6 flex items-center">
                <DiagArrowLink text="Github" href="#" space />
              </div>
            </Block>
          </div>

        </motion.div>

        <motion.div
          className="col-span-1 max-lg:col-span-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={slideIn({ direction: "left", delay: 0.8, duration: 0.8 })}
        >
          <Block blockStyles="p-8 h-full">
            <div className="w-full h-full flex flex-col gap-5">
              <Image src={apply} alt="apply" />
              <Title
                type="title2"
                text="Apply for funding from the Crypto Launchpad Grants Program"
              />
              <Text text="Get paid to build the future of finance. Crypto Launchpad Governance offers grant funding for people building apps, tools, and activities on the Crypto Launchpad Protocol." />
              <ButtonLink text="Documentation" href="#" />
            </div>
          </Block>
        </motion.div>
        {/* <motion.div
          className="col-span-1"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={slideIn({ direction: "left", delay: 0.8, duration: 0.7 })}
        >
          <Block blockStyles="flex">
            <div className="w-full h-full p-6 flex items-center">
              <DiagArrowLink text="V3 Whitepaper" href="#" space />
            </div>
          </Block>
        </motion.div>

        <motion.div
          className="col-span-1"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={slideIn({ direction: "left", delay: 0.9, duration: 0.8 })}
        >
          <Block blockStyles="flex">
            <div className="w-full h-full p-6 flex items-center">
              <DiagArrowLink text="Github" href="#" space />
            </div>
          </Block>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Developers;
