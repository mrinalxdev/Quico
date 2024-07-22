"use client";
import {
  AnimatePresence,
  Transition,
  Variant,
  motion,
  MotionProps,
} from "framer-motion";
import { cn } from "@/lib/utils";

export function TransitionPanel({
  children,
  className,
  transition,
  variants,
  activeIndex,
  ...motionProps
}) {
  return (
    <div className={cn("relative", className)}>
      <AnimatePresence initial={false} mode="popLayout">
        <motion.div
          key={activeIndex}
          variants={variants}
          transition={transition}
          initial="enter"
          animate="center"
          exit="exit"
          {...motionProps}
        >
          {children[activeIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
