import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import { MapPin, Mail, Phone, GraduationCap } from 'lucide-react';
export function About() {
  return (
    <AnimatedSection id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-brand-blue to-brand-purple mb-8 rounded-full" />

            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              I am an AI Video Editor and Short-Form Content Specialist with
              experience creating viral-ready content for TikTok, Instagram
              Reels, YouTube Shorts, and Meta platforms. I specialize in
              AI-generated content, UGC advertisements, storytelling, audience
              retention strategies, and high-converting social media videos.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="glass-card p-5 rounded-2xl flex items-start gap-4">
                <div className="p-3 rounded-xl bg-brand-blue/10 text-brand-blue">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Location</p>
                  <p className="font-medium text-white">
                    Tago, Surigao del Sur, Philippines
                  </p>
                </div>
              </div>

              <div className="glass-card p-5 rounded-2xl flex items-start gap-4">
                <div className="p-3 rounded-xl bg-brand-purple/10 text-brand-purple">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Email</p>
                  <a
                    href="mailto:rcgmforwork@gmail.com"
                    className="font-medium text-white hover:text-brand-purple transition-colors break-all">
                    
                    rcgmforwork@gmail.com
                  </a>
                </div>
              </div>

              <div className="glass-card p-5 rounded-2xl flex items-start gap-4">
                <div className="p-3 rounded-xl bg-brand-cyan/10 text-brand-cyan">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Contact</p>
                  <p className="font-medium text-white">09129751767</p>
                </div>
              </div>

              <div className="glass-card p-5 rounded-2xl flex items-start gap-4">
                <div className="p-3 rounded-xl bg-pink-500/10 text-pink-500">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Course</p>
                  <p className="font-medium text-white">BS Computer Science</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 to-brand-purple/20 rounded-3xl blur-2xl" />
            <div className="glass-card p-2 rounded-3xl relative">
              <img
                src="/images/profile.png"
                alt="Carl R. Torion"
                className="w-full h-[500px] object-cover object-center rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>);

}