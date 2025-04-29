'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Image 
          src="/hero.png" 
          alt="Hero Image" 
          width={256}
          height={256}
          className="rounded-full mb-8"
        />
      </motion.div>
      <motion.h1 
        className="text-3xl font-bold text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        Hello, I am Misato Seki.
      </motion.h1>
    </div>
  );
}
