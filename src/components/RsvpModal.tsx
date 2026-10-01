import React, { useState } from 'react';
import { MessageCircle, X, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { INVITATION_CONFIG } from '../config';
import { HeartDoodle, FriesIcon, HouseIcon } from './Decorations';

interface RsvpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RsvpModal: React.FC<RsvpModalProps> = ({ isOpen, onClose }) => {
  const [selectedEvent, setSelectedEvent] = useState<'mcdonalds' | 'familia'>('mcdonalds');
  const [guestName, setGuestName] = useState('');

  if (!isOpen) return null;

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

    let text = '';
    const nameStr = guestName.trim();

    if (selectedEvent === 'mcdonalds') {
      text = nameStr
        ? `Hola, soy ${nameStr}. Confirmo asistencia al cumpleaños de Charo para McDonald’s.`
        : `Hola, confirmo asistencia al cumpleaños de Charo para McDonald’s.`;
    } else {
      text = nameStr
        ? `Hola, soy ${nameStr}. Confirmo asistencia al cumpleaños de Charo para el festejo familiar.`
        : `Hola, confirmo asistencia al cumpleaños de Charo para el festejo familiar.`;
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
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#FFFDF7] border border-[#F8CDD7]/60 text-[#29252A]/70 flex items-center justify-center hover:bg-[#F8CDD7]/20 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Encabezado */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#F8CDD7]/40 text-[#E95773] mb-2 shadow-2xs border border-[#F8CDD7]">
            <HeartDoodle className="w-6 h-6" color="#E95773" />
          </div>
          <h3 className="font-script font-bold text-3xl text-[#29252A] leading-tight">Confirmar Asistencia</h3>
          <p className="text-xs text-[#29252A]/65 font-body font-medium mt-0.5">Seleccioná tu festejo para avisar por WhatsApp</p>
        </div>

        <form onSubmit={handleConfirm} className="space-y-4">
          {/* Nombre opcional */}
          <div>
            <label className="block text-xs font-bold text-[#29252A] mb-1 font-body">
              Tu nombre (opcional)
            </label>
            <input
              type="text"
              placeholder="Ej: Sofi / Familia Pérez"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-2xl bg-[#FFFDF7] border border-[#F8CDD7] text-sm text-[#29252A] placeholder-[#29252A]/40 focus:outline-none focus:ring-2 focus:ring-[#F8CDD7] font-body font-medium transition-all"
            />
          </div>

          {/* Opciones excluyentes: McDonald's o Festejo Familiar */}
          <div>
            <label className="block text-xs font-bold text-[#29252A] mb-2 font-body">
              Elegí a cuál asistís:
            </label>
            <div className="space-y-2.5">
              {/* Opción 1: McDonald's */}
              <button
                type="button"
                onClick={() => setSelectedEvent('mcdonalds')}
                className={`w-full flex items-center justify-between p-3.5 rounded-2xl text-left border transition-all ${
                  selectedEvent === 'mcdonalds'
                    ? 'bg-[#FFFDE8] border-[#FFF0A8] ring-2 ring-[#FFF0A8] shadow-2xs'
                    : 'bg-[#FFFDF7] border-[#F8CDD7]/40 hover:bg-[#FFFDE8]/40'
                }`}
              >
                <div className="flex items-center gap-3">
                  <FriesIcon className="w-6 h-6 shrink-0" />
                  <div>
                    <div className="font-script font-bold text-lg text-[#29252A] leading-tight">
                      Confirmo para McDonald’s
                    </div>
                    <div className="text-xs text-[#29252A]/70 font-body font-medium">
                      Para amiguitos • De 13:00 a 15:00 hs
                    </div>
                  </div>
                </div>
                {selectedEvent === 'mcdonalds' && (
                  <CheckCircle2 className="w-5 h-5 text-[#B45309] shrink-0" />
                )}
              </button>

              {/* Opción 2: Festejo Familiar */}
              <button
                type="button"
                onClick={() => setSelectedEvent('familia')}
                className={`w-full flex items-center justify-between p-3.5 rounded-2xl text-left border transition-all ${
                  selectedEvent === 'familia'
                    ? 'bg-[#FEF4F7] border-[#F8CDD7] ring-2 ring-[#F8CDD7] shadow-2xs'
                    : 'bg-[#FFFDF7] border-[#F8CDD7]/40 hover:bg-[#FEF4F7]/40'
                }`}
              >
                <div className="flex items-center gap-3">
                  <HouseIcon className="w-6 h-6 shrink-0" />
                  <div>
                    <div className="font-script font-bold text-lg text-[#29252A] leading-tight">
                      Confirmo para el festejo familiar
                    </div>
                    <div className="text-xs text-[#29252A]/70 font-body font-medium">
                      Calle 4 y 40 • A partir de las 17:00 hs
                    </div>
                  </div>
                </div>
                {selectedEvent === 'familia' && (
                  <CheckCircle2 className="w-5 h-5 text-[#E95773] shrink-0" />
                )}
              </button>
            </div>
          </div>

          {/* Botón de acción WhatsApp */}
          <button
            type="submit"
            className="w-full mt-2 flex items-center justify-center gap-2 py-3.5 px-4 rounded-full bg-[#25D366] hover:bg-[#20BE5B] text-white font-body font-bold text-sm transition-all shadow-sm active:scale-[0.98]"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Confirmar por WhatsApp</span>
          </button>
        </form>
      </div>
    </div>
  );
};
