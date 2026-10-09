import React, { useState, useEffect } from 'react';
import { INVITATION_CONFIG } from '../config';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isCompleted: boolean;
}

export const CountdownTimer: React.FC = () => {
  const targetDate = new Date(INVITATION_CONFIG.date.targetDate);

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isCompleted: true };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds, isCompleted: false };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Formato con dos dígitos
  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <div className="w-[90%] sm:w-[88%] mx-auto my-3 text-center">
      {/* Contenedor estilo tarjeta postal artesanal con bordes redondeados y sombra sutil */}
      <div className="bg-[#FFFDF7] rounded-[24px] p-3.5 sm:p-4 border-2 border-[#F8CDD7]/70 shadow-2xs relative overflow-hidden">
        {/* Fondo decorativo muy suave */}
        <div className="absolute -right-6 -bottom-6 w-20 h-20 bg-[#FFF0A8]/30 rounded-full blur-xl pointer-events-none" />
        <div className="absolute -left-6 -top-6 w-20 h-20 bg-[#F8CDD7]/30 rounded-full blur-xl pointer-events-none" />

        {/* Encabezado con fecha destacada */}
        <div className="flex items-center justify-center gap-1.5 mb-2.5">
          <span className="text-[14px]">🗓️</span>
          <span className="font-script font-bold text-[22px] sm:text-[24px] text-[#29252A] leading-none">
            {INVITATION_CONFIG.date.fullDisplay}
          </span>
          <span className="text-[#E95773] text-[12px]">✨</span>
        </div>

        {timeLeft.isCompleted ? (
          <div className="py-2 px-3 bg-[#FEF4F7] rounded-2xl border border-[#F8CDD7] animate-pulse-soft">
            <p className="font-script font-bold text-[22px] text-[#E95773]">
              ¡Hoy es el cumple de Charo! 🎂🎉
            </p>
            <p className="font-body text-xs text-[#29252A]/75 font-semibold">
              ¡Los esperamos para festejar juntos!
            </p>
          </div>
        ) : (
          <div>
            <p className="font-body font-semibold text-[11.5px] text-[#29252A]/65 mb-2.5 uppercase tracking-widest">
              Faltan para el cumple
            </p>

            {/* Cajas de la cuenta regresiva en tonos pastel */}
            <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
              {/* Días */}
              <div className="bg-[#FEF4F7] rounded-[18px] py-2 px-1 border border-[#F8CDD7] shadow-2xs flex flex-col items-center">
                <span className="font-body font-extrabold text-[22px] sm:text-[24px] text-[#E95773] leading-none">
                  {pad(timeLeft.days)}
                </span>
                <span className="font-body font-bold text-[9.5px] sm:text-[10px] text-[#29252A]/60 mt-1 uppercase tracking-wider">
                  Días
                </span>
              </div>

              {/* Horas */}
              <div className="bg-[#FFFDE8] rounded-[18px] py-2 px-1 border border-[#FFF0A8] shadow-2xs flex flex-col items-center">
                <span className="font-body font-extrabold text-[22px] sm:text-[24px] text-[#B45309] leading-none">
                  {pad(timeLeft.hours)}
                </span>
                <span className="font-body font-bold text-[9.5px] sm:text-[10px] text-[#29252A]/60 mt-1 uppercase tracking-wider">
                  Horas
                </span>
              </div>

              {/* Minutos */}
              <div className="bg-[#F0F8FF] rounded-[18px] py-2 px-1 border border-[#DCEFF7] shadow-2xs flex flex-col items-center">
                <span className="font-body font-extrabold text-[22px] sm:text-[24px] text-[#1E4760] leading-none">
                  {pad(timeLeft.minutes)}
                </span>
                <span className="font-body font-bold text-[9.5px] sm:text-[10px] text-[#29252A]/60 mt-1 uppercase tracking-wider">
                  Min
                </span>
              </div>

              {/* Segundos */}
              <div className="bg-[#FFFDF7] rounded-[18px] py-2 px-1 border border-[#F8CDD7]/80 shadow-2xs flex flex-col items-center">
                <span className="font-body font-extrabold text-[22px] sm:text-[24px] text-[#29252A] leading-none">
                  {pad(timeLeft.seconds)}
                </span>
                <span className="font-body font-bold text-[9.5px] sm:text-[10px] text-[#29252A]/60 mt-1 uppercase tracking-wider">
                  Seg
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
