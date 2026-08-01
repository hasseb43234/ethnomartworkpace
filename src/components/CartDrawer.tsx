import React from 'react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onCheckout: () => void;
  deliveryType: 'standard' | 'concierge';
  setDeliveryType: (type: 'standard' | 'concierge') => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
  deliveryType,
  setDeliveryType,
}) => {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const deliveryFee = deliveryType === 'concierge' ? 12 : 5;
  const total = subtotal + (cartItems.length > 0 ? deliveryFee : 0);

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer content */}
      <div className="relative w-full max-w-md bg-[#ffffff] h-full shadow-2xl flex flex-col z-10 overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-[#bec8d2]/30 flex items-center justify-between bg-[#f9f9ff]">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#006591] text-2xl">shopping_cart</span>
            <h2 className="font-bold text-xl text-[#141b2b]">Heritage Cart</h2>
            <span className="bg-[#c9e6ff] text-[#001e2f] text-xs px-2.5 py-0.5 rounded-full font-bold">
              {cartItems.reduce((sum, item) => sum + item.quantity, 0)} items
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#e9edff] text-[#3e4850] transition-colors"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Delivery Options selector */}
        <div className="p-4 bg-[#f1f3ff] border-b border-[#bec8d2]/30">
          <label className="block text-xs font-bold text-[#141b2b] uppercase tracking-wider mb-2">
            Heritage Delivery Method
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setDeliveryType('standard')}
              className={`p-2.5 rounded-xl text-left border text-xs font-semibold transition-all ${
                deliveryType === 'standard'
                  ? 'bg-white border-[#006591] text-[#006591] shadow-xs'
                  : 'bg-[#f9f9ff] border-[#bec8d2] text-[#3e4850] hover:bg-white'
              }`}
            >
              <div className="flex items-center justify-between mb-0.5">
                <span>Standard Delivery</span>
                <span className="font-bold">$5.00</span>
              </div>
              <p className="text-[10px] text-[#3e4850]/80">Single community store drop</p>
            </button>

            <button
              onClick={() => setDeliveryType('concierge')}
              className={`p-2.5 rounded-xl text-left border text-xs font-semibold transition-all ${
                deliveryType === 'concierge'
                  ? 'bg-[#006591] border-[#006591] text-white shadow-xs'
                  : 'bg-[#f9f9ff] border-[#bec8d2] text-[#3e4850] hover:bg-white'
              }`}
            >
              <div className="flex items-center justify-between mb-0.5">
                <span>Concierge Delivery</span>
                <span className="font-bold">$12.00</span>
              </div>
              <p className={`text-[10px] ${deliveryType === 'concierge' ? 'text-white/90' : 'text-[#3e4850]/80'}`}>
                One rider, multi-store market run
              </p>
            </button>
          </div>
        </div>

        {/* Item List */}
        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 custom-scrollbar">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-12 text-[#3e4850]">
              <span className="material-symbols-outlined text-6xl text-[#bec8d2] mb-3">
                storefront
              </span>
              <p className="font-bold text-lg text-[#141b2b]">Your cart is empty</p>
              <p className="text-xs text-[#3e4850] mt-1 max-w-xs">
                Explore authentic Lahori fashion, spice kits, and traditional heritage products from global artisans.
              </p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.product.id}
                className="flex items-center gap-3 p-3 rounded-2xl bg-[#f9f9ff] border border-[#bec8d2]/30 shadow-2xs hover:border-[#0ea5e9]/50 transition-all"
              >
                <img
                  src={item.product.imageUrl}
                  alt={item.product.name}
                  className="w-16 h-16 rounded-xl object-cover border border-[#bec8d2]/20"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-xs text-[#141b2b] truncate">{item.product.name}</h4>
                  <p className="text-[10px] text-[#3e4850]">{item.product.origin}</p>
                  <div className="font-extrabold text-xs text-[#006591] mt-1">
                    ${item.product.price}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center border border-[#bec8d2] rounded-lg bg-white overflow-hidden">
                    <button
                      onClick={() => onUpdateQuantity(item.product.id, -1)}
                      className="px-2 py-1 text-xs text-[#3e4850] hover:bg-[#e9edff]"
                    >
                      -
                    </button>
                    <span className="px-2 text-xs font-bold text-[#141b2b]">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.product.id, 1)}
                      className="px-2 py-1 text-xs text-[#3e4850] hover:bg-[#e9edff]"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.product.id)}
                    className="text-[#ba1a1a] p-1 hover:bg-[#ffdad6] rounded-lg transition-colors"
                    title="Remove item"
                  >
                    <span className="material-symbols-outlined text-sm">delete</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Checkout */}
        {cartItems.length > 0 && (
          <div className="p-5 border-t border-[#bec8d2]/30 bg-[#f9f9ff] flex flex-col gap-3">
            <div className="flex justify-between text-xs text-[#3e4850]">
              <span>Subtotal</span>
              <span className="font-semibold">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-xs text-[#3e4850]">
              <span>Heritage Delivery ({deliveryType === 'concierge' ? 'Concierge' : 'Standard'})</span>
              <span className="font-semibold">${deliveryFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm font-extrabold text-[#141b2b] pt-2 border-t border-[#bec8d2]/20">
              <span>Total</span>
              <span className="text-[#006591] text-base">${total.toFixed(2)}</span>
            </div>

            <button
              onClick={onCheckout}
              className="w-full py-3.5 bg-[#006591] text-white font-bold text-sm rounded-xl hover:bg-[#005b78] transition-all shadow-md flex items-center justify-center gap-2 active:scale-98"
            >
              <span>Proceed to Checkout</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
