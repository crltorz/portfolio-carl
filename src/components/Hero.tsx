import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Sparkles } from 'lucide-react';
export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-brand-blue/20 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 0.8,
              ease: 'easeOut'
            }}
            className="relative mb-8 group">
            
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-blue to-brand-purple animate-spin-slow blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-brand-dark">
              <img
                src="/images/profile.png"
                alt="Carl R. Torion"
                className="w-full h-full object-cover object-center rounded-full border-2 border-white/10" />
              
            </div>
            <div className="absolute -bottom-3 -right-3 bg-brand-card border border-white/10 p-2 rounded-full shadow-xl">
              <Sparkles className="w-5 h-5 text-brand-purple" />
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.5,
              delay: 0.2
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium text-slate-300">
              Available for freelance work
            </span>
          </motion.div>

          <motion.h1
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.5,
              delay: 0.3
            }}
            className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6">
            
            CARL R.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">
              TORION
            </span>
          </motion.h1>

          <motion.h2
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.5,
              delay: 0.4
            }}
            className="text-xl md:text-2xl font-medium text-slate-300 mb-6">
            
            AI Video Editor <span className="text-brand-purple mx-2">|</span>{' '}
            Content Creator <span className="text-brand-blue mx-2">|</span>{' '}
            Creative Manager
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.5,
              delay: 0.5
            }}
            className="text-lg text-slate-400 max-w-2xl mb-10 leading-relaxed">
            
            "Transforming ideas into viral content through creativity,
            storytelling, and AI-powered innovation."
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.5,
              delay: 0.6
            }}
            className="flex flex-col sm:flex-row items-center gap-4">
            
            <a
              href="#projects"
              className="group flex items-center gap-2 px-8 py-4 rounded-full bg-white text-brand-dark font-semibold hover:bg-slate-200 transition-colors">
              
              <Play className="w-4 h-4 fill-current" />
              View Projects
            </a>
            <a
              href="#contact"
              className="group flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-colors">
              
              Contact Me
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>);

}