import { motion } from "framer-motion";

export const Reveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}   // Start invisible and 50px down
      whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
      viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of section is visible
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};