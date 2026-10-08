import React from 'react';

/**
 * Ícono ilustrado festivo e infantil para la sección de amiguitos
 * Globos de fiesta pastel y pastelito de cumpleaños con velita encendida estilo Schulz doodle.
 * Cero relación con McDonald's.
 */
export const PartyFriendsDoodle: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Destello de estrellitas arriba */}
    <path d="M11 7 L12 10 L15 11 L12 12 L11 15 L10 12 L7 11 L10 10 Z" fill="#FBBF24" stroke="#29252A" strokeWidth="0.8" />
    <path d="M37 6 L38 8 L40 9 L38 10 L37 12 L36 10 L34 9 L36 8 Z" fill="#E95773" stroke="#29252A" strokeWidth="0.8" />

    {/* Globo 1 (Rosa pastel a la izquierda) */}
    <path
      d="M17 19 C17 13.5 13 9 8 9 C3 9 -1 13.5 -1 19 C-1 24.5 3 28 8 28 C9.5 28 11 27.5 12 26.5 L12.5 29 L14 29 L13.5 26.5 C15.5 24.5 17 22 17 19 Z"
      transform="translate(8, 2)"
      fill="#F8CDD7"
      stroke="#29252A"
      strokeWidth="1.6"
    />
    {/* Brillo del globo 1 */}
    <path d="M12 14 C12 12 14 11 15 11" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />

    {/* Globo 2 (Amarillo manteca a la derecha) */}
    <path
      d="M18 17 C18 12 22 8 27 8 C32 8 36 12 36 17 C36 22 32 25.5 27 25.5 C25.5 25.5 24 25 23 24.2 L22.5 26.5 L21 26.5 L21.5 24.2 C19.5 22.5 18 20 18 17 Z"
      fill="#FFF0A8"
      stroke="#29252A"
      strokeWidth="1.6"
    />
    {/* Brillo del globo 2 */}
    <path d="M29 13 C31 13 32 14.5 32 16.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />

    {/* Cintas de los globos que bajan onduladas */}
    <path d="M20.5 31 C21 34 18 36 21 39" stroke="#E95773" strokeWidth="1.2" strokeLinecap="round" fill="none" />
    <path d="M26.5 30.5 C26 33 28 35 25 39" stroke="#29252A" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="2 2" fill="none" />

    {/* Mini pastelito con velita en el centro */}
    {/* Velita */}
    <rect x="22" y="27" width="2" height="6" fill="#F8CDD7" stroke="#29252A" strokeWidth="1" />
    {/* Llamita encendida */}
    <path d="M23 24 C22 25.5 24 26 23 27 C24 26 24 25.5 23 24 Z" fill="#F59E0B" stroke="#29252A" strokeWidth="0.8" />
    {/* Base del pastel */}
    <rect x="17" y="33" width="12" height="8" rx="2" fill="#FFFFFF" stroke="#29252A" strokeWidth="1.5" />
    <path d="M17 35 Q 20 37, 23 35 Q 26 37, 29 35" stroke="#E95773" strokeWidth="1.4" fill="none" />
    <circle cx="20" cy="38" r="0.8" fill="#FBBF24" />
    <circle cx="23" cy="39" r="0.8" fill="#E95773" />
    <circle cx="26" cy="38" r="0.8" fill="#FBBF24" />
  </svg>
);

/**
 * Ícono ilustrado de casita tierna estilo Schulz
 * Techo inclinado en rosa pastel, chimenea con corazoncito de humo, ventana y puerta.
 */
export const HouseStationeryIcon: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Humito de chimenea con mini corazoncito */}
    <path
      d="M29 7 C29 7 27 4.5 28 3 C29 1.5 31 2 31.5 3.5 C32 5 30 6.5 29 7 Z"
      fill="#F8CDD7"
      stroke="#E95773"
      strokeWidth="1.2"
    />
    {/* Chimenea roja */}
    <rect x="27" y="7" width="4.5" height="9" fill="#E95773" stroke="#29252A" strokeWidth="1.6" />

    {/* Techo a dos aguas en rosa pastel con tablón */}
    <polygon points="22,6 5,21 39,21" fill="#F8CDD7" stroke="#29252A" strokeWidth="2" strokeLinejoin="round" />
    <line x1="10" y1="18" x2="34" y2="18" stroke="#E95773" strokeWidth="1.2" strokeLinecap="round" />

    {/* Paredes de la casita */}
    <rect x="8" y="21" width="28" height="18" rx="2.5" fill="#FFFDF7" stroke="#29252A" strokeWidth="2" />

    {/* Puertita redondeada en coral */}
    <path d="M18 39 L18 29 C18 27 19.5 26 22 26 C24.5 26 26 27 26 29 L26 39" fill="#E95773" stroke="#29252A" strokeWidth="1.6" />

    {/* Ventanita redonda en el ático */}
    <circle cx="22" cy="14" r="3.2" fill="#FFF0A8" stroke="#29252A" strokeWidth="1.4" />
    <line x1="22" y1="11" x2="22" y2="17" stroke="#29252A" strokeWidth="1" />
    <line x1="19" y1="14" x2="25" y2="14" stroke="#29252A" strokeWidth="1" />
  </svg>
);

