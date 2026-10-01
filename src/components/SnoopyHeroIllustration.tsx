import React, { useState } from 'react';
import { motion } from 'motion/react';
import { INVITATION_CONFIG } from '../config';

interface SnoopyHeroIllustrationProps {
  className?: string;
}

export const SnoopyHeroIllustration: React.FC<SnoopyHeroIllustrationProps> = ({ className = '' }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`relative w-full max-w-[340px] mx-auto select-none ${className}`}>
      {/* Si el usuario colocó su archivo de imagen en /public/images/snoopy-hero.png, lo usa directamente */}
      {!imgError && INVITATION_CONFIG.heroImageUrl ? (
        <div className="relative w-full flex justify-center">
          <img
            src={INVITATION_CONFIG.heroImageUrl}
            alt="Snoopy y Woodstock festejando cumpleaños en su casita roja"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="w-full max-h-[380px] object-contain drop-shadow-sm rounded-2xl mx-auto"
          />
        </div>
      ) : null}

      {/* Renderizado vectorial con la escena exacta del cumple de Snoopy: gorrito de fiesta, torta con vela, casita roja, Woodstock y confeti */}
      {imgError && (
        <svg
          viewBox="0 0 320 400"
          className="w-full h-auto drop-shadow-sm overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Confeti festivo colorido cayendo */}
          <g id="confetti">
            {/* Cintas y papelitos de colores */}
            <path d="M40 30 C45 22 55 25 50 38 C46 48 56 52 50 62" stroke="#E55B7C" strokeWidth="2.8" strokeLinecap="round" fill="none" />
            <path d="M260 25 C266 18 274 22 270 32 C265 42 272 48 268 56" stroke="#2563EB" strokeWidth="2.8" strokeLinecap="round" fill="none" />
            <rect x="28" y="75" width="6" height="10" rx="1.5" transform="rotate(25 28 75)" fill="#F59E0B" />
            <rect x="285" y="80" width="7" height="11" rx="1.5" transform="rotate(-30 285 80)" fill="#EC4899" />
            <rect x="52" y="110" width="8" height="6" rx="1.5" transform="rotate(45 52 110)" fill="#3B82F6" />
            <rect x="250" y="125" width="7" height="9" rx="1.5" transform="rotate(-15 250 125)" fill="#FBBF24" />
            <rect x="20" y="145" width="9" height="7" rx="1.5" transform="rotate(20 20 145)" fill="#EC4899" />
            <rect x="290" y="160" width="6" height="8" rx="1.5" transform="rotate(35 290 160)" fill="#10B981" />
          </g>

          {/* ================================================= */}
          {/* CASITA ROJA DE SNOOPY */}
          {/* ================================================= */}
          {/* Pasto en la base */}
          <path
            d="M60 382 C70 370 80 372 90 382 C100 368 112 370 120 382 C135 368 145 372 160 382 C175 368 185 370 195 382 C210 368 220 370 230 382 C242 368 250 370 260 382 L260 388 L60 388 Z"
            fill="#4E9A3A"
            stroke="#222222"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />

          {/* Cuerpo inferior de la casita */}
          <rect x="95" y="300" width="130" height="82" fill="#E22D38" stroke="#222222" strokeWidth="3" />
          {/* Tablones horizontales del cuerpo */}
          <line x1="95" y1="328" x2="225" y2="328" stroke="#222222" strokeWidth="2.2" />
          <line x1="95" y1="356" x2="225" y2="356" stroke="#222222" strokeWidth="2.2" />

          {/* Techo trapezoidal de la casita roja */}
          <polygon
            points="84,204 236,204 256,300 64,300"
            fill="#E22D38"
            stroke="#222222"
            strokeWidth="3.4"
            strokeLinejoin="round"
          />
          {/* Tablones horizontales del techo con estilo Peanuts */}
          <line x1="77" y1="236" x2="243" y2="236" stroke="#222222" strokeWidth="2.4" />
          <line x1="70" y1="268" x2="250" y2="268" stroke="#222222" strokeWidth="2.4" />

          {/* ================================================= */}
          {/* TORTA DE CUMPLEAÑOS CON VELA */}
          {/* ================================================= */}
          <g id="birthday-cake" transform="translate(80, 168)">
            {/* Plato de la torta */}
            <ellipse cx="28" cy="38" rx="26" ry="6" fill="#718096" stroke="#222222" strokeWidth="2" />

            {/* Base del bizcocho */}
            <path
              d="M6 24 C6 30 16 34 28 34 C40 34 50 30 50 24 L50 34 C50 40 40 44 28 44 C16 44 6 40 6 34 Z"
              fill="#FBBF24"
              stroke="#222222"
              strokeWidth="2.2"
            />
            {/* Línea de relleno chocolate */}
            <path d="M6 30 C16 36 40 36 50 30" stroke="#92400E" strokeWidth="2" fill="none" />

            {/* Cobertura / glaseado rosa con ondas de gotas */}
            <path
              d="M6 22 C6 16 16 12 28 12 C40 12 50 16 50 22 C50 24 48 27 44 27 C40 27 38 24 35 24 C32 24 30 27 27 27 C24 27 22 24 19 24 C16 24 14 27 11 27 C8 27 6 24 6 22 Z"
              fill="#F47291"
              stroke="#222222"
              strokeWidth="2.2"
              strokeLinejoin="round"
            />

            {/* Vela azul */}
            <rect x="25.5" y="0" width="5" height="13" fill="#38BDF8" stroke="#222222" strokeWidth="1.8" />
            {/* Mecha */}
            <line x1="28" y1="0" x2="28" y2="-4" stroke="#222222" strokeWidth="1.8" />
            {/* Llama de la vela */}
            <path
              d="M28 -14 C25 -10 24 -7 25 -5 C26 -3 30 -3 31 -5 C32 -7 31 -10 28 -14 Z"
              fill="#F97316"
              stroke="#EA580C"
              strokeWidth="1.2"
            />
            <ellipse cx="28" cy="-6" rx="1.5" ry="2.5" fill="#FEF08A" />
          </g>

          {/* ================================================= */}
          {/* SNOOPY SENTADO FESTEJANDO */}
          {/* ================================================= */}
          <g id="snoopy-celebrating">
            {/* Torso y pancita blanca de Snoopy sentadito */}
            <path
              d="M142 165 C138 180 138 200 148 205 C158 205 178 205 186 205 C190 195 188 178 180 165 Z"
              fill="#FFFFFF"
              stroke="#222222"
              strokeWidth="2.8"
            />

            {/* Patita izquierda apoyada en el techo */}
            <path
              d="M144 196 C144 190 150 188 158 190 C166 192 168 198 168 205 L144 205 Z"
              fill="#FFFFFF"
              stroke="#222222"
              strokeWidth="2.4"
            />
            {/* Ranuras dedos pie */}
            <line x1="152" y1="198" x2="152" y2="204" stroke="#222222" strokeWidth="2" strokeLinecap="round" />
            <line x1="158" y1="198" x2="158" y2="204" stroke="#222222" strokeWidth="2" strokeLinecap="round" />

            {/* Manitos juntas al frente (aplaudiendo o pidiendo deseo) */}
            <path
              d="M148 164 C140 162 136 172 144 176 C152 180 158 174 158 168 Z"
              fill="#FFFFFF"
              stroke="#222222"
              strokeWidth="2.4"
            />
            <path
              d="M152 162 C146 160 142 170 150 174 C156 177 162 172 162 166 Z"
              fill="#FFFFFF"
              stroke="#222222"
              strokeWidth="2"
            />

            {/* Colita de Snoopy detrás */}
            <path d="M186 200 C194 198 202 202 200 205" stroke="#222222" strokeWidth="2.6" strokeLinecap="round" fill="none" />

            {/* Collar negro */}
            <path d="M154 148 C162 152 172 152 178 148" stroke="#222222" strokeWidth="4" strokeLinecap="round" />

            {/* Cabeza de Snoopy (perfil redondo clásico) */}
            <path
              d="M168 150 C158 150 148 140 144 130 C138 118 132 100 146 88 C160 76 182 76 196 90 C206 100 208 118 200 132 C192 144 180 150 168 150 Z"
              fill="#FFFFFF"
              stroke="#222222"
              strokeWidth="3.2"
              strokeLinejoin="round"
            />

            {/* Hocico que sobresale a la izquierda */}
            <path
              d="M148 94 C132 94 116 100 114 114 C112 126 126 134 146 134"
              fill="#FFFFFF"
              stroke="#222222"
              strokeWidth="3.2"
              strokeLinecap="round"
            />

            {/* Nariz negra redondeada en la punta del hocico */}
            <ellipse cx="128" cy="106" rx="7.5" ry="6" fill="#222222" />

            {/* Ojos cerrados sonrientes (arcos felices `^`) */}
            <path d="M154 98 C158 92 164 92 168 98" stroke="#222222" strokeWidth="3" strokeLinecap="round" fill="none" />

            {/* Sonrisa serena y feliz */}
            <path d="M144 120 C154 126 166 122 172 114" stroke="#222222" strokeWidth="2.6" strokeLinecap="round" fill="none" />

            {/* Oreja negra caída hacia la derecha */}
            <path
              d="M178 96 C172 108 174 130 186 138 C196 144 206 138 206 122 C206 106 194 92 178 96 Z"
              fill="#222222"
              stroke="#222222"
              strokeWidth="2.5"
            />

            {/* GORRITO DE FIESTA DE SNOOPY */}
            <g id="snoopy-party-hat" transform="translate(142, 4)">
              {/* Cono del gorro */}
              <polygon points="34,2 10,78 58,78" fill="#FBBF24" stroke="#222222" strokeWidth="2.8" strokeLinejoin="round" />
              {/* Rayas de colores del gorro */}
              <polygon points="17,54 51,54 44,32 24,32" fill="#EC4899" stroke="#222222" strokeWidth="2" />
              <polygon points="10,78 58,78 51,54 17,54" fill="#38BDF8" stroke="#222222" strokeWidth="2" />
              {/* Pom-pón negro en la punta */}
              <path
                d="M34 2 C32 -4 36 -6 38 -2 C42 -4 44 0 40 4 C44 8 38 10 35 6 C32 10 26 8 28 4 C24 0 28 -4 34 2 Z"
                fill="#222222"
                stroke="#222222"
                strokeWidth="1.5"
              />
            </g>
          </g>

          {/* ================================================= */}
          {/* WOODSTOCK CON GORRITO DE FIESTA AZUL */}
          {/* ================================================= */}
          <g id="woodstock-celebrating" transform="translate(208, 130)">
            {/* Plumitas de la cabeza */}
            <path d="M30 46 C34 40 38 42 36 48 C42 45 44 50 38 54" stroke="#222222" strokeWidth="2" fill="#FDD835" />

            {/* Cuerpo y cabeza de Woodstock */}
            <path
              d="M18 52 C12 56 14 66 18 70 C22 74 28 72 30 66 C32 60 30 52 24 50 C21 48 19 49 18 52 Z"
              fill="#FDD835"
              stroke="#222222"
              strokeWidth="2.4"
            />
            {/* Piquito naranja */}
            <polygon points="16,55 8,57 16,61" fill="#F97316" stroke="#222222" strokeWidth="1.8" />
            {/* Ojo */}
            <circle cx="20" cy="56" r="1.5" fill="#222222" />

            {/* Alita */}
            <path d="M23 60 C26 58 30 60 28 66 C26 69 22 68 23 60 Z" fill="#FDD835" stroke="#222222" strokeWidth="1.8" />
            {/* Colita */}
            <path d="M28 66 C34 68 36 72 32 74" stroke="#222222" strokeWidth="2" strokeLinecap="round" fill="none" />

            {/* Patitas apoyadas en el techo */}
            <line x1="20" y1="72" x2="19" y2="76" stroke="#222222" strokeWidth="2" strokeLinecap="round" />
            <line x1="16" y1="76" x2="22" y2="76" stroke="#222222" strokeWidth="2" strokeLinecap="round" />
            <line x1="26" y1="72" x2="26" y2="76" stroke="#222222" strokeWidth="2" strokeLinecap="round" />
            <line x1="23" y1="76" x2="29" y2="76" stroke="#222222" strokeWidth="2" strokeLinecap="round" />

            {/* Gorrito de fiesta de Woodstock (azul) */}
            <g transform="translate(18, 30)">
              <polygon points="12,0 2,22 22,22" fill="#38BDF8" stroke="#222222" strokeWidth="2" />
              {/* Pom-pón pequeño */}
              <circle cx="12" cy="0" r="2.5" fill="#222222" />
            </g>
          </g>
        </svg>
      )}
    </div>
  );
};
