import React, { useState } from 'react';
import { X } from 'lucide-react';
import confetti from 'canvas-confetti';
import { INVITATION_CONFIG } from '../config';
import { PartyIcon, HouseIcon } from './Decorations';

interface RsvpModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetEvent: 'amiguitos' | 'familia';
}

export const RsvpModal: React.FC<RsvpModalProps> = ({
  isOpen,
  onClose,
  targetEvent,
}) => {
  const [guestName, setGuestName] = useState('');

  if (!isOpen) return null;

  const isFriends = targetEvent === 'amiguitos';

  const triggerConfetti = () => {
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#F8CDD7', '#FFF0A8', '#DCEFF7', '#E95773', '#FFFFFF'],
    });
  };

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    triggerConfetti();

    const nameStr = guestName.trim();
    let text = '';

    if (isFriends) {
      text = nameStr
        ? `¡Hola! Soy ${nameStr}. Confirmo asistencia para festejar con los amiguitos el cumple de Charo el 12 de Octubre (De 13:00 a 15:00 hs en Calle 4 y 40) 🎈💕`
        : `¡Hola! Confirmo asistencia para festejar con los amiguitos el cumple de Charo el 12 de Octubre (De 13:00 a 15:00 hs en Calle 4 y 40) 🎈💕`;
    } else {
      text = nameStr
        ? `¡Hola! Soy ${nameStr}. Confirmo asistencia para el festejo familiar del cumple de Charo el 12 de Octubre (A partir de las 17:00 hs en Calle 4 y 40) 🏡💕`
        : `¡Hola! Confirmo asistencia para el festejo familiar del cumple de Charo el 12 de Octubre (A partir de las 17:00 hs en Calle 4 y 40) 🏡💕`;
    }

    const whatsappUrl = `https://wa.me/${INVITATION_CONFIG.links.whatsappNumber}?text=${encodeURIComponent(text)}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      onClose();
    }, 350);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/35 backdrop-blur-xs animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm bg-[#FFFDF7] rounded-[32px] p-6 shadow-xl border-2 border-[#F8CDD7]/60 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Cerrar modal"
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#FFFDF7] border border-[#F8CDD7]/60 text-[#29252A]/70 flex items-center justify-center hover:bg-[#F8CDD7]/20 transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Encabezado con ícono temático */}
        <div className="text-center mb-4">
          <div
            className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-2 shadow-2xs border ${
              isFriends
                ? 'bg-[#FFFDE8] text-[#B45309] border-[#FFF0A8]'
                : 'bg-[#FEF4F7] text-[#E95773] border-[#F8CDD7]'
            }`}
          >
            {isFriends ? (
              <PartyIcon className="w-7 h-7" />
            ) : (
              <HouseIcon className="w-7 h-7" />
            )}
          </div>
          <h3 className="font-script font-bold text-3xl text-[#29252A] leading-tight">
            Confirmar Asistencia
          </h3>
          <p className="text-xs text-[#29252A]/65 font-body font-medium mt-0.5">
            {isFriends ? 'Festejo con Amiguitos' : 'Festejo Familiar'}
          </p>
        </div>

        {/* Ficha predeterminada fija con la fecha 12 de Octubre */}
        <div
          className={`p-3.5 rounded-2xl border mb-4 text-left ${
            isFriends
              ? 'bg-[#FFFDE8] border-[#FFF0A8]'
              : 'bg-[#FEF4F7] border-[#F8CDD7]'
          }`}
        >
          <div className="flex items-center gap-3">
            {isFriends ? (
              <PartyIcon className="w-7 h-7 shrink-0" />
            ) : (
              <HouseIcon className="w-7 h-7 shrink-0" />
            )}
            <div>
              <div className="font-script font-bold text-xl text-[#29252A] leading-tight">
                {isFriends ? 'Para mis amiguitos' : 'Para la familia'}
              </div>
              <div
                className={`text-xs font-body font-bold mt-0.5 ${
                  isFriends ? 'text-[#B45309]' : 'text-[#E95773]'
                }`}
              >
                {isFriends
                  ? '12 de Octubre • De 13:00 a 15:00 hs • Calle 4 y 40'
                  : '12 de Octubre • A partir de las 17:00 hs • Calle 4 y 40'}
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleConfirm} className="space-y-4">
          {/* Nombre opcional */}
          <div>
            <label className="block text-xs font-bold text-[#29252A] mb-1 font-body">
              {isFriends ? 'Tu nombre o nombre del amiguito/a' : 'Tu nombre / Familia'}
            </label>
            <input
              type="text"
              placeholder={isFriends ? 'Ej: Sofi / Benja' : 'Ej: Tía Marisa / Familia Pérez'}
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-2xl bg-[#FFFDF7] border border-[#F8CDD7] text-sm text-[#29252A] placeholder-[#29252A]/40 focus:outline-none focus:ring-2 focus:ring-[#F8CDD7] font-body font-medium transition-all"
            />
          </div>

          {/* Botón WhatsApp */}
          <button
            type="submit"
            className={`w-full py-3.5 px-4 rounded-full text-[#29252A] font-body font-bold text-sm shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98 border ${
              isFriends
                ? 'bg-[#FFF0A8] hover:bg-[#FDE68A] border-[#FCD34D]'
                : 'bg-[#F8CDD7] hover:bg-[#F2BAC7] border-[#F2B6C4]'
            }`}
          >
            <span>💬 Confirmar por WhatsApp</span>
          </button>
        </form>
      </div>
    </div>
  );
};
