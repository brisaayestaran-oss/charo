import React, { useState } from 'react';
import { motion } from 'motion/react';
import { INVITATION_CONFIG } from '../config';

interface SnoopySleepingIllustrationProps {
  className?: string;
}

export const SnoopySleepingIllustration: React.FC<SnoopySleepingIllustrationProps> = ({ className = '' }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`relative w-full max-w-[340px] mx-auto select-none ${className}`}>
      {/* Si el usuario colocó su archivo de imagen en /public/images/snoopy-closing.png, lo usa directamente */}
      {!imgError && INVITATION_CONFIG.closingImageUrl ? (
        <div className="relative w-full flex justify-center py-2">
          <img
            src={INVITATION_CONFIG.closingImageUrl}
            alt="Snoopy y Woodstock descansando juntos"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="w-full max-h-[220px] object-contain drop-shadow-sm rounded-2xl mx-auto"
          />
        </div>
      ) : null}

      {/* Renderizado vectorial con la escena tierna de Snoopy y Woodstock acurrucados */}
      {imgError && (
        <svg
          viewBox="0 0 340 180"
          className="w-full h-auto drop-shadow-sm overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Nube suave inferior derecha */}
          <motion.g
            animate={{ x: [2, -2, 2], y: [1, -1, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          >
            <path
              d="M260 120 C256 120 252 123 252 127 C248 128 244 132 244 136 C244 141 248 144 253 144 L288 144 C293 144 297 141 297 136 C297 133 295 130 291 129 C290 123 285 119 278 119 C274 119 270 121 268 124 C266 122 263 120 260 120 Z"
              fill="#EAF4FC"
              stroke="#C9E2F7"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </motion.g>

          {/* Estrellitas amarillas decorativas */}
          <motion.path
            d="M96 78 L98 83 L103 84 L99 88 L100 93 L96 90 L92 93 L93 88 L89 84 L94 83 Z"
            fill="#FDD835"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.path
            d="M208 52 L210 56 L214 57 L211 60 L212 64 L208 62 L204 64 L205 60 L202 57 L206 56 Z"
            fill="#FDD835"
            animate={{ scale: [1, 1.15, 1], rotate: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
          />
          <motion.path
            d="M242 86 L244 90 L248 91 L245 94 L246 98 L242 96 L238 98 L239 94 L236 91 L240 90 Z"
            fill="#FDD835"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 1.4 }}
          />

          {/* Corazón con bucle de vuelo punteado a la izquierda */}
          <path
            d="M28 85 C40 70 54 75 50 88 C46 98 32 94 40 82 C48 70 70 74 95 82"
            stroke="#F47291"
            strokeWidth="1.6"
            strokeDasharray="3 4"
            strokeLinecap="round"
            fill="none"
          />

          {/* Corazones delineados rosas */}
          <path
            d="M125 54 C122 50 116 52 117 56 C118 61 125 66 125 66 C125 66 132 61 133 56 C134 52 128 50 125 54 Z"
            stroke="#F47291"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="#FFF0F5"
          />
          <motion.path
            d="M228 66 C223 60 215 64 216 70 C217 76 228 83 228 83 C228 83 239 76 240 70 C241 64 233 60 228 66 Z"
            stroke="#F47291"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            animate={{ y: [-2, 2, -2] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Snoopy y Woodstock descansando juntos */}
          <motion.g
            id="sleeping-pair"
            animate={{ y: [-1, 1, -1] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ellipse cx="168" cy="144" rx="60" ry="4" fill="#000000" fillOpacity="0.04" />

            <path
              d="M120 128 C124 116 134 104 150 96 C168 88 184 92 196 102 C206 112 208 126 200 136 C190 142 165 144 140 142 C125 140 118 134 120 128 Z"
              fill="#FFFFFF"
              stroke="#2D2A26"
              strokeWidth="3"
              strokeLinejoin="round"
            />

            <path
              d="M136 122 C138 108 152 94 172 90 C186 88 200 95 204 108 C208 120 198 132 178 136 C158 140 142 136 136 122 Z"
              fill="#FFFFFF"
              stroke="#2D2A26"
              strokeWidth="3.2"
              strokeLinejoin="round"
            />

            <path
              d="M174 92 C184 94 196 100 200 110 C204 120 196 128 185 130"
              fill="#FFFFFF"
              stroke="#2D2A26"
              strokeWidth="3"
              strokeLinecap="round"
            />

            <ellipse cx="182" cy="114" rx="5" ry="4.2" fill="#222222" stroke="#222222" strokeWidth="1.5" />

            <path
              d="M156 106 C158 110 164 110 166 106"
              stroke="#2D2A26"
              strokeWidth="2.8"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M158 101 C161 100 164 100 166 102"
              stroke="#2D2A26"
              strokeWidth="1.8"
              strokeLinecap="round"
            />

            <path
              d="M136 105 C124 105 116 114 118 126 C120 136 128 142 138 140 C143 138 144 132 142 124 C140 114 142 107 136 105 Z"
              fill="#222222"
              stroke="#222222"
              strokeWidth="2"
              strokeLinejoin="round"
            />

            <path
              d="M148 136 C152 142 160 144 166 142 C168 141 168 138 165 136"
              fill="#FFFFFF"
              stroke="#2D2A26"
              strokeWidth="2.6"
              strokeLinecap="round"
            />
            <path d="M156 140 L156 143" stroke="#2D2A26" strokeWidth="2" strokeLinecap="round" />
            <path d="M161 139 L161 142" stroke="#2D2A26" strokeWidth="2" strokeLinecap="round" />

            <path
              d="M120 124 C116 122 112 120 114 116"
              stroke="#2D2A26"
              strokeWidth="2.6"
              strokeLinecap="round"
            />

            {/* Woodstock acurrucado durmiendo */}
            <g id="sleeping-woodstock" transform="translate(190, 110)">
              <path
                d="M14 -2 C16 -6 20 -6 18 -2 C22 -5 24 -1 20 2"
                stroke="#2D2A26"
                strokeWidth="2"
                strokeLinecap="round"
                fill="#FDD835"
              />
              <path
                d="M4 6 C3 1 8 -3 14 -1 C20 1 22 7 20 14 C18 20 10 22 4 18 C1 16 1 10 4 6 Z"
                fill="#FDD835"
                stroke="#2D2A26"
                strokeWidth="2.4"
                strokeLinejoin="round"
              />
              <path d="M10 5 C11 7 14 7 15 5" stroke="#2D2A26" strokeWidth="2" strokeLinecap="round" fill="none" />
              <path d="M5 6 L0 7 L4 10 Z" fill="#F57F17" stroke="#2D2A26" strokeWidth="1.8" strokeLinejoin="round" />
              <path d="M10 11 C12 9 16 11 15 15 C14 17 11 16 10 14" stroke="#2D2A26" strokeWidth="1.8" strokeLinecap="round" fill="none" />
              <path d="M7 18 L6 22" stroke="#2D2A26" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M12 18 L12 22" stroke="#2D2A26" strokeWidth="1.8" strokeLinecap="round" />
            </g>
          </motion.g>
        </svg>
      )}
    </div>
  );
};
