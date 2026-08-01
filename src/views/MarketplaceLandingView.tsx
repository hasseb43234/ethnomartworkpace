import React, { useState } from 'react';
import { HERO_BG_IMAGE, CULTURAL_GAP_IMAGE, SDG_GOALS } from '../data/mockData';
import { ViewMode } from '../types';

interface MarketplaceLandingViewProps {
  onNavigate: (view: ViewMode) => void;
  onSearch: (query: string) => void;
  onOpenSDGModal: () => void;
}

export const MarketplaceLandingView: React.FC<MarketplaceLandingViewProps> = ({
  onNavigate,
  onSearch,
  onOpenSDGModal,
}) => {
  const [heroSearch, setHeroSearch] = useState('');

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (heroSearch.trim()) {
      onSearch(heroSearch);
      onNavigate('select-community');
    }
  };

  return (
    <main className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10">
      {/* 1. Hero Section */}
      <section className="relative h-[540px] md:h-[600px] w-full overflow-hidden rounded-b-3xl my-2 shadow-lg">
        <img
          src={HERO_BG_IMAGE}
          alt="Artisan Marketplace"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10 flex items-center justify-center p-4">
          <div className="glass-effect p-8 md:p-12 rounded-3xl max-w-2xl w-full text-center border border-white/40 shadow-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#141b2b] mb-6 leading-tight tracking-tight">
              A World of Culture, Delivered to Your Door.
            </h1>

            <form onSubmit={handleHeroSubmit} className="relative max-w-lg mx-auto">
              <input
                type="text"
                value={heroSearch}
                onChange={(e) => setHeroSearch(e.target.value)}
                placeholder="Search for unique artifacts, spices, or attire..."
                className="w-full pl-12 pr-28 py-3.5 md:py-4 rounded-full bg-white border border-[#bec8d2] focus:border-[#0ea5e9] focus:ring-4 focus:ring-[#0ea5e9]/20 text-sm md:text-base text-[#141b2b] shadow-md transition-all"
              />
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#006591] text-xl">
                search
              </span>
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#006591] text-white px-5 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-semibold hover:bg-[#005b78] transition-all shadow-xs"
              >
                Explore
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 2. The Cultural Gap Section */}
      <section className="py-16 md:py-20 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#141b2b]">
            The Cultural Gap
          </h2>
          <p className="text-lg text-[#3e4850] leading-relaxed">
            Despite our global connectivity, millions of authentic artisans and cultural heritage practitioners remain disconnected from the modern marketplace. Valuable traditions are fading due to a lack of access to fair markets and sustainable economic opportunities.
          </p>
          <p className="text-base text-[#3e4850]/80 leading-relaxed">
            Ethno Mart bridges this divide by creating a direct pathway for global heritage to reach appreciative homes, ensuring that cultural richness is preserved through prosperity.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('select-community')}
              className="px-8 py-3.5 bg-[#c0e8ff] text-[#001e2b] rounded-xl font-bold hover:bg-[#7ed4fd] transition-all flex items-center gap-2 shadow-xs group"
            >
              <span>Learn More</span>
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
          </div>
        </div>

        <div className="flex-1 w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-[#bec8d2]/40">
          <img
            src={CULTURAL_GAP_IMAGE}
            alt="Traditional Artisan Marketplace"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      </section>

      {/* 3. Our Solution Section */}
      <section className="py-12 md:py-16 px-6 md:px-12 bg-[#f1f3ff] rounded-[36px] md:rounded-[48px] my-8 shadow-xs">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#141b2b] mb-3">
            Our Solution
          </h2>
          <p className="text-base text-[#3e4850] max-w-2xl mx-auto">
            Providing the infrastructure for cultural heritage to thrive in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-3xl border border-[#bec8d2]/50 hover:border-[#0ea5e9] hover:shadow-lg transition-all group">
            <div className="w-16 h-16 bg-[#c9e6ff] rounded-2xl flex items-center justify-center mb-6 text-[#006591] group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-4xl filled">hub</span>
            </div>
            <h3 className="text-xl font-bold text-[#141b2b] mb-3">Centralized Hubs</h3>
            <p className="text-sm text-[#3e4850] leading-relaxed">
              Strategic logistics and curation centers that manage the flow of authentic goods from rural villages to global doorsteps.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-3xl border border-[#bec8d2]/50 hover:border-[#0ea5e9] hover:shadow-lg transition-all group">
            <div className="w-16 h-16 bg-[#c0e8ff] rounded-2xl flex items-center justify-center mb-6 text-[#006686] group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-4xl filled">verified_user</span>
            </div>
            <h3 className="text-xl font-bold text-[#141b2b] mb-3">Verified Sellers</h3>
            <p className="text-sm text-[#3e4850] leading-relaxed">
              A rigorous verification process that ensures every artisan is treated fairly and every product is truly authentic.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-3xl border border-[#bec8d2]/50 hover:border-[#0ea5e9] hover:shadow-lg transition-all group">
            <div className="w-16 h-16 bg-[#dbe4ea] rounded-2xl flex items-center justify-center mb-6 text-[#576065] group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-4xl filled">groups</span>
            </div>
            <h3 className="text-xl font-bold text-[#141b2b] mb-3">Community Driven</h3>
            <p className="text-sm text-[#3e4850] leading-relaxed">
              A vibrant ecosystem where stories are shared, cultural knowledge is exchanged, and impact is measured collectively.
            </p>
          </div>
        </div>
      </section>

      {/* 4. SDG Section */}
      <section className="py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#141b2b] mb-8">
          Aligned with United Nations Sustainable Development Goals
        </h2>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {SDG_GOALS.map((sdg) => (
            <div
              key={sdg.number}
              onClick={onOpenSDGModal}
              style={{ backgroundColor: sdg.color }}
              className="w-32 md:w-36 aspect-square rounded-2xl flex flex-col items-center justify-center p-4 text-white hover:scale-105 transition-transform shadow-lg cursor-pointer group relative"
            >
              <span className="material-symbols-outlined text-4xl mb-2">{sdg.icon}</span>
              <span className="text-xs font-bold text-center leading-tight">
                {sdg.title}
              </span>

              {/* Tooltip on hover */}
              <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-opacity bg-[#141b2b] text-white text-[11px] px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl pointer-events-none z-20">
                {sdg.tooltip}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
