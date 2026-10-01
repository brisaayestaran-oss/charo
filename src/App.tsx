import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { INVITATION_CONFIG } from './config';
import { MusicButton } from './components/MusicButton';
import { LocationModal } from './components/LocationModal';
import { RsvpModal } from './components/RsvpModal';
import { SnoopyClosingVideo } from './components/SnoopyClosingVideo';
import {
  FriesStationeryIcon,
  HouseStationeryIcon,
  FlyingWoodstockConnector,
  HandDrawnSeparator,
  HeartDoodle,
  StarSparkle,
} from './components/Decorations';

export default function App() {
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isRsvpOpen, setIsRsvpOpen] = useState(false);

  // Efecto de confeti alegre y delicado al entrar a la página
  useEffect(() => {
    const timer = setTimeout(() => {
      confetti({
        particleCount: 45,
        spread: 65,
        origin: { y: 0.3 },
        colors: ['#F8CDD7', '#FFF0A8', '#DCEFF7', '#E95773', '#FFFFFF'],
      });
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  return (
    // Marco exterior con patrón cuadriculado pastel suave (rosa, amarillo manteca, blanco crema, celeste)
    <div className="min-h-screen bg-pastel-checker flex justify-center selection:bg-pink-100 selection:text-pink-600 py-3.5 px-3 sm:py-8 sm:px-6">
      
      {/* Tarjeta Central Enmarcada: fondo blanco cálido / crema para máxima legibilidad y sensación artesanal */}
      <main className="w-full max-w-[420px] bg-[#FFFDF7] relative shadow-md rounded-[32px] sm:rounded-[40px] border border-[#F8CDD7]/60 overflow-hidden flex flex-col px-4 sm:px-5 pt-4 pb-10">
        
        {/* ========================================================= */}
        {/* 1) PRIMERA SECCIÓN / TAPA DE LA INVITACIÓN */}
        {/* ========================================================= */}
        
        {/* Barra superior con botón de música en la esquina derecha sin superponerse */}
        <div className="w-full flex justify-end items-center mb-1 pr-1">
          <MusicButton />
        </div>

        {/* Título Principal directo: ¡Estás invitado! (Caligrafía manuscrita cálida) */}
        <div className="text-center mt-0.5 mb-2 relative">
          <motion.h1
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="font-script text-[40px] sm:text-[46px] leading-[1.05] font-bold text-[#29252A] tracking-tight relative z-10"
          >
            {INVITATION_CONFIG.mainTitle}
          </motion.h1>

          {/* Pincelada acuarela rosa pastel muy suave debajo del título */}
          <div className="w-48 h-3.5 bg-[#F8CDD7]/45 rounded-full mx-auto -mt-3 filter blur-[1px] relative z-0" />
        </div>

        {/* Asset Real de Snoopy en Portada (Casita roja, torta y Woodstock con gorrito) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="w-full flex justify-center items-center my-1.5"
        >
          <img
            src={INVITATION_CONFIG.heroImage.src}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = INVITATION_CONFIG.heroImage.fallbackUrl;
            }}
            alt={INVITATION_CONFIG.heroImage.alt}
            className="w-[78%] sm:w-[74%] max-w-[305px] h-auto object-contain mx-auto select-none pointer-events-none drop-shadow-2xs"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* ========================================================= */}
        {/* 2) “CHARO” CON PROTAGONISMO MÁXIMO + cumple 10 */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="relative text-center my-3"
        >
          {/* Mancha acuarelada rosa pastel muy suave detrás del nombre */}
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-64 h-20 bg-[#F8CDD7]/50 rounded-full filter blur-[12px] -z-0 pointer-events-none" />

          {/* Nombre Charo gigante en caligrafía protagonista */}
          <div className="relative inline-block z-10 px-6">
            {/* Estrellita sutil a la izquierda */}
            <span className="absolute -left-1 top-4 select-none animate-pulse-soft">
              <StarSparkle className="w-3.5 h-3.5" color="#E5B800" />
            </span>

            <h2 className="font-script text-[82px] sm:text-[94px] leading-[0.9] text-[#E95773] tracking-wide select-none drop-shadow-[0_2px_12px_rgba(233,87,115,0.2)]">
              {INVITATION_CONFIG.birthdayGirl}
            </h2>

            {/* Corazoncito de trazo fino a la derecha */}
            <span className="absolute -right-2 top-2 select-none animate-float-gentle">
              <HeartDoodle className="w-6 h-6" color="#E95773" />
            </span>
          </div>

          {/* Subtítulo: cumple 10 mucho más pequeño */}
          <div className="flex items-center justify-center gap-2 mt-1.5 relative z-10">
            <span className="text-[#E95773] text-[10px]">♥</span>
            <span className="font-body font-extrabold text-[16px] sm:text-[17px] text-[#29252A]/85 tracking-[0.18em] uppercase">
              cumple {INVITATION_CONFIG.age}
            </span>
            <span className="text-[#E95773] text-[10px]">♥</span>
          </div>
        </motion.div>

        {/* Separador sutil de trazo fino con aire generoso */}
        <div className="my-3 flex items-center justify-center gap-2 select-none opacity-40">
          <span className="w-8 h-[1px] bg-[#F8CDD7]" />
          <span className="text-[#E95773] text-xs">♡</span>
          <span className="w-8 h-[1px] bg-[#F8CDD7]" />
        </div>

        {/* ========================================================= */}
        {/* SECCIÓN CONTINUA DE LOS FESTEJOS: AMIGUITOS + FAMILIA */}
        {/* ========================================================= */}
        <div className="relative my-2">
          
          {/* ========================================================= */}
          {/* 3) TARJETA AMIGUITOS (Amarillo manteca suave, centrada 88-90%) */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.55 }}
            className="w-[90%] sm:w-[88%] mx-auto bg-[#FFFDE8] rounded-[28px] py-7 px-5 sm:py-8 sm:px-6 text-center border border-[#FFF0A8] transition-transform hover:scale-[1.01] shadow-2xs relative"
          >
            {/* 1. Pequeño ícono ilustrado estilo Snoopy */}
            <div className="flex justify-center mb-1">
              <FriesStationeryIcon className="w-10 h-10" />
            </div>

            {/* 2. Título manuscrito */}
            <h3 className="font-script font-bold text-[30px] sm:text-[32px] text-[#29252A] leading-tight mt-1 mb-1.5">
              {INVITATION_CONFIG.friendsEvent.title}
            </h3>

            {/* 3. Texto secundario */}
            <p className="font-body font-medium text-[13.5px] text-[#29252A]/70 mb-3.5">
              {INVITATION_CONFIG.friendsEvent.subtitle}
            </p>

            {/* 4. Horario en negrita */}
            <div className="font-body font-extrabold text-[17.5px] text-[#29252A] mb-1.5 tracking-wide">
              {INVITATION_CONFIG.friendsEvent.time}
            </div>

            {/* 5. Lugar (SIN DIRECCIÓN) */}
            <div className="font-body font-bold text-[18px] text-[#29252A]">
              {INVITATION_CONFIG.friendsEvent.placeName}
            </div>
          </motion.div>

          {/* ========================================================= */}
          {/* CONECTOR CONTINUO ENTRE AMBAS TARJETAS */}
          {/* Woodstock volando + línea punteada curva + "Y después..." */}
          {/* ========================================================= */}
          <div className="my-6 relative flex flex-col items-center justify-center">
            {/* Trayectoria de vuelo punteada con Woodstock de izquierda a derecha */}
            <div className="w-[88%] mx-auto -mb-2">
              <FlyingWoodstockConnector />
            </div>

            {/* Separador delicado dibujado a mano */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative z-10 -mt-3"
            >
              <HandDrawnSeparator text={INVITATION_CONFIG.separatorText} />
            </motion.div>
          </div>

          {/* ========================================================= */}
          {/* 5) TARJETA FAMILIA (Rosa pastel suave, centrada 88-90%) */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.55 }}
            className="w-[90%] sm:w-[88%] mx-auto bg-[#FEF4F7] rounded-[28px] py-7 px-5 sm:py-8 sm:px-6 text-center border border-[#F8CDD7] transition-transform hover:scale-[1.01] shadow-2xs relative"
          >
            {/* 1. Pequeño ícono ilustrado estilo Snoopy */}
            <div className="flex justify-center mb-1">
              <HouseStationeryIcon className="w-10 h-10" />
            </div>

            {/* 2. Título manuscrito */}
            <h3 className="font-script font-bold text-[30px] sm:text-[32px] text-[#29252A] leading-tight mt-1 mb-1.5">
              {INVITATION_CONFIG.familyEvent.title}
            </h3>

            {/* 3. Texto secundario */}
            <p className="font-body font-medium text-[13.5px] text-[#29252A]/70 mb-3.5">
              {INVITATION_CONFIG.familyEvent.subtitle}
            </p>

            {/* 4. Horario en negrita */}
            <div className="font-body font-extrabold text-[17.5px] text-[#29252A] mb-1.5 tracking-wide">
              {INVITATION_CONFIG.familyEvent.time}
            </div>

            {/* 5. Lugar: Calle 4 y 40 */}
            <div className="font-body font-bold text-[17px] text-[#29252A]">
              {INVITATION_CONFIG.familyEvent.address}
            </div>
          </motion.div>

        </div>

        {/* ========================================================= */}
        {/* VIDEO DE SNOOPY EN CIERRE (Arriba de ¡Los esperamos!) */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.65 }}
        >
          <SnoopyClosingVideo />
        </motion.div>

        {/* ========================================================= */}
        {/* 6) CIERRE (¡Los esperamos! + Con cariño, Charo 💕) */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.6 }}
          className="mt-1 text-center"
        >
          {/* Título cálido manuscrito: ¡Los esperamos! */}
          <h4 className="font-script font-bold text-[34px] sm:text-[38px] text-[#29252A] leading-tight mb-0.5">
            {INVITATION_CONFIG.closing.title}
          </h4>

          {/* Con cariño, Charo 💕 */}
          <p className="font-script font-bold text-[28px] sm:text-[30px] text-[#E95773] flex items-center justify-center gap-1.5">
            <span>{INVITATION_CONFIG.closing.subtitle}</span>
          </p>
        </motion.div>

        {/* ========================================================= */}
        {/* 7) BOTONES FINALES (Celeste pastel y rosa pastel suaves) */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 space-y-3 px-2"
        >
          {/* Botón 1: Ver ubicación (Celeste pastel suave #DCEFF7) */}
          <button
            onClick={() => setIsLocationOpen(true)}
            type="button"
            className="w-full py-3.5 px-6 rounded-full bg-[#DCEFF7] hover:bg-[#CFE8F3] text-[#1E4760] font-body font-bold text-[15px] shadow-2xs transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer border border-[#C2E3F2]/70"
          >
            <span className="text-base">📍</span>
            <span>Ver ubicación</span>
          </button>

          {/* Botón 2: Confirmar asistencia (Rosa pastel suave #F8CDD7) */}
          <button
            onClick={() => setIsRsvpOpen(true)}
            type="button"
            className="w-full py-3.5 px-6 rounded-full bg-[#F8CDD7] hover:bg-[#F2BAC7] text-[#29252A] font-body font-bold text-[15px] shadow-2xs transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer border border-[#F2B6C4]/70"
          >
            <span className="text-base">💬</span>
            <span>Confirmar asistencia</span>
          </button>
        </motion.div>

        {/* Firma tierna */}
        <footer className="mt-7 text-center text-[11px] text-[#29252A]/45 font-body font-medium">
          <span>Hecho con amor para los 10 años de Charo 🐾</span>
        </footer>

      </main>

      {/* Modales interactivos */}
      <LocationModal isOpen={isLocationOpen} onClose={() => setIsLocationOpen(false)} />
      <RsvpModal isOpen={isRsvpOpen} onClose={() => setIsRsvpOpen(false)} />
    </div>
  );
}
