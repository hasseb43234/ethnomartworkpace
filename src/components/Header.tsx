import React, { useState } from 'react';
import { ViewMode } from '../types';

interface HeaderProps {
  currentView: ViewMode;
  onNavigate: (view: ViewMode) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenLocationModal: () => void;
  onOpenAccountModal: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCommunityName?: string;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigate,
  cartCount,
  onOpenCart,
  onOpenLocationModal,
  onOpenAccountModal,
  searchQuery,
  setSearchQuery,
  selectedCommunityName
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex justify-between items-center w-full px-4 md:px-10 py-4 bg-[#f9f9ff]/90 backdrop-blur-md shadow-xs border-b border-[#bec8d2]/30 transition-all">
      <div className="flex items-center gap-6 md:gap-8">
        <button
          onClick={() => onNavigate('landing')}
          className="text-left focus:outline-none group flex items-center gap-2"
        >
          <span className="font-extrabold text-2xl md:text-3xl text-[#006591] tracking-tight group-hover:opacity-90 transition-opacity">
            Ethno Mart
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => onNavigate('landing')}
            className={`text-sm font-semibold transition-all pb-1 border-b-2 ${
              currentView === 'landing'
                ? 'text-[#006591] border-[#006591]'
                : 'text-[#3e4850] border-transparent hover:text-[#006591]'
            }`}
          >
            Marketplace
          </button>
          <button
            onClick={() => onNavigate('select-community')}
            className={`text-sm font-semibold transition-all pb-1 border-b-2 ${
              currentView === 'select-community' || currentView === 'community-hub'
                ? 'text-[#006591] border-[#006591]'
                : 'text-[#3e4850] border-transparent hover:text-[#006591]'
            }`}
          >
            Communities
          </button>
          <button
            onClick={() => onNavigate('forum')}
            className={`text-sm font-semibold transition-all pb-1 border-b-2 ${
              currentView === 'forum'
                ? 'text-[#006591] border-[#006591]'
                : 'text-[#3e4850] border-transparent hover:text-[#006591]'
            }`}
          >
            Forum
          </button>
          <button
            onClick={() => onNavigate('jobs')}
            className={`text-sm font-semibold transition-all pb-1 border-b-2 ${
              currentView === 'jobs'
                ? 'text-[#006591] border-[#006591]'
                : 'text-[#3e4850] border-transparent hover:text-[#006591]'
            }`}
          >
            Jobs
          </button>
          <button
            onClick={() => onNavigate('events')}
            className={`text-sm font-semibold transition-all pb-1 border-b-2 ${
              currentView === 'events'
                ? 'text-[#006591] border-[#006591]'
                : 'text-[#3e4850] border-transparent hover:text-[#006591]'
            }`}
          >
            Events
          </button>
        </nav>
      </div>

      <div className="flex items-center gap-3 md:gap-4">
        {/* Search Bar */}
        <div className="hidden lg:flex items-center bg-[#e9edff] rounded-full px-4 py-2 border border-[#bec8d2] focus-within:border-[#0ea5e9] focus-within:ring-2 focus-within:ring-[#0ea5e9]/20 transition-all">
          <span className="material-symbols-outlined text-[#6e7881] mr-2 text-xl">search</span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent border-none focus:outline-none text-sm w-44 md:w-56 text-[#141b2b] placeholder-[#3e4850]"
            placeholder={
              currentView === 'community-hub' && selectedCommunityName
                ? `Search ${selectedCommunityName} hub...`
                : "Search culture..."
            }
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} className="text-[#6e7881] hover:text-[#141b2b] text-xs">
              ✕
            </button>
          )}
        </div>

        {/* Action Icons */}
        <div className="flex items-center gap-1 md:gap-3">
          <button
            onClick={onOpenLocationModal}
            className="p-2 text-[#3e4850] hover:text-[#006591] hover:bg-[#e9edff] rounded-full transition-transform active:scale-95 relative"
            title="Location Settings"
          >
            <span className="material-symbols-outlined text-2xl">location_on</span>
          </button>

          <button
            onClick={onOpenCart}
            className="p-2 text-[#3e4850] hover:text-[#006591] hover:bg-[#e9edff] rounded-full transition-transform active:scale-95 relative"
            title="Shopping Cart"
          >
            <span className="material-symbols-outlined text-2xl">shopping_cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#0ea5e9] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-xs">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={onOpenAccountModal}
            className="p-2 text-[#3e4850] hover:text-[#006591] hover:bg-[#e9edff] rounded-full transition-transform active:scale-95"
            title="User Account"
          >
            <span className="material-symbols-outlined text-2xl">account_circle</span>
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#3e4850] hover:text-[#006591]"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#f9f9ff] border-b border-[#bec8d2] p-4 flex flex-col gap-3 shadow-lg md:hidden z-50">
          <div className="flex items-center bg-[#e9edff] rounded-full px-4 py-2 border border-[#bec8d2] mb-2">
            <span className="material-symbols-outlined text-[#6e7881] mr-2">search</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-none focus:outline-none text-sm w-full text-[#141b2b]"
              placeholder="Search culture..."
            />
          </div>
          <button
            onClick={() => {
              onNavigate('landing');
              setMobileMenuOpen(false);
            }}
            className="text-left font-semibold text-sm py-2 px-3 rounded-lg hover:bg-[#e9edff] text-[#141b2b]"
          >
            Marketplace Overview
          </button>
          <button
            onClick={() => {
              onNavigate('select-community');
              setMobileMenuOpen(false);
            }}
            className="text-left font-semibold text-sm py-2 px-3 rounded-lg hover:bg-[#e9edff] text-[#141b2b]"
          >
            Select Community
          </button>
          <button
            onClick={() => {
              onNavigate('forum');
              setMobileMenuOpen(false);
            }}
            className="text-left font-semibold text-sm py-2 px-3 rounded-lg hover:bg-[#e9edff] text-[#141b2b]"
          >
            Cultural Forum
          </button>
          <button
            onClick={() => {
              onNavigate('jobs');
              setMobileMenuOpen(false);
            }}
            className="text-left font-semibold text-sm py-2 px-3 rounded-lg hover:bg-[#e9edff] text-[#141b2b]"
          >
            Cultural Jobs
          </button>
          <button
            onClick={() => {
              onNavigate('events');
              setMobileMenuOpen(false);
            }}
            className="text-left font-semibold text-sm py-2 px-3 rounded-lg hover:bg-[#e9edff] text-[#141b2b]"
          >
            Events Calendar
          </button>
        </div>
      )}
    </header>
  );
};