/**
 * Pequeño Woodstock volando con trayectoria punteada para conectar los dos festejos
 */
export const FlyingWoodstockConnector: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative w-full flex flex-col items-center select-none ${className}`}>
    {/* Línea punteada que conecta hacia abajo con suave curva */}
    <svg viewBox="0 0 320 60" className="w-full h-12 overflow-visible" fill="none">
      {/* Trayectoria curva punteada de vuelo */}
      <path
        d="M60 6 C110 32 140 18 190 28 C230 36 260 52 260 58"
        stroke="#F8CDD7"
        strokeWidth="2"
        strokeDasharray="4 4"
        strokeLinecap="round"
        fill="none"
      />

      {/* Mini bucle con forma de corazón en la estela */}
      <path
        d="M130 18 C135 12 144 14 142 20 C140 24 130 28 130 28 C130 28 120 24 118 20 C116 14 125 12 130 18 Z"
        stroke="#E95773"
        strokeWidth="1.2"
        strokeDasharray="2 3"
        strokeLinecap="round"
        fill="none"
      />

      {/* Woodstock volando hacia la derecha */}
      <g transform="translate(182, 10)">
        {/* Plumitas de la cabeza */}
        <path d="M12 -3 C14 -7 18 -6 16 -3 C19 -5 21 -2 18 1" stroke="#29252A" strokeWidth="1.6" fill="#FDD835" />

        {/* Cuerpo y cabeza de Woodstock */}
        <path
          d="M6 2 C3 5 4 11 8 13 C12 15 16 13 17 9 C18 5 16 1 12 0 C10 -1 8 0 6 2 Z"
          fill="#FDD835"
          stroke="#29252A"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        {/* Piquito */}
        <polygon points="15,4 20,5 15,7" fill="#F97316" stroke="#29252A" strokeWidth="1.2" />
        {/* Ojo sonriente */}
        <circle cx="11" cy="4" r="1.1" fill="#29252A" />

        {/* Alitas batiendo */}
        <path
          d="M8 7 C6 1 10 -2 12 4"
          stroke="#29252A"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="#FDD835"
        />

        {/* Colita */}
        <path d="M5 10 C1 11 0 13 3 14" stroke="#29252A" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      </g>
    </svg>
  </div>
);

/**
 * Separador delicado dibujado a mano:
 * ~~~~ ♡  Y después seguimos festejando...  ♡ ~~~~
 */
export const HandDrawnSeparator: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center justify-center gap-2 select-none w-full max-w-[320px] mx-auto">
    {/* Trazo ondulado artesanal izquierdo */}
    <svg width="45" height="12" viewBox="0 0 45 12" fill="none" className="shrink-0 opacity-70">
      <path
        d="M2 6 C8 2 12 10 18 6 C24 2 28 10 34 6 L43 6"
        stroke="#E95773"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>

    {/* Corazoncito fino */}
    <span className="text-[#E95773] text-[13px] opacity-80">♡</span>

    {/* Texto manuscrito */}
    <span className="font-script font-bold text-[22px] sm:text-[23px] text-[#29252A] px-1 text-center whitespace-nowrap">
      {text}
    </span>

    {/* Corazoncito fino */}
    <span className="text-[#E95773] text-[13px] opacity-80">♡</span>

    {/* Trazo ondulado artesanal derecho */}
    <svg width="45" height="12" viewBox="0 0 45 12" fill="none" className="shrink-0 opacity-70">
      <path
        d="M2 6 L11 6 C17 10 21 2 27 6 C33 10 37 2 43 6"
        stroke="#E95773"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  </div>
);

export const PartyIcon = PartyFriendsDoodle;
export const HouseIcon = HouseStationeryIcon;

export const HeartDoodle: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-5 h-5',
  color = '#E95773',
}) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M12 21 C12 21 3 14.5 3 8 C3 4.5 5.8 2.5 8.8 2.5 C10.8 2.5 11.8 3.5 12 4.2 C12.2 3.5 13.2 2.5 15.2 2.5 C18.2 2.5 21 4.5 21 8 C21 14.5 12 21 12 21 Z"
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const StarSparkle: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-4 h-4',
  color = '#E5B800',
}) => (
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M10 1 L11.8 7.2 L18 9 L11.8 10.8 L10 17 L8.2 10.8 L2 9 L8.2 7.2 L10 1 Z"
      fill={color}
      stroke="#29252A"
      strokeWidth="0.8"
    />
  </svg>
);
