"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  MotionValue,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Image from "next/image";

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className?: string;
  thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  const ref = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.4], [200, 0])
  );

  const scale = useSpring(useTransform(scrollYProgress, [0, 0.4], [0, 1]));
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.3], [20, 0]));
  const translateX = useSpring(
    useTransform(scrollYProgress, [0.5, 0.7], [0, 1500])
  );

  return (
    <motion.div
      style={{
        translateX,
        scale,
        rotateZ: rotateZ,
      }}
      className="w-full h-full  pb-[100px] grid grid-cols-1 md:grid-cols-3  max-w-7xl mx-auto gap-4 "
      ref={ref}
    >
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <motion.div
            style={{ translateY: translateY }}
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden",
              selected?.id === card.id
                ? "rounded-lg cursor-pointer absolute inset-0 h-[70%] w-full md:w-[70%] m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                : lastSelected?.id === card.id
                ? "z-40 bg-white rounded-xl h-full w-full"
                : "bg-white rounded-xl h-full w-full"
            )}
            layout
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <BlurImage card={card} />
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
      />
    </motion.div>
  );
};

const BlurImage = ({ card }: { card: Card }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <Image
      src={card.thumbnail}
      height="500"
      width="500"
      onLoad={() => setLoaded(true)}
      className={cn(
        "object-cover object-top absolute inset-0 h-full w-full transition duration-200",
        loaded ? "blur-none" : "blur-md"
      )}
      alt="thumbnail"
    />
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.3,
        }}
        className="absolute inset-0 h-full w-full bg-black opacity-60 z-10"
      />
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative px-8 pb-4 z-[70]"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};
