import React, { useRef, useEffect } from 'react';
import { INVITATION_CONFIG } from '../config';

interface SnoopyClosingVideoProps {
  className?: string;
}

export const SnoopyClosingVideo: React.FC<SnoopyClosingVideoProps> = ({ className = '' }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Asegurar reproducción automática fluida en móviles (iOS Safari / Android)
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.defaultMuted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay policy fallback: reintentar al interactuar
          const onUserTouch = () => {
            video.play().catch(() => {});
            window.removeEventListener('touchstart', onUserTouch);
            window.removeEventListener('click', onUserTouch);
          };
          window.addEventListener('touchstart', onUserTouch, { passive: true });
          window.addEventListener('click', onUserTouch, { passive: true });
        });
      }
    }
  }, []);

  return (
    <div className={`relative w-full flex justify-center items-center my-3 select-none ${className}`}>
      {/* Contenedor con máscara de difuminado radial suave (vignette) y blend para fundir el fondo con el lienzo de la tarjeta */}
      <div
        className="relative w-[88%] sm:w-[84%] max-w-[325px] overflow-hidden rounded-[26px] sm:rounded-[30px]"
        style={{
          // Difumina suavemente los bordes del video hacia la transparencia para eliminar cualquier línea o caja rectangular dura
          WebkitMaskImage: 'radial-gradient(ellipse 92% 86% at 50% 50%, rgba(0,0,0,1) 58%, rgba(0,0,0,0) 98%)',
          maskImage: 'radial-gradient(ellipse 92% 86% at 50% 50%, rgba(0,0,0,1) 58%, rgba(0,0,0,0) 98%)',
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          preload="auto"
          className="w-full h-auto object-contain mx-auto transition-transform duration-300 pointer-events-none"
          style={{
            // Ajuste sutil de brillo y contraste para asimilar la temperatura del video con el fondo crema #FFFDF7
            filter: 'contrast(1.05) brightness(1.05)',
            // Modo multiply sutil para que los tonos claros se integren con el papel
            mixBlendMode: 'multiply',
          }}
        >
          {/* Fuente local descargada en /public/videos/ */}
          <source src={INVITATION_CONFIG.closingVideo.src} type="video/mp4" />
          {/* Fuente remota de respaldo en Cloudinary */}
          <source src={INVITATION_CONFIG.closingVideo.fallbackUrl} type="video/mp4" />
        </video>

        {/* Gradiente perimetral adicional de suavizado en las esquinas */}
        <div
          className="absolute inset-0 pointer-events-none rounded-[26px] sm:rounded-[30px]"
          style={{
            boxShadow: 'inset 0 0 24px 10px #FFFDF7',
          }}
        />
      </div>
    </div>
  );
};
