import React, { useState } from "react";
import { motion } from "motion/react";

const containerVariants = {
  initial: {
    width: 400,
  },
  final: {
    width: 640,
  },
};

const imgVariants = {
  initial: {
    x: -20,
    y: 100,
    width: 250,
  },
  final: {
    x: 0,
    y: 0,
    width: 250,
  },
};

const descriptionVariants = {
  initial: {
    opacity: 0,
    display: "none",
  },
  final: {
    opacity: 1,
    display: "block",
  },
};

interface Props {
  title: JSX.Element;
  description: JSX.Element;
  image: JSX.Element;
  logo: string;
  backgoundColor: string;
  active: boolean;
}
export default function AboutSwiperCard({
  title,
  description,
  image,
  backgoundColor,
  logo,
}: Props) {
  const [active, setActive] = useState<boolean>(false);
  return (
    <motion.div
      className={`flex gap-6 ${backgoundColor} h-[400px] rounded-lg p-4 overflow-hidden h-full relative`}
      style={{ maxWidth: "640px", transformOrigin: "right" }}
      variants={containerVariants}
      initial="initial"
      whileHover={"final"}
      transition={{
        duration: 0.8,
        staggerChildren: 0.2,
      }}
      onHoverStart={() => setActive(true)}
      onHoverEnd={() => setActive(false)}
    >
      <div className="flex flex-col justify-between">
        <div>
          <div>{title}</div>
          <motion.div
            variants={descriptionVariants}
            initial="initial"
            animate={active ? "final" : "initial"}
            transition={
              {
                delay: .3
              }
            }
          >
            {description}
          </motion.div>
        </div>
        <div className="w-20 mt-2">
          <img src={logo} alt="Logo" />
        </div>
      </div>
      <motion.div
        className="absolute bottom-0 h-full w-[300px] right-0"
        variants={imgVariants}
        initial="initial"
        animate={active ? "final" : "initial"}
      >
        {image}
      </motion.div>
    </motion.div>
  );
}
