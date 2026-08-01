import React, { useState } from 'react';
import { EventItem, MarketplaceItem } from '../types';
import { SDG_GOALS } from '../data/mockData';

interface ModalsProps {
  // Request Community Modal
  requestCommunityOpen: boolean;
  onCloseRequestCommunity: () => void;

  // Event Modal
  bookingEvent: EventItem | null;
  onCloseBookingEvent: () => void;
  onConfirmBooking: (event: EventItem, tickets: number) => void;

  // SDG Modal
  sdgModalOpen: boolean;
  onCloseSDGModal: () => void;

  // Product Location / Details Modal
  viewingProduct: MarketplaceItem | null;
  onCloseViewingProduct: () => void;
  onAddToCart: (item: MarketplaceItem) => void;

  // Location Modal
  locationModalOpen: boolean;
  onCloseLocationModal: () => void;

  // Account Modal
  accountModalOpen: boolean;
  onCloseAccountModal: () => void;

  // Order Success Modal
  orderSuccessOpen: boolean;
  onCloseOrderSuccess: () => void;
}

export const Modals: React.FC<ModalsProps> = ({
  requestCommunityOpen,
  onCloseRequestCommunity,
  bookingEvent,
  onCloseBookingEvent,
  onConfirmBooking,
  sdgModalOpen,
  onCloseSDGModal,
  viewingProduct,
  onCloseViewingProduct,
  onAddToCart,
  locationModalOpen,
  onCloseLocationModal,
  accountModalOpen,
  onCloseAccountModal,
  orderSuccessOpen,
  onCloseOrderSuccess,
}) => {
  // Request Community State
  const [countryName, setCountryName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [reason, setReason] = useState('');
  const [communitySubmitted, setCommunitySubmitted] = useState(false);

  // Ticket Booking State
  const [ticketCount, setTicketCount] = useState(1);
  const [ticketBooked, setTicketBooked] = useState(false);

  // Location State
  const [selectedCity, setSelectedCity] = useState('New York, USA');

  const handleCommunitySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!countryName) return;
    setCommunitySubmitted(true);
    setTimeout(() => {
      setCommunitySubmitted(false);
      setCountryName('');
      setUserEmail('');
      setReason('');
      onCloseRequestCommunity();
    }, 2000);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingEvent) return;
    setTicketBooked(true);
    onConfirmBooking(bookingEvent, ticketCount);
    setTimeout(() => {
      setTicketBooked(false);
      setTicketCount(1);
      onCloseBookingEvent();
    }, 2000);
  };

  return (
    <>
      {/* 1. Request Community Modal */}
      {requestCommunityOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="bg-white rounded-3xl p-6 md:p-8 max-w-lg w-full shadow-2xl border border-[#bec8d2]/30 relative animate-in fade-in zoom-in duration-200">
            <button
              onClick={onCloseRequestCommunity}
              className="absolute top-4 right-4 text-[#3e4850] hover:text-[#141b2b] p-1 rounded-full hover:bg-[#e9edff]"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            {communitySubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-[#c9e6ff] text-[#006591] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-3xl">check_circle</span>
                </div>
                <h3 className="text-2xl font-bold text-[#141b2b] mb-2">Request Received!</h3>
                <p className="text-sm text-[#3e4850]">
                  Thank you! Our global community expansion team is reviewing your request for{' '}
                  <span className="font-bold text-[#006591]">{countryName || 'your community'}</span>.
                </p>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#c9e6ff] text-[#006591] rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined">public</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#141b2b]">Request a Cultural Hub</h3>
                    <p className="text-xs text-[#3e4850]">Bridge the global gap by expanding Ethno Mart</p>
                  </div>
                </div>

                <form onSubmit={handleCommunitySubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#141b2b] mb-1">
                      Country or Cultural Community Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={countryName}
                      onChange={(e) => setCountryName(e.target.value)}
                      placeholder="e.g. Morocco, Vietnam, Colombia, Kenya..."
                      className="w-full px-4 py-2.5 rounded-xl border border-[#bec8d2] focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#141b2b] mb-1">
                      Your Email (for status updates)
                    </label>
                    <input
                      type="email"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#bec8d2] focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#141b2b] mb-1">
                      Tell us about artisans or products in this region
                    </label>
                    <textarea
                      rows={3}
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                      placeholder="Share details about local heritage crafts, traditional dishes, or active diaspora communities..."
                      className="w-full px-4 py-2.5 rounded-xl border border-[#bec8d2] focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20 text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#006591] text-white font-bold rounded-xl hover:bg-[#005b78] transition-all shadow-md mt-2"
                  >
                    Submit Community Proposal
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 2. Event Booking Modal */}
      {bookingEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="bg-white rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl border border-[#bec8d2]/30 relative">
            <button
              onClick={onCloseBookingEvent}
              className="absolute top-4 right-4 text-[#3e4850] hover:text-[#141b2b] p-1 rounded-full hover:bg-[#e9edff]"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            {ticketBooked ? (
              <div className="text-center py-6">
                <span className="material-symbols-outlined text-5xl text-[#006591] mb-2">
                  confirmation_number
                </span>
                <h3 className="text-2xl font-bold text-[#141b2b]">Tickets Confirmed!</h3>
                <p className="text-xs text-[#3e4850] mt-2">
                  You reserved <span className="font-bold">{ticketCount}</span> ticket(s) for{' '}
                  <span className="font-bold text-[#006591]">{bookingEvent.title}</span>. A QR pass has been sent to your device.
                </p>
              </div>
            ) : (
              <div>
                <div className="bg-[#e9edff] p-4 rounded-2xl mb-5 flex items-center gap-4">
                  <div className="bg-[#006591] text-white px-3 py-2 rounded-xl text-center min-w-[56px]">
                    <span className="block text-[10px] uppercase font-bold">{bookingEvent.month}</span>
                    <span className="block text-xl font-extrabold">{bookingEvent.day}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-[#141b2b]">{bookingEvent.title}</h3>
                    <p className="text-xs text-[#3e4850]">{bookingEvent.location}</p>
                  </div>
                </div>

                <form onSubmit={handleBookingSubmit} className="flex flex-col gap-4">
                  <div className="flex justify-between items-center bg-[#f1f3ff] p-3.5 rounded-xl border border-[#bec8d2]/30">
                    <div>
                      <span className="block text-xs font-bold text-[#141b2b]">Ticket Quantity</span>
                      <span className="text-[11px] text-[#3e4850]">${bookingEvent.price} per ticket</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setTicketCount(Math.max(1, ticketCount - 1))}
                        className="w-8 h-8 rounded-lg bg-white border border-[#bec8d2] text-[#141b2b] font-bold text-sm hover:bg-[#e9edff]"
                      >
                        -
                      </button>
                      <span className="font-extrabold text-base text-[#141b2b]">{ticketCount}</span>
                      <button
                        type="button"
                        onClick={() => setTicketCount(ticketCount + 1)}
                        className="w-8 h-8 rounded-lg bg-white border border-[#bec8d2] text-[#141b2b] font-bold text-sm hover:bg-[#e9edff]"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-sm font-bold text-[#141b2b] px-1">
                    <span>Total Amount</span>
                    <span className="text-lg text-[#006591]">${bookingEvent.price * ticketCount}</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#006591] text-white font-bold rounded-xl hover:bg-[#005b78] transition-all shadow-md"
                  >
                    Confirm & Reserve Passes
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 3. SDG Alignment Modal */}
      {sdgModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="bg-white rounded-3xl p-6 md:p-8 max-w-2xl w-full shadow-2xl border border-[#bec8d2]/30 relative max-h-[85vh] overflow-y-auto custom-scrollbar">
            <button
              onClick={onCloseSDGModal}
              className="absolute top-4 right-4 text-[#3e4850] hover:text-[#141b2b] p-1 rounded-full hover:bg-[#e9edff]"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            <h3 className="text-2xl font-bold text-[#141b2b] mb-2">
              UN Sustainable Development Goals (SDG) Alignment
            </h3>
            <p className="text-sm text-[#3e4850] mb-6">
              Ethno Mart is engineered to uphold social, cultural, and economic sustainability in global trade.
            </p>

            <div className="grid grid-cols-1 gap-4">
              {SDG_GOALS.map((sdg) => (
                <div
                  key={sdg.number}
                  className="p-4 rounded-2xl flex items-start gap-4 border border-[#bec8d2]/30 bg-[#f9f9ff]"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold shrink-0 shadow-md"
                    style={{ backgroundColor: sdg.color }}
                  >
                    <span className="material-symbols-outlined text-2xl">{sdg.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-[#141b2b]">{sdg.title}</h4>
                    <p className="text-xs text-[#3e4850] mt-1 leading-relaxed">{sdg.tooltip}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-[#bec8d2]/30 text-center">
              <button
                onClick={onCloseSDGModal}
                className="px-8 py-2.5 bg-[#006591] text-white font-bold rounded-xl text-sm hover:opacity-90 transition-opacity"
              >
                Close Overview
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. Product Details Modal */}
      {viewingProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="bg-white rounded-3xl p-6 max-w-lg w-full shadow-2xl border border-[#bec8d2]/30 relative overflow-hidden">
            <button
              onClick={onCloseViewingProduct}
              className="absolute top-4 right-4 z-10 text-[#3e4850] hover:text-[#141b2b] p-1.5 rounded-full bg-white/80 backdrop-blur-xs"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            <div className="h-64 -mx-6 -mt-6 mb-4 overflow-hidden relative">
              <img
                src={viewingProduct.imageUrl}
                alt={viewingProduct.name}
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-3 left-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full backdrop-blur-xs">
                Origin: {viewingProduct.origin}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-[#141b2b]">{viewingProduct.name}</h3>
            <p className="text-xs text-[#006591] font-bold mb-3">By {viewingProduct.artisanName}</p>

            <p className="text-sm text-[#3e4850] leading-relaxed mb-6">
              {viewingProduct.description}
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-[#bec8d2]/30">
              <div className="text-2xl font-extrabold text-[#006591]">
                ${viewingProduct.price}
              </div>

              <button
                onClick={() => {
                  onAddToCart(viewingProduct);
                  onCloseViewingProduct();
                }}
                className="px-6 py-3 bg-[#006591] text-white font-bold rounded-xl hover:bg-[#005b78] transition-all flex items-center gap-2 shadow-md active:scale-95"
              >
                <span className="material-symbols-outlined text-sm">shopping_cart</span>
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 5. Location Modal */}
      {locationModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl border border-[#bec8d2]/30 relative">
            <button
              onClick={onCloseLocationModal}
              className="absolute top-4 right-4 text-[#3e4850] hover:text-[#141b2b] p-1 rounded-full hover:bg-[#e9edff]"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-2xl text-[#006591]">location_on</span>
              <h3 className="text-xl font-bold text-[#141b2b]">Delivery Region & City</h3>
            </div>

            <p className="text-xs text-[#3e4850] mb-4">
              Select your delivery destination to view available heritage delivery slots and courier speeds.
            </p>

            <div className="flex flex-col gap-2 mb-6">
              {['New York, USA', 'London, UK', 'Toronto, Canada', 'Dubai, UAE', 'Sydney, Australia', 'Lahore, Pakistan'].map((city) => (
                <button
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className={`p-3 rounded-xl text-left text-xs font-semibold flex justify-between items-center transition-all ${
                    selectedCity === city
                      ? 'bg-[#c9e6ff] text-[#001e2f] border border-[#006591]'
                      : 'bg-[#f9f9ff] text-[#3e4850] hover:bg-[#e9edff]'
                  }`}
                >
                  <span>{city}</span>
                  {selectedCity === city && (
                    <span className="material-symbols-outlined text-sm text-[#006591]">check</span>
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={onCloseLocationModal}
              className="w-full py-3 bg-[#006591] text-white font-bold rounded-xl text-sm"
            >
              Save Delivery Location
            </button>
          </div>
        </div>
      )}

      {/* 6. Account Modal */}
      {accountModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl border border-[#bec8d2]/30 relative text-center">
            <button
              onClick={onCloseAccountModal}
              className="absolute top-4 right-4 text-[#3e4850] hover:text-[#141b2b] p-1 rounded-full hover:bg-[#e9edff]"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            <div className="w-20 h-20 rounded-full border-4 border-[#006591]/20 overflow-hidden mx-auto mb-4 bg-[#e9edff] flex items-center justify-center">
              <span className="material-symbols-outlined text-4xl text-[#006591]">account_circle</span>
            </div>

            <h3 className="text-2xl font-bold text-[#141b2b]">Ahmed Malik</h3>
            <span className="inline-block bg-[#c9e6ff] text-[#001e2f] text-xs px-3 py-1 rounded-full font-bold my-2">
              Verified Heritage Member
            </span>

            <p className="text-xs text-[#3e4850] mb-6">
              Member of Pakistan Hub, Global Artisan Guild & SDG Sustainability Circle.
            </p>

            <div className="bg-[#f1f3ff] p-4 rounded-2xl text-left text-xs space-y-2 mb-6">
              <div className="flex justify-between">
                <span className="text-[#3e4850]">Saved Hub:</span>
                <span className="font-bold text-[#141b2b]">Pakistan Community</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#3e4850]">Heritage Rewards:</span>
                <span className="font-bold text-[#006591]">480 Points</span>
              </div>
            </div>

            <button
              onClick={onCloseAccountModal}
              className="w-full py-3 bg-[#006591] text-white font-bold rounded-xl text-sm"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* 7. Order Success Modal */}
      {orderSuccessOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-[#bec8d2]/30 relative text-center animate-in fade-in zoom-in duration-200">
            <div className="w-16 h-16 bg-[#c9e6ff] text-[#006591] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="material-symbols-outlined text-3xl">local_shipping</span>
            </div>

            <h3 className="text-2xl font-bold text-[#141b2b] mb-2">Heritage Order Dispatched!</h3>
            <p className="text-sm text-[#3e4850] mb-6">
              Your order has been routed directly to local artisan centers. You will receive live courier tracking updates shortly.
            </p>

            <button
              onClick={onCloseOrderSuccess}
              className="w-full py-3 bg-[#006591] text-white font-bold rounded-xl text-sm"
            >
              Back to Marketplace
            </button>
          </div>
        </div>
      )}
    </>
  );
};
