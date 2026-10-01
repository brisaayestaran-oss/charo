import React, { useEffect, useState } from 'react';
import { audioPlayer } from '../utils/audioPlayer';
import { Volume2, VolumeX } from 'lucide-react';

export const MusicButton: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const unsubscribe = audioPlayer.subscribe((playing) => {
      setIsPlaying(playing);
    });
    return () => unsubscribe();
  }, []);

  const handleToggle = async () => {
    const nextState = await audioPlayer.toggle();
    if (nextState) {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={handleToggle}
        type="button"
        aria-label={isPlaying ? 'Pausar música' : 'Reproducir música'}
        className={`group flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-semibold tracking-wide transition-all duration-300 border active:scale-95 ${
          isPlaying
            ? 'bg-[#F8CDD7]/40 text-[#E95773] border-[#F8CDD7] shadow-xs ring-2 ring-pink-100'
            : 'bg-[#FFFDF7] text-[#29252A]/80 border-[#F8CDD7]/70 hover:bg-[#F8CDD7]/20 shadow-2xs'
        }`}
      >
        {isPlaying ? (
          <>
            {/* Visualizador de ondas de sonido animadas */}
            <span className="flex items-center gap-0.5 h-3">
              <span className="w-0.5 bg-[#E95773] h-3 rounded-full animate-bounce" style={{ animationDuration: '0.6s' }} />
              <span className="w-0.5 bg-[#E95773] h-2 rounded-full animate-bounce" style={{ animationDuration: '0.4s', animationDelay: '0.15s' }} />
              <span className="w-0.5 bg-[#E95773] h-3.5 rounded-full animate-bounce" style={{ animationDuration: '0.7s', animationDelay: '0.3s' }} />
            </span>
            <span className="font-body font-semibold">Pausar</span>
          </>
        ) : (
          <>
            <span className="text-xs">🎵</span>
            <span className="font-body font-semibold">Música</span>
          </>
        )}
      </button>

      {/* Notificación flotante de confirmación */}
      {showNotification && (
        <div className="absolute right-0 top-10 z-50 bg-[#29252A] text-white text-[11px] font-medium px-3 py-1.5 rounded-xl shadow-md whitespace-nowrap animate-fade-in pointer-events-none flex items-center gap-1.5">
          <span>🎶 Sonando música de Snoopy</span>
          <span className="text-[#FFF0A8]">✨</span>
        </div>
      )}
    </div>
  );
};
