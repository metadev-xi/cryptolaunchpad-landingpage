import { motion } from "framer-motion";
import { discord, github, twitter } from "@/assets/icons";
import Image from "next/image";
import { slideIn } from "@/utils/motion";

const Hero = () => {
  return (
    <section className="grid-bg min-h-screen flex flex-col items-center justify-center ">

      {/* Video element with autoplay, loop, and muted attributes */}

      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex items-center gap-4 flex-wrap justify-center ">
            <motion.h1
              className="font-thin text-6xl max-sm:text-5xl text-primary-text bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text "
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={slideIn({ direction: "up", delay: 0.6 })}
            >
              CRYPTO
            </motion.h1>
            <motion.span
              className="font-semibold text-6xl max-sm:text-5xl text-primary-text bg-gradient-to-r from-green-500 to-purple-500 text-transparent bg-clip-text"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={slideIn({ direction: "left", delay: 0.8, duration: 0.6 })}
            >
              LAUNCHPAD
            </motion.span>
          </div>
          <motion.p
            className="max-w-[735px] font-light text-2xl max-sm:text-xl text-primary-text"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={slideIn({ direction: "up", delay: 0.8, duration: 0.6 })}
          >
            Create Token, Create Launchpad, Fair Launchpad, A multichain Crypto Launchpad..
          </motion.p>
          <motion.div
            className="flex items-center gap-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={slideIn({ direction: "up", delay: 0.8, duration: 0.6 })}
          >
            <Image src={twitter} alt="twitter" />
            <Image src={github} alt="github" />
            <Image src={discord} alt="discord" />
          </motion.div>
        </div>
      </div>
      <video
        autoPlay
        loop
        muted
        className="opacity-10 mt-50per"
      >
        {/* Video source with the relative path */}
        <source src="/vedio/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default Hero;
