import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { Modals } from './components/Modals';
import { MarketplaceLandingView } from './views/MarketplaceLandingView';
import { CommunitySelectorView } from './views/CommunitySelectorView';
import { CommunityHubView } from './views/CommunityHubView';
import { ForumView } from './views/ForumView';
import { JobsView } from './views/JobsView';
import { EventsView } from './views/EventsView';
import { COMMUNITIES, MARKETPLACE_CATEGORIES } from './data/mockData';
import { CartItem, Community, EventItem, MarketplaceItem, ViewMode } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewMode>('landing');
  const [selectedCommunity, setSelectedCommunity] = useState<Community>(COMMUNITIES[0]); // Pakistan Hub default

  // Cart State
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: MARKETPLACE_CATEGORIES[0].items[0], // Pashmina Shawl
      quantity: 1,
    },
  ]);
  const [deliveryType, setDeliveryType] = useState<'standard' | 'concierge'>('concierge');
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);

  // Modals state
  const [requestCommunityOpen, setRequestCommunityOpen] = useState(false);
  const [bookingEvent, setBookingEvent] = useState<EventItem | null>(null);
  const [sdgModalOpen, setSdgModalOpen] = useState(false);
  const [viewingProduct, setViewingProduct] = useState<MarketplaceItem | null>(null);
  const [locationModalOpen, setLocationModalOpen] = useState(false);
  const [accountModalOpen, setAccountModalOpen] = useState(false);
  const [orderSuccessOpen, setOrderSuccessOpen] = useState(false);

  // Search state
  const [searchQuery, setSearchQuery] = useState('');

  // Cart operations
  const handleAddToCart = (item: MarketplaceItem) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex((ci) => ci.product.id === item.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      }
      return [...prev, { product: item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((ci) => {
          if (ci.product.id === productId) {
            const newQty = ci.quantity + delta;
            return newQty > 0 ? { ...ci, quantity: newQty } : null;
          }
          return ci;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((ci) => ci.product.id !== productId));
  };

  const handleCheckout = () => {
    setCartDrawerOpen(false);
    setCartItems([]);
    setOrderSuccessOpen(true);
  };

  const handleSelectCommunity = (comm: Community) => {
    setSelectedCommunity(comm);
    setCurrentView('community-hub');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const totalCartCount = cartItems.reduce((acc, ci) => acc + ci.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f9ff] text-[#141b2b] font-sans">
      <Header
        currentView={currentView}
        onNavigate={(view) => {
          setCurrentView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        cartCount={totalCartCount}
        onOpenCart={() => setCartDrawerOpen(true)}
        onOpenLocationModal={() => setLocationModalOpen(true)}
        onOpenAccountModal={() => setAccountModalOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCommunityName={selectedCommunity.name}
      />

      <div className="flex-1">
        {currentView === 'landing' && (
          <MarketplaceLandingView
            onNavigate={(view) => {
              setCurrentView(view);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSearch={(query) => {
              setSearchQuery(query);
              setCurrentView('select-community');
            }}
            onOpenSDGModal={() => setSdgModalOpen(true)}
          />
        )}

        {currentView === 'select-community' && (
          <CommunitySelectorView
            onSelectCommunity={handleSelectCommunity}
            onOpenRequestCommunity={() => setRequestCommunityOpen(true)}
            onNavigate={setCurrentView}
          />
        )}

        {currentView === 'community-hub' && (
          <CommunityHubView
            selectedCommunity={selectedCommunity}
            onSelectCommunity={setSelectedCommunity}
            onOpenRequestCommunity={() => setRequestCommunityOpen(true)}
            onViewProduct={(product) => setViewingProduct(product)}
            onAddToCart={handleAddToCart}
            onBookEvent={(evt) => setBookingEvent(evt)}
            onNavigate={setCurrentView}
            deliveryType={deliveryType}
            setDeliveryType={setDeliveryType}
            onOpenCart={() => setCartDrawerOpen(true)}
            onOpenLocationModal={() => setLocationModalOpen(true)}
          />
        )}

        {currentView === 'forum' && <ForumView />}

        {currentView === 'jobs' && <JobsView />}

        {currentView === 'events' && (
          <EventsView onBookEvent={(evt) => setBookingEvent(evt)} />
        )}
      </div>

      <Footer
        onNavigate={(view) => {
          setCurrentView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenSDGModal={() => setSdgModalOpen(true)}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={cartDrawerOpen}
        onClose={() => setCartDrawerOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
        deliveryType={deliveryType}
        setDeliveryType={setDeliveryType}
      />

      {/* Interactive Modals */}
      <Modals
        requestCommunityOpen={requestCommunityOpen}
        onCloseRequestCommunity={() => setRequestCommunityOpen(false)}
        bookingEvent={bookingEvent}
        onCloseBookingEvent={() => setBookingEvent(null)}
        onConfirmBooking={(evt, count) => {
          console.log('Booked', evt.title, count);
        }}
        sdgModalOpen={sdgModalOpen}
        onCloseSDGModal={() => setSdgModalOpen(false)}
        viewingProduct={viewingProduct}
        onCloseViewingProduct={() => setViewingProduct(null)}
        onAddToCart={handleAddToCart}
        locationModalOpen={locationModalOpen}
        onCloseLocationModal={() => setLocationModalOpen(false)}
        accountModalOpen={accountModalOpen}
        onCloseAccountModal={() => setAccountModalOpen(false)}
        orderSuccessOpen={orderSuccessOpen}
        onCloseOrderSuccess={() => setOrderSuccessOpen(false)}
      />
    </div>
  );
}
