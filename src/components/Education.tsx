import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import { GraduationCap, Award } from 'lucide-react';
export function Education() {
  return (
    <AnimatedSection
      id="education"
      className="py-24 bg-brand-darker relative border-y border-white/5">
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-brand-blue/10 text-brand-blue">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-display font-bold">Education</h2>
            </div>

            <div className="glass-card p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 rounded-full blur-3xl group-hover:bg-brand-blue/20 transition-colors" />

              <div className="relative z-10">
                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-brand-blue/20 text-brand-blue mb-4">
                  2023 – Present
                </span>
                <h3 className="text-2xl font-display font-bold text-white mb-2">
                  Bachelor of Science in Computer Science
                </h3>
                <p className="text-lg text-slate-300 mb-6">
                  North Eastern Mindanao State University
                </p>

                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                    Achievements & Roles
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 shrink-0" />
                      <span className="text-slate-300">
                        Consistent Top Student
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 shrink-0" />
                      <span className="text-slate-300">
                        Assistant Auditor, Association of Computer Science
                        Students
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 shrink-0" />
                      <span className="text-slate-300">
                        Treasurer, Association of Computer Science Students
                        (2024–2025)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-brand-purple/10 text-brand-purple">
                <Award className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-display font-bold">
                Certifications
              </h2>
            </div>

            <div className="glass-card p-4 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-purple/10 rounded-full blur-3xl group-hover:bg-brand-purple/20 transition-colors" />

              <div className="relative z-10">
                <h3 className="text-2xl font-display font-bold text-white mb-2">
                  Certificate of Appreciation
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  5th International Conference on Methodological Advances in
                  Research (2024 ICMAR) — Same Day Edit (SDE) Committee
                </p>
                <a
                  href="/images/sde-certificate.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-colors">
                  <img
                    src="/images/sde-certificate.png"
                    alt="Certificate of Appreciation — Carl Rentino Torion, SDE Committee, 2024 ICMAR"
                    className="w-full h-auto object-contain"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>);

}