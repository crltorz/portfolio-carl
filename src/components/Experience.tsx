import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import { Briefcase, TrendingUp, Users, Video } from 'lucide-react';
const experiences = [
{
  role: 'Creative Manager',
  company: 'Nathan Resnick',
  location: 'California',
  period: 'December 2025 – May 2026',
  icon: <TrendingUp className="w-5 h-5" />,
  color: 'from-brand-blue to-brand-cyan',
  achievements: [
  'Edited high-converting UGC advertisements',
  'Developed viral-focused creative concepts',
  'Delivered 10–20 videos weekly',
  'Improved engagement through strategic editing']

},
{
  role: 'Content Creator',
  company: 'Paradoxa AI',
  location: 'Abu Dhabi, UAE',
  period: 'March 2026 – May 2026',
  icon: <Users className="w-5 h-5" />,
  color: 'from-brand-purple to-pink-500',
  achievements: [
  'Produced 100+ short-form videos weekly',
  'Created trend-based AI content',
  'Managed multi-account posting strategies',
  'Collaborated with creators and marketing teams']

},
{
  role: 'Long-Form Video Editor',
  company: 'Drongo Entertainment',
  location: 'Australia',
  period: 'July 2025 – December 2025',
  icon: <Video className="w-5 h-5" />,
  color: 'from-orange-500 to-red-500',
  achievements: [
  'Enhanced video quality using DaVinci Resolve',
  'Applied advanced editing techniques',
  'Created engaging long-form YouTube content',
  'Maintained fast turnaround times']

}];

export function Experience() {
  return (
    <AnimatedSection
      id="experience"
      className="py-24 bg-brand-darker relative border-y border-white/5">
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Professional Experience
          </h2>
          <p className="text-slate-400">
            A track record of delivering high-impact content for international
            clients and agencies.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-blue via-brand-purple to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) =>
            <div
              key={index}
              className={`relative flex flex-col md:flex-row gap-8 md:gap-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-14 h-14 rounded-full bg-brand-darker border border-white/10 flex items-center justify-center md:-translate-x-1/2 z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                  <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center text-white`}>
                  
                    {exp.icon}
                  </div>
                </div>

                {/* Content Card */}
                <div className="ml-20 md:ml-0 md:w-1/2 flex flex-col justify-center">
                  <div
                  className={`glass-card p-8 rounded-2xl hover:border-white/20 transition-colors ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                  
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-white/10 text-white">
                        {exp.period}
                      </span>
                      <span className="text-sm text-slate-400 flex items-center gap-1">
                        <Briefcase className="w-3 h-3" /> {exp.location}
                      </span>
                    </div>

                    <h3 className="text-2xl font-display font-bold text-white mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-brand-purple font-medium mb-6">
                      {exp.company}
                    </p>

                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) =>
                    <li
                      key={i}
                      className="flex items-start gap-3 text-slate-300">
                      
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 shrink-0" />
                          <span className="text-sm leading-relaxed">
                            {achievement}
                          </span>
                        </li>
                    )}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </AnimatedSection>);

}