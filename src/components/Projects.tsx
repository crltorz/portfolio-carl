import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import { PlayCircle, ArrowUpRight, TrendingUp, Sparkles, Video } from 'lucide-react';

const projects = [
  {
    title: 'UGC Videos',
    href: 'https://drive.google.com/drive/folders/1C-XckYjdzLOLedzovLBsT5tcjPm4tQcw',
    description:
      'High-converting UGC ads with viral-focused creative concepts. Delivered 10–20 videos weekly, improving engagement through strategic hooks and retention editing.',
    gradient: 'from-brand-blue to-brand-cyan',
    icon: TrendingUp,
    tags: ['UGC Ads', 'Paid Social', 'Conversion', 'Hook Retention']
  },
  {
    title: 'Graphics',
    href: 'https://drive.google.com/drive/folders/1w65ugzXetZNzLJX0tEJEEXZipye6e9H0',
    description:
      'Produced 100+ trend-based AI videos and social graphics weekly across multiple accounts. Managed multi-platform posting strategies for TikTok, Instagram Reels, and Meta.',
    gradient: 'from-brand-purple to-pink-500',
    icon: Sparkles,
    tags: ['AI Generation', 'TikTok', 'Instagram Reels', 'Social Graphics']
  },
  {
    title: 'Long Form',
    href: 'https://drive.google.com/drive/folders/1Mg-kXGhpvcVISsCG02MEJxwDVN_NIIqM',
    description:
      'Professional long-form editing with DaVinci Resolve. Applied advanced color correction, sound design, and storytelling techniques for audience retention.',
    gradient: 'from-orange-500 to-red-500',
    icon: Video,
    tags: ['YouTube', 'DaVinci Resolve', 'Storytelling', 'Color Grading']
  }
];

export function Projects() {
  return (
    <AnimatedSection id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Featured Work
            </h2>
            <p className="text-slate-400">
              A selection of UGC videos, graphics, and long-form content crafted
              for maximum audience retention and conversion.
            </p>
          </div>
          <a
            href="#contact"
            className="flex items-center gap-2 text-brand-blue hover:text-brand-purple transition-colors font-medium">
            Start a Project <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <a
                key={idx}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-3xl overflow-hidden glass-card border-white/10 hover:border-white/20 transition-colors cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-6 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-4">
                      <Icon className="w-8 h-8" />
                    </div>
                    <p className="text-lg font-display font-bold text-white uppercase tracking-wider">
                      {project.title}
                    </p>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-xl">
                      <PlayCircle className="w-8 h-8" />
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-medium px-2.5 py-1 rounded-md bg-white/5 text-slate-300 border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                    {project.description}
                  </p>
                  <p className="text-xs font-medium text-brand-blue mt-4 flex items-center gap-1 group-hover:text-brand-purple transition-colors">
                    View portfolio <ArrowUpRight className="w-3 h-3" />
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
