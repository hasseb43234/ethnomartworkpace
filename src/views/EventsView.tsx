import React from 'react';
import { PAKISTAN_EVENTS } from '../data/mockData';
import { EventItem } from '../types';

interface EventsViewProps {
  onBookEvent: (event: EventItem) => void;
}

export const EventsView: React.FC<EventsViewProps> = ({ onBookEvent }) => {
  return (
    <main className="max-w-[1280px] mx-auto px-4 md:px-10 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-[#141b2b]">Global & Regional Cultural Events</h1>
        <p className="text-sm text-[#3e4850] mt-1">
          Reserve passes for Sufi music nights, kite flying festivals, truck art exhibitions, and community charity banquets.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PAKISTAN_EVENTS.map((evt) => (
          <div
            key={evt.id}
            className="bg-white rounded-3xl overflow-hidden border border-[#bec8d2]/40 hover:border-[#0ea5e9] hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div className="h-44 relative">
              <img
                src={evt.imageUrl}
                alt={evt.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-[#006591] text-white px-3 py-1.5 rounded-xl text-center shadow-md">
                <span className="block text-[10px] font-bold uppercase">{evt.month}</span>
                <span className="block text-base font-extrabold leading-none">{evt.day}</span>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-extrabold uppercase text-[#006591] tracking-wider mb-1 block">
                  {evt.category}
                </span>
                <h3 className="text-xl font-bold text-[#141b2b] mb-2">{evt.title}</h3>
                <p className="text-xs text-[#3e4850] mb-3 flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm text-[#006591]">location_on</span>
                  <span>{evt.location}</span>
                </p>
                <p className="text-xs text-[#3e4850] leading-relaxed mb-4">{evt.description}</p>
              </div>

              <div className="pt-4 border-t border-[#bec8d2]/20 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#3e4850] block">Ticket Price</span>
                  <span className="font-extrabold text-base text-[#006591]">${evt.price}</span>
                </div>

                <button
                  onClick={() => onBookEvent(evt)}
                  className="px-5 py-2.5 bg-[#006591] text-white text-xs font-bold rounded-xl hover:bg-[#005b78] transition-all shadow-md active:scale-95 flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-sm">confirmation_number</span>
                  <span>Book Passes</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};
