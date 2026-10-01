import React from 'react';

/**
 * Ícono ilustrado de papas fritas estilo Peanuts / Snoopy
 * Trazo artesanal a mano, bolsa roja con corazón y papas doradas con personalidad.
 */
export const FriesStationeryIcon: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Papitas doradas dibujadas a mano con distintas inclinaciones */}
    <rect x="13" y="6" width="3.6" height="18" rx="1.8" transform="rotate(-12 13 6)" fill="#FCD34D" stroke="#29252A" strokeWidth="1.5" />
    <rect x="19" y="3" width="4" height="21" rx="2" fill="#FBBF24" stroke="#29252A" strokeWidth="1.5" />
    <rect x="25.5" y="5" width="3.6" height="19" rx="1.8" transform="rotate(10 25.5 5)" fill="#FCD34D" stroke="#29252A" strokeWidth="1.5" />
    <rect x="30" y="8" width="3.2" height="16" rx="1.6" transform="rotate(20 30 8)" fill="#FBBF24" stroke="#29252A" strokeWidth="1.5" />
    <rect x="8.5" y="9" width="3.4" height="15" rx="1.7" transform="rotate(-20 8.5 9)" fill="#FCD34D" stroke="#29252A" strokeWidth="1.5" />

    {/* Paquete clásico con borde suave */}
    <path
      d="M8 19 L12 39 C12.5 40.5 14 41 16 41 L28 41 C30 41 31.5 40.5 32 39 L36 19 C36 19 29 22 22 22 C15 22 8 19 8 19 Z"
      fill="#E95773"
      stroke="#29252A"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    {/* Corazoncito blanco en el frente del paquete */}
    <path
      d="M22 34 C22 34 17 30 17 27 C17 25 18.5 24 20.5 25 C21.5 25.6 22 26.2 22 26.2 C22 26.2 22.5 25.6 23.5 25 C25.5 24 27 25 27 27 C27 30 22 34 22 34 Z"
      fill="#FFFFFF"
    />
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

export const FriesIcon = FriesStationeryIcon;
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
