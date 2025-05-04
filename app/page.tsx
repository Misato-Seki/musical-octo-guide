'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="h-[calc(100vh-4rem)] md:h-screen flex flex-col items-center justify-center px-4">
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
        <p>Hello, I am Misato Seki.</p>
        <p className="text-gray-600 text-sm font-normal mt-2">Web Developer / Frontend Engineer / Full Stack Developer</p>
      </motion.h1>
    </div>
  );
}
