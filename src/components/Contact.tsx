import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import {
  Mail,
  Phone,
  Facebook,
  Instagram,
  Linkedin } from
'lucide-react';
export function Contact() {
  return (
    <AnimatedSection id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/10 rounded-full blur-[150px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="glass-card rounded-[3rem] p-8 md:p-16 border-white/10 relative overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            {/* Left Col: Info */}
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
                Let's Work <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">
                  Together
                </span>
              </h2>
              <p className="text-lg text-slate-400 mb-10 max-w-md">
                Ready to transform your ideas into viral content? Reach out to
                discuss your next project, UGC campaign, or video editing needs.
              </p>

              <div className="space-y-6 mb-12">
                <a
                  href="mailto:rcgmforwork@gmail.com"
                  className="flex items-center gap-4 group">
                  
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-brand-purple group-hover:scale-110 transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Email</p>
                    <p className="text-lg font-medium text-white group-hover:text-brand-purple transition-colors">
                      rcgmforwork@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:09129751767"
                  className="flex items-center gap-4 group">
                  
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-brand-blue group-hover:scale-110 transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Phone</p>
                    <p className="text-lg font-medium text-white group-hover:text-brand-blue transition-colors">
                      09129751767
                    </p>
                  </div>
                </a>
              </div>

              {/* Socials */}
              <div className="flex items-center gap-4">
                <a
                  href="https://www.facebook.com/mr.torion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-white hover:text-brand-dark transition-colors">
                  
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/1tztorzz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-white hover:text-brand-dark transition-colors">
                  
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/carl-torion-424a10386/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-white hover:text-brand-dark transition-colors">
                  
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right Col: QR & Form Placeholder */}
            <div className="flex flex-col items-center justify-center lg:items-end">
              <div className="bg-brand-darker p-8 rounded-3xl border border-white/10 w-full max-w-sm text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-brand-purple/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                <a
                  href="https://www.facebook.com/mr.torion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-48 h-48 mx-auto bg-white rounded-2xl p-3 mb-6 relative z-10 hover:scale-105 transition-transform">
                  <img
                    src="/images/qr-code.png"
                    alt="QR code linking to Carl Torion's Facebook profile"
                    className="w-full h-full object-contain rounded-xl"
                  />
                </a>

                <h3 className="text-xl font-display font-bold text-white mb-2 relative z-10">
                  Connect on Facebook
                </h3>
                <p className="text-sm text-slate-400 relative z-10">
                  Scan the QR code or tap to visit my Facebook profile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>);

}