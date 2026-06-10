import React from 'react';
export function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 bg-brand-darker text-center">
      <div className="container mx-auto px-6">
        <p className="text-slate-400 font-medium tracking-wide">
          "Creating content that captures attention and drives results."
        </p>
        <p className="text-sm text-slate-500 mt-4">
          &copy; {new Date().getFullYear()} Carl R. Torion. All rights reserved.
        </p>
      </div>
    </footer>);

}