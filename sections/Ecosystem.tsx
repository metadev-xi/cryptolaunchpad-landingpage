"use client";

import { ecosystemBg } from "@/assets/images";
import { Counter, Title, Text, ArrowLink, Block } from "@/components";
import { slideIn } from "@/utils/motion";
import { motion } from "framer-motion";

const Ecosystem = () => {
  return (
    <section className="py-16 px-6 container mx-auto" id='ecosystem'>
      <div className="flex text-white flex-wrap">
        <div className="w-1/2 max-md:w-full pr-3 max-md:pr-0 max-md:mb-8">
          <motion.div
            className="flex-1 flex flex-col gap-7"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={slideIn({ direction: "up", delay: 0.7 })}
          >
            <ArrowLink text="CRYPTO LAUNCHPAD ECOSYSTEM" href="#" />
            <div className="max-w-sm flex flex-col gap-6">
              <Title type="title1" text="A growing network of DeFi Apps." />
              <Text text="Developers, traders, and liquidity providers participate together in a financial marketplace that is open and accessible to all." />
            </div>
          </motion.div>
        </div>
        <div className="w-1/2 max-md:w-full pl-3 max-md:pl-0">
          <motion.div
            className="flex-1 flex justify-end"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={slideIn({ direction: "right", delay: 1 })}
          >
            <Block
              imgSrc={ecosystemBg}
              imgAlt="ecosystemBg"
              imgStyles=" w-[590px] h-[290px]  z-20"
              blockStyles="px-8 py-6 w-[590px] h-[290px]"
            >
              <div className="w-full h-full flex flex-col gap-2.5">
                <Counter
                  to={300}
                  delay={1.4}
                  postfix="+"
                  className="font-bold text-5xl text-primary-text"
                />
                <Text text="Integrations" />
              </div>
            </Block>
          </motion.div>
        </div>
      </div>


    </section>
  );
};

export default Ecosystem;
