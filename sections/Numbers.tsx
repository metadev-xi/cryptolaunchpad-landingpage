import { Counter } from "@/components";
import { zoomIn } from "@/utils/motion";

import { motion } from "framer-motion";

const Numbers = () => {
  return (
    <section className="container mx-auto px-6 py-8 ">
      <div className="flex flex-wrap items-center justify-center z-40 gap-14">
        <motion.div
          className="flex flex-col items-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={zoomIn({ delay: 0.4, duration: 0.6 })}
        >
          <Counter
            from={0}
            to={1.3}
            precision={1}
            duration={1}
            delay={0.4}
            prefix="$"
            postfix="M+"
            className="font-bold text-5xl text-primary-text"
          />
          <span className="font-light text-sm text-primary-text">
            Total Liquidity Raised
          </span>
        </motion.div>
        <motion.div
          className="flex flex-col items-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={zoomIn({ delay: 0.7, duration: 0.6 })}
        >
          <Counter
            from={0}
            to={100}
            duration={1}
            delay={0.7}
            postfix="+"
            className="font-bold text-5xl text-primary-text"
          />
          <span className="font-light text-sm text-primary-text">
            Total Projects
          </span>
        </motion.div>
        <motion.div
          className="flex flex-col items-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={zoomIn({ delay: 1, duration: 0.6 })}
        >
          <Counter
            from={0}
            to={3000}
            duration={1}
            delay={1}
            postfix="+"
            className="font-bold text-5xl text-primary-text"
          />
          <span className="font-light text-sm text-primary-text">
            Total Participants
          </span>
        </motion.div>
        <motion.div
          className="flex flex-col items-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={zoomIn({ delay: 1.4, duration: 0.6 })}
        >
          <Counter
            from={0}
            to={1.1}
            duration={1}
            delay={1.4}
            postfix="M+"
            className="font-bold text-5xl text-primary-text"
          />
          <span className="font-light text-sm text-primary-text">
            Total Value Locked
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Numbers;
