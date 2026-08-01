import React from 'react';
import { Community, EventItem, MarketplaceItem, ViewMode } from '../types';
import { COMMUNITIES, MARKETPLACE_CATEGORIES, PAKISTAN_EVENTS } from '../data/mockData';

interface CommunityHubViewProps {
  selectedCommunity: Community;
  onSelectCommunity: (community: Community) => void;
  onOpenRequestCommunity: () => void;
  onViewProduct: (item: MarketplaceItem) => void;
  onAddToCart: (item: MarketplaceItem) => void;
  onBookEvent: (event: EventItem) => void;
  onNavigate: (view: ViewMode) => void;
  deliveryType: 'standard' | 'concierge';
  setDeliveryType: (type: 'standard' | 'concierge') => void;
  onOpenCart: () => void;
  onOpenLocationModal: () => void;
}

export const CommunityHubView: React.FC<CommunityHubViewProps> = ({
  selectedCommunity,
  onSelectCommunity,
  onOpenRequestCommunity,
  onViewProduct,
  onAddToCart,
  onBookEvent,
  onNavigate,
  deliveryType,
  setDeliveryType,
  onOpenCart,
  onOpenLocationModal,
}) => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#f9f9ff]">
      {/* Left Sidebar Navigation */}
      <aside className="w-full lg:w-64 shrink-0 p-5 bg-[#ffffff] border-r border-[#bec8d2]/30 flex flex-col gap-4 lg:sticky lg:top-[72px] lg:h-[calc(100vh-72px)]">
        <div>
          <h2 className="text-lg font-bold text-[#141b2b]">Communities</h2>
          <p className="text-xs text-[#3e4850]">Switch cultural hubs</p>
        </div>

        <nav className="flex flex-row lg:flex-col gap-1.5 overflow-x-auto lg:overflow-y-auto custom-scrollbar pb-2 lg:pb-0">
          {COMMUNITIES.map((comm) => {
            const isSelected = comm.id === selectedCommunity.id;
            return (
              <button
                key={comm.id}
                onClick={() => onSelectCommunity(comm)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-xs transition-all whitespace-nowrap shrink-0 ${
                  isSelected
                    ? 'bg-[#006591] text-white shadow-sm'
                    : 'text-[#3e4850] hover:bg-[#e9edff]'
                }`}
              >
                <span className="material-symbols-outlined text-base">
                  {comm.id === 'global' ? 'public' : 'flag'}
                </span>
                <span>{comm.name}</span>
              </button>
            );
          })}
        </nav>

        <button
          onClick={onOpenRequestCommunity}
          className="mt-auto w-full py-3 bg-[#006591] text-white rounded-xl text-xs font-bold hover:bg-[#005b78] transition-all shadow-xs"
        >
          Join New Community
        </button>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-4 sm:p-6 md:p-10 max-w-[1080px] mx-auto space-y-8">
        {/* Banner Section */}
        <div className="relative overflow-hidden rounded-3xl p-6 sm:p-10 bg-gradient-to-r from-[#006591] to-[#0ea5e9] text-white shadow-md">
          <div className="relative z-10 max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full border-2 border-white/60 overflow-hidden bg-white/20 flex items-center justify-center shadow-xs">
                <img
                  src={selectedCommunity.leaderAvatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'}
                  alt={selectedCommunity.leaderName || 'Community Leader'}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="bg-white/20 backdrop-blur-xs px-3 py-1 rounded-full text-white text-xs font-bold tracking-wide">
                {selectedCommunity.name} Hub
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 leading-tight">
              {selectedCommunity.greeting || `Assalam-u-Alaikum, ${selectedCommunity.name}`}
            </h2>

            <p className="text-sm sm:text-base text-white/95 leading-relaxed">
              {selectedCommunity.description ||
                'Discover the essence of home. Your one-stop destination for authentic cultural services, heritage craftsmanship, and community festivals.'}
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* 1. Explore Marketplace */}
          <section className="md:col-span-12 group relative overflow-hidden rounded-3xl glass-card p-6 md:p-8">
            <div className="absolute top-6 right-6">
              <div className="bg-[#006591]/10 p-3 rounded-2xl border border-[#006591]/20">
                <span className="material-symbols-outlined text-[#006591] text-3xl filled">
                  storefront
                </span>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-extrabold text-[#141b2b] mb-1">Explore Marketplace</h3>
              <p className="text-xs md:text-sm text-[#3e4850] max-w-lg">
                Find authentic Lahori restaurants, local jewelry artisans, and specialized grocery items like Basmati rice and Shan spices.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-2">
              {MARKETPLACE_CATEGORIES.map((cat) => {
                const sampleProduct = cat.items[0];
                return (
                  <div
                    key={cat.id}
                    className="bg-[#e1e8fd]/60 p-4 rounded-2xl border border-[#bec8d2]/30 hover:bg-[#7ed4fd]/20 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-full h-52 sm:h-60 rounded-xl mb-3 overflow-hidden border border-[#bec8d2]/20 relative group/img">
                        <img
                          src={cat.imageUrl}
                          alt={cat.title}
                          className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <span className="text-sm font-extrabold text-[#006591] block mb-0.5">
                        {cat.title}
                      </span>
                      <p className="text-xs text-[#3e4850] leading-snug mb-4">
                        {cat.subtitle}
                      </p>
                    </div>

                    <div className="flex flex-col gap-2 pt-2">
                      <button
                        onClick={() => onViewProduct(sampleProduct)}
                        className="flex items-center justify-center gap-1.5 w-full py-2 bg-white border border-[#bec8d2]/50 rounded-lg text-xs font-bold text-[#141b2b] hover:bg-[#006591]/5 transition-colors"
                      >
                        <span className="material-symbols-outlined text-sm">inventory_2</span>
                        <span>See Products</span>
                      </button>

                      <button
                        onClick={onOpenLocationModal}
                        className="flex items-center justify-center gap-1.5 w-full py-2 bg-white border border-[#bec8d2]/50 rounded-lg text-xs font-bold text-[#141b2b] hover:bg-[#006591]/5 transition-colors"
                      >
                        <span className="material-symbols-outlined text-sm">location_on</span>
                        <span>See Location</span>
                      </button>

                      <button
                        onClick={() => {
                          onAddToCart(sampleProduct);
                          onOpenCart();
                        }}
                        className="flex items-center justify-center gap-1.5 w-full py-2 bg-[#006591] text-white rounded-lg text-xs font-bold hover:bg-[#005b78] transition-opacity shadow-xs"
                      >
                        <span className="material-symbols-outlined text-sm">local_shipping</span>
                        <span>Order Delivery</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* 2. Heritage Delivery */}
          <section className="md:col-span-12 glass-card p-6 md:p-8 rounded-3xl relative overflow-hidden">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-[#006591]/10 p-3 rounded-2xl border border-[#006591]/20">
                <span className="material-symbols-outlined text-[#006591] text-3xl">
                  local_shipping
                </span>
              </div>
              <span className="bg-[#c0e8ff] px-3 py-1 rounded-full text-[10px] font-bold tracking-widest text-[#004d66] uppercase">
                Heritage Care
              </span>
            </div>

            <h3 className="text-2xl font-bold text-[#141b2b] mb-1">Heritage Delivery</h3>
            <p className="text-xs md:text-sm text-[#3e4850] mb-6">
              Bring the soul of {selectedCommunity.name} to your doorstep with our specialized logistic network.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Standard */}
              <div
                onClick={() => {
                  setDeliveryType('standard');
                  onOpenCart();
                }}
                className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                  deliveryType === 'standard'
                    ? 'border-[#006591] bg-white shadow-xs'
                    : 'border-[#bec8d2]/40 bg-[#f1f3ff] hover:bg-white'
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <h4 className="text-sm font-bold text-[#141b2b]">Standard Delivery</h4>
                  <span className="material-symbols-outlined text-sm text-[#006591]">
                    arrow_forward
                  </span>
                </div>
                <p className="text-xs text-[#3e4850]">Reliable delivery from any single community store.</p>
              </div>

              {/* Concierge */}
              <div
                onClick={() => {
                  setDeliveryType('concierge');
                  onOpenCart();
                }}
                className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                  deliveryType === 'concierge'
                    ? 'bg-[#006591] text-white border-[#006591] shadow-md'
                    : 'bg-[#006591]/90 text-white border-[#006591] hover:bg-[#006591]'
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <h4 className="text-sm font-bold">Concierge Delivery</h4>
                  <span className="material-symbols-outlined text-sm">bolt</span>
                </div>
                <p className="text-xs opacity-90">One rider, multiple stops. Full market run in one go.</p>
              </div>
            </div>
          </section>

          {/* 3. Event Tickets */}
          <section className="md:col-span-12 group relative overflow-hidden rounded-3xl glass-card border border-[#006591]/20">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/3 h-56 lg:h-auto overflow-hidden">
                <img
                  src={PAKISTAN_EVENTS[0].imageUrl}
                  alt="Cultural Event"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="lg:w-2/3 p-6 md:p-8 bg-white flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-[#141b2b] mb-1">Event Tickets</h3>
                      <p className="text-xs md:text-sm text-[#3e4850] max-w-lg">
                        Don't miss out on the rhythm of our culture. Book your spot at the upcoming Basant Festival, Qawwali nights, and community charity dinners.
                      </p>
                    </div>

                    <div className="bg-[#006591]/10 p-2.5 rounded-2xl border border-[#006591]/20 shrink-0">
                      <span className="material-symbols-outlined text-[#006591] text-2xl filled">
                        confirmation_number
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    {PAKISTAN_EVENTS.slice(0, 2).map((evt) => (
                      <div
                        key={evt.id}
                        onClick={() => onBookEvent(evt)}
                        className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#f1f3ff] border border-[#bec8d2]/30 hover:border-[#0ea5e9] transition-all cursor-pointer group/evt"
                      >
                        <div className="text-center bg-[#dce2f7] px-3 py-1.5 rounded-xl border border-[#bec8d2]/30 min-w-[48px]">
                          <span className="block text-[10px] font-bold text-[#3e4850] uppercase">
                            {evt.month}
                          </span>
                          <span className="block text-lg font-bold text-[#006591] leading-tight">
                            {evt.day}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs font-bold text-[#141b2b] truncate">{evt.title}</h4>
                          <p className="text-[10px] text-[#3e4850]">{evt.location}</p>
                        </div>
                        <span className="material-symbols-outlined text-[#006591] text-sm group-hover/evt:translate-x-1 transition-transform">
                          chevron_right
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onNavigate('events')}
                  className="mt-6 flex items-center gap-1.5 text-[#006591] font-bold text-xs hover:translate-x-1 transition-transform self-start"
                >
                  <span>View all upcoming events</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
