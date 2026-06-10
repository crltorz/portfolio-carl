import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import { Scissors, Sparkles, Smartphone, HeartHandshake } from 'lucide-react';
const skillCategories = [
{
  title: 'Video Editing',
  icon: <Scissors className="w-6 h-6" />,
  color: 'text-brand-blue',
  bg: 'bg-brand-blue/10',
  skills: [
  'DaVinci Resolve',
  'CapCut',
  'Storytelling',
  'Color Correction',
  'Sound Design']

},
{
  title: 'AI Tools',
  icon: <Sparkles className="w-6 h-6" />,
  color: 'text-brand-purple',
  bg: 'bg-brand-purple/10',
  skills: ['Higgsfield', 'HeyGen', 'Arcads', 'Veed']
},
{
  title: 'Content Creation',
  icon: <Smartphone className="w-6 h-6" />,
  color: 'text-pink-500',
  bg: 'bg-pink-500/10',
  skills: [
  'UGC Ads',
  'TikTok Content',
  'Instagram Reels',
  'YouTube Shorts',
  'Audience Retention']

},
{
  title: 'Soft Skills',
  icon: <HeartHandshake className="w-6 h-6" />,
  color: 'text-brand-cyan',
  bg: 'bg-brand-cyan/10',
  skills: ['Communication', 'Teamwork', 'Adaptability', 'Time Management']
}];

export function Skills() {
  return (
    <AnimatedSection id="skills" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-12 items-end mb-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Technical Arsenal
            </h2>
            <p className="text-slate-400">
              A comprehensive toolkit spanning traditional editing, cutting-edge
              AI generation, and strategic content creation.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) =>
          <div
            key={idx}
            className="glass-card p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300">
            
              <div
              className={`w-14 h-14 rounded-2xl ${category.bg} ${category.color} flex items-center justify-center mb-6`}>
              
                {category.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) =>
              <span
                key={sIdx}
                className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-slate-300 hover:bg-white/10 hover:text-white transition-colors cursor-default">
                
                    {skill}
                  </span>
              )}
              </div>
            </div>
          )}
        </div>
      </div>
    </AnimatedSection>);

}