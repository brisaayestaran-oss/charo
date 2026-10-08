import React, { useState } from 'react';
import { MapPin, Navigation, Copy, Check, X, ExternalLink } from 'lucide-react';
import { INVITATION_CONFIG } from '../config';
import { PartyIcon, HouseIcon } from './Decorations';

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LocationModal: React.FC<LocationModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const address = INVITATION_CONFIG.links.eventAddress;

  const handleCopyAddress = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
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

        {/* Encabezado */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#DCEFF7] text-[#1E4760] mb-2 shadow-2xs border border-[#C2E3F2]/60">
            <MapPin className="w-5 h-5" />
          </div>
          <h3 className="font-script font-bold text-3xl text-[#29252A] leading-tight">Ubicación del Cumple</h3>
          <p className="text-xs text-[#29252A]/65 font-body font-medium mt-0.5">Información de los festejos de Charo</p>
        </div>

        {/* Fichas de lugares */}
        <div className="space-y-3 mb-5">
          {/* Lugar 1: Amiguitos */}
          <div className="p-4 rounded-[22px] bg-[#FFFDE8] border border-[#FFF0A8] text-left">
            <div className="flex items-start gap-3">
              <PartyIcon className="w-6 h-6 shrink-0 mt-0.5" />
              <div className="flex-1">
                <div className="font-script font-bold text-xl text-[#29252A] leading-tight">Para mis amiguitos</div>
                <div className="text-xs font-body font-bold text-[#B45309] mt-0.5">De 13:00 a 15:00 hs</div>
                <div className="text-[13.5px] font-body font-bold text-[#29252A] mt-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#B45309]" />
                  <span>{address}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Lugar 2: Familia */}
          <div className="p-4 rounded-[22px] bg-[#FEF4F7] border border-[#F8CDD7] text-left">
            <div className="flex items-start gap-3">
              <HouseIcon className="w-6 h-6 shrink-0 mt-0.5" />
              <div className="flex-1">
                <div className="font-script font-bold text-xl text-[#29252A] leading-tight">Para la familia</div>
                <div className="text-xs font-body font-bold text-[#E95773] mt-0.5">A partir de las 17:00 hs</div>
                <div className="text-[13.5px] font-body font-bold text-[#29252A] mt-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#E95773]" />
                  <span>{address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Acciones principales para Google Maps */}
        <div className="space-y-2.5">
          <a
            href={INVITATION_CONFIG.links.familyMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#DCEFF7] hover:bg-[#CFE8F3] text-[#1E4760] font-body font-bold text-sm transition-all shadow-2xs active:scale-[0.98] border border-[#C2E3F2]/60"
          >
            <Navigation className="w-4 h-4 text-[#1E4760]" />
            <span>Ver Calle 4 y 40 en Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70 ml-0.5" />
          </a>

          <button
            onClick={() => handleCopyAddress(address)}
            type="button"
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-[#FFFDF7] hover:bg-[#F8CDD7]/20 text-[#29252A]/85 font-body font-semibold text-xs transition-all active:scale-[0.98] border border-[#F8CDD7]/70 cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700 font-bold">¡Dirección copiada: {address}!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copiar dirección: {address}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
