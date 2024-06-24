"use client";

import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/utils/cn";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

import { Button } from "./ui/MovingBorders";

type NavItem = {
  name: string;
  link: string;
  icon?: JSX.Element;
};

const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: NavItem[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  const resumeLink =
    "https://drive.google.com/uc?export=download&id=1R-G-2UwErFIuZazLuuvn0zNBM40f2zLx";

  const handleDownload = async () => {
    try {
      const a = document.createElement("a");
      a.href = resumeLink;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error("Download failed", error);
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-4 sm:px-10 py-2 sm:py-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-2 sm:space-x-4 rounded-full",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        {navItems.map((navItem: NavItem, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="!cursor-pointer text-sm">{navItem.name}</span>
          </Link>
        ))}
        <Button
          className="relative flex items-center justify-center gap-1 border border-neutral-200 px-3 py-1 text-xs font-semibold text-black sm:px-4 sm:py-2 sm:text-base dark:border-slate-800 dark:text-white"
          duration={Math.floor(Math.random() * 10000) + 1000}
          style={{
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            borderRadius: `calc(1.75rem* 0.96)`,
          }}
          onClick={handleDownload}
        >
          <FaArrowDown />
          <span className="hidden sm:block">Resume</span>
          <span className="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 " />
        </Button>
      </motion.div>
    </AnimatePresence>
  );
};

export default FloatingNav;
