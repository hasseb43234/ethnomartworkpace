import React from 'react';
import { COMMUNITIES } from '../data/mockData';
import { Community, ViewMode } from '../types';

interface CommunitySelectorViewProps {
  onSelectCommunity: (community: Community) => void;
  onOpenRequestCommunity: () => void;
  onNavigate: (view: ViewMode) => void;
}

export const CommunitySelectorView: React.FC<CommunitySelectorViewProps> = ({
  onSelectCommunity,
  onOpenRequestCommunity,
}) => {
  return (
    <main className="min-h-screen relative overflow-hidden px-4 md:px-10 py-12 max-w-[1280px] mx-auto">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pattern-bg pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#006591]/5 organic-shape blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 -left-24 w-64 h-64 bg-[#006686]/5 organic-shape blur-2xl pointer-events-none" />

      <div className="relative z-10">
        {/* Hero Banner Header */}
        <section className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#006591]/10 border border-[#006591]/20 text-[#006591] mb-6">
            <span className="material-symbols-outlined text-lg">public</span>
            <span className="text-xs uppercase tracking-widest font-extrabold">
              Connect Globally
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-[#141b2b] tracking-tight">
            Welcome Home, <span className="text-[#006591] italic font-serif">Everywhere.</span>
          </h2>

          <p className="text-lg text-[#3e4850] leading-relaxed">
            Select your cultural community to discover curated artisans, authentic products, and local heritage tailored to your roots.
          </p>
        </section>

        {/* Community Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {COMMUNITIES.map((community) => {
            if (community.id === 'global') {
              return (
                <div
                  key={community.id}
                  onClick={() => onSelectCommunity(community)}
                  className="group cursor-pointer rounded-2xl p-6 bg-[#006591]/10 border border-[#006591]/20 hover:bg-[#006591]/20 transition-all duration-300 shadow-sm flex flex-col justify-between"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-12 flex items-center justify-center rounded-xl bg-[#006591] text-white shadow-md">
                      <span className="material-symbols-outlined text-3xl">public</span>
                    </div>
                    <span className="material-symbols-outlined text-[#006591] group-hover:translate-x-1.5 transition-transform">
                      arrow_forward
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold mb-1 text-[#006591]">{community.name}</h3>
                    <p className="text-xs text-[#3e4850] uppercase tracking-wider mb-4 font-semibold">
                      {community.activeMembers}
                    </p>
                    <div className="h-1 w-full bg-[#006591]/30 rounded-full" />
                  </div>
                </div>
              );
            }

            return (
              <div
                key={community.id}
                onClick={() => onSelectCommunity(community)}
                className="group cursor-pointer rounded-2xl p-6 glass-card hover:border-[#0ea5e9] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-16 h-11 overflow-hidden rounded-lg border border-[#bec8d2]/40 shadow-2xs">
                    <img
                      src={community.flagUrl}
                      alt={`${community.name} flag`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="material-symbols-outlined text-[#6e7881] group-hover:text-[#006591] group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300">
                    north_east
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-1 text-[#141b2b]">{community.name}</h3>
                  <p className="text-xs text-[#3e4850] uppercase tracking-wider mb-4 font-medium">
                    {community.activeMembers}
                  </p>
                  <div className="h-0.5 w-0 group-hover:w-full bg-[#006591] transition-all duration-500 rounded-full" />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Banner Section */}
        <section className="mt-16 p-8 md:p-10 bg-[#f1f3ff] border border-[#bec8d2]/30 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group shadow-xs">
          <div className="absolute inset-0 bg-[#006591]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          <div className="relative z-10 max-w-xl text-center md:text-left">
            <h4 className="text-2xl font-bold text-[#141b2b] mb-2">Don't see your community?</h4>
            <p className="text-sm text-[#3e4850] leading-relaxed">
              We are constantly expanding. Request your country to start a new cultural hub on Ethno Mart and bridge the global gap.
            </p>
          </div>

          <button
            onClick={onOpenRequestCommunity}
            className="relative z-10 px-8 py-3.5 bg-[#006591] text-white text-sm font-bold rounded-xl hover:bg-[#005b78] hover:scale-105 active:scale-95 transition-all shadow-md shadow-[#006591]/20 whitespace-nowrap"
          >
            Request Community
          </button>
        </section>
      </div>
    </main>
  );
};
