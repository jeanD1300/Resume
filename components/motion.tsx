"use client";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  delay: number;
};

const fadeInUpwards = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 20 },
  transition: {
    type: "spring",
    damping: 25,
    stiffness: 120,
    duration: 0.2,
  },
};

export default function Motion({ children, delay }: Props) {
  return (
    <motion.div
      variants={fadeInUpwards}
      initial="initial"
      animate="animate"
      transition={{ ...fadeInUpwards.transition, delay }}
    >
      {children}
    </motion.div>
  );
}
