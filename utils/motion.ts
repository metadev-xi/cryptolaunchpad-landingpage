import { Variants, Transition } from "framer-motion";

export const navVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 0.8,
    },
  },
};

interface SlideIn {
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  type?: "spring" | "tween" | "inertia";
}

export const slideIn = ({
  direction = "up",
  delay = 0,
  duration = 0.6,
  type = "spring",
}: SlideIn): Variants => ({
  hidden: {
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

interface ZoomIn {
  delay?: number;
  duration?: number;
}

export const zoomIn = ({ delay = 0, duration = 0 }: ZoomIn): Variants => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      delay,
      duration,
      ease: "easeOut",
    },
  },
});
