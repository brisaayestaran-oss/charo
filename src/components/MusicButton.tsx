import React, { useEffect, useRef, useState } from 'react';

export const MusicButton: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Instancia única y persistente del elemento de audio
    const audio = new Audio('/audio/charo-theme.mp3');
    audio.preload = 'auto';
    audio.loop = true;
    audio.volume = 0.5;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);

    audioRef.current = audio;

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (audio.paused) {
        // En mobile: el primer play ocurre DIRECTAMENTE dentro del click/touch del usuario
        await audio.play();
        setIsPlaying(true);
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 3000);
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    } catch (error) {
      console.error('Error reproduciendo audio:', error);
      setIsPlaying(false);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMusic}
        type="button"
        aria-label={isPlaying ? 'Pausar música' : 'Reproducir música'}
        className={`group flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-semibold tracking-wide transition-all duration-300 border cursor-pointer active:scale-95 ${
          isPlaying
            ? 'bg-[#F8CDD7]/40 text-[#E95773] border-[#F8CDD7] shadow-xs ring-2 ring-pink-100'
            : 'bg-[#FFFDF7] text-[#29252A]/80 border-[#F8CDD7]/70 hover:bg-[#F8CDD7]/20 shadow-2xs'
        }`}
      >
        {isPlaying ? (
          <>
            <span className="text-xs">🔊</span>
            {/* Visualizador de ondas animadas */}
            <span className="flex items-center gap-0.5 h-3">
              <span className="w-0.5 bg-[#E95773] h-3 rounded-full animate-bounce" style={{ animationDuration: '0.6s' }} />
              <span className="w-0.5 bg-[#E95773] h-2 rounded-full animate-bounce" style={{ animationDuration: '0.4s', animationDelay: '0.15s' }} />
              <span className="w-0.5 bg-[#E95773] h-3.5 rounded-full animate-bounce" style={{ animationDuration: '0.7s', animationDelay: '0.3s' }} />
            </span>
            <span className="font-body font-semibold">Música</span>
          </>
        ) : (
          <>
            <span className="text-xs">🔇</span>
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
