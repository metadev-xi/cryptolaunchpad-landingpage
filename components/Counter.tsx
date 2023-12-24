import { animate, motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface CounterProps {
  from?: number;
  to: number;
  precision?: number;
  duration?: number;
  delay?: number;
  className?: string;
  prefix?: string;
  postfix?: string;
}

const Counter: React.FC<CounterProps> = ({
  from = 0,
  to,
  precision = 0,
  duration = 1,
  delay = 0,
  className = "",
  prefix = "",
  postfix = "",
}) => {
  const [inView, setInView] = useState<boolean>(false);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef);

  useEffect(() => {
    if (isInView) {
      setInView(true);
    }
  }, [isInView]);

  useEffect(() => {
    const node = nodeRef.current;

    if (!node || !inView) return;

    const controls = animate(from, to, {
      duration,
      delay,
      onUpdate(value) {
        node.textContent = `${prefix}${value.toFixed(precision)}${postfix}`;
      },
    });

    return () => controls.stop();
  }, [duration, from, postfix, prefix, to, precision, delay, inView]);

  return <motion.span ref={nodeRef} className={className} />;
};

export default Counter;
