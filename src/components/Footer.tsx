import React from 'react';
import { ViewMode } from '../types';

interface FooterProps {
  onNavigate: (view: ViewMode) => void;
  onOpenSDGModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenSDGModal }) => {
  return (
    <footer className="w-full px-6 md:px-10 py-12 flex flex-col md:flex-row justify-between border-t border-[#bec8d2]/30 bg-[#dce2f7]/40 mt-16 text-[#141b2b]">
      <div className="flex flex-col gap-6 md:w-1/3 mb-8 md:mb-0">
        <span
          onClick={() => onNavigate('landing')}
          className="font-extrabold text-2xl text-[#006591] cursor-pointer"
        >
          Ethno Mart
        </span>
        <p className="text-sm text-[#3e4850] leading-relaxed max-w-sm">
          © 2024 Ethno Mart. Empowering global artisans and local heritage with a modern digital marketplace. Bringing the world to your doorstep.
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => onNavigate('landing')}
            className="w-10 h-10 rounded-full border border-[#bec8d2] flex items-center justify-center hover:bg-[#c9e6ff] transition-colors"
            title="Global Hub"
          >
            <span className="material-symbols-outlined text-[#006591]">public</span>
          </button>
          <a
            href="mailto:contact@ethnomart.org"
            className="w-10 h-10 rounded-full border border-[#bec8d2] flex items-center justify-center hover:bg-[#c9e6ff] transition-colors"
            title="Contact Us"
          >
            <span className="material-symbols-outlined text-[#006591]">mail</span>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-12">
        <div className="flex flex-col gap-3">
          <span className="text-xs font-bold text-[#141b2b] uppercase tracking-wider mb-2 opacity-70">
            Platform
          </span>
          <button
            onClick={() => onNavigate('select-community')}
            className="text-left text-xs font-medium text-[#3e4850] hover:text-[#006686] transition-colors"
          >
            Community Hubs
          </button>
          <button
            onClick={() => onNavigate('jobs')}
            className="text-left text-xs font-medium text-[#3e4850] hover:text-[#006686] transition-colors"
          >
            Cultural Jobs
          </button>
          <button
            onClick={() => onNavigate('events')}
            className="text-left text-xs font-medium text-[#3e4850] hover:text-[#006686] transition-colors"
          >
            Events Calendar
          </button>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-xs font-bold text-[#141b2b] uppercase tracking-wider mb-2 opacity-70">
            Impact
          </span>
          <button
            onClick={onOpenSDGModal}
            className="text-left text-xs font-medium text-[#3e4850] hover:text-[#006686] transition-colors underline"
          >
            SDG Alignment
          </button>
          <button
            onClick={() => onNavigate('forum')}
            className="text-left text-xs font-medium text-[#3e4850] hover:text-[#006686] transition-colors"
          >
            Artisan Stories
          </button>
        </div>

        <div className="flex flex-col gap-3 col-span-2 sm:col-span-1">
          <span className="text-xs font-bold text-[#141b2b] uppercase tracking-wider mb-2 opacity-70">
            Legal & Trust
          </span>
          <a
            href="#privacy"
            onClick={(e) => { e.preventDefault(); alert("Ethno Mart Privacy Policy: All artisan data & buyer records are securely handled."); }}
            className="text-xs font-medium text-[#3e4850] hover:text-[#006686] transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="#terms"
            onClick={(e) => { e.preventDefault(); alert("Ethno Mart Terms of Service: Guaranteeing fair trade compensation for traditional creators."); }}
            className="text-xs font-medium text-[#3e4850] hover:text-[#006686] transition-colors"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};
