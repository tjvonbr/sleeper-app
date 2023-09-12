"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

interface SectionProps {
  children: React.ReactNode;
  className: string;
  id?: string;
}

export default function Section({ children, className, id }: SectionProps) {
  const ref = useRef(null);

  return (
    <motion.section
      ref={ref}
      className={className}
      id={id}
      initial={{ opacity: 0, y: 300 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.25 }}
    >
      {children}
    </motion.section>
  );
}
