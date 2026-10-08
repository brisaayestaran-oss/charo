export interface EventDetails {
  emoji: string;
  title: string;
  subtitle: string;
  time: string;
  placeName?: string;
  address?: string;
}

export const INVITATION_CONFIG = {
  // Datos Principales
  birthdayGirl: "Charo",
  age: 10,
  mainTitle: "¡Estás invitado!",

  // Assets Principales
  heroImageUrl: "/images/snoopy-portada.png",
  closingImageUrl: "/images/snoopy-cierre.png",
  heroImage: {
    src: "/images/snoopy-portada.png",
    fallbackUrl: "https://res.cloudinary.com/obf69dry/image/upload/v1790873136/1c1ea12f-19de-498c-81a4-1e1920bc20e3.png",
    alt: "Snoopy y Woodstock en la casita roja festejando cumpleaños",
  },
  closingImage: {
    src: "/images/snoopy-cierre.png",
    fallbackUrl: "https://res.cloudinary.com/obf69dry/image/upload/v1790873207/02785daa-4d1c-4fd0-920f-89cc77a2423b.png",
    alt: "Snoopy y Woodstock descansando juntos",
  },
  closingVideo: {
    src: "/videos/snoopy-closing.mp4",
    fallbackUrl: "https://res.cloudinary.com/obf69dry/video/upload/v1790874525/Generated_Video_October_01_2026_-_2_08PM.mp4",
    alt: "Animación de Snoopy y Woodstock",
  },

  // Bloque 1: Amiguitos (Calle 4 y 40)
  friendsEvent: {
    emoji: "🎈",
    title: "Para mis amiguitos",
    subtitle: "Los invitamos a festejar conmigo",
    time: "De 13:00 a 15:00 hs",
    placeName: "Calle 4 y 40",
  },

  // Separador intermedio
  separatorText: "Y después seguimos festejando...",

  // Bloque 2: Familia (Calle 4 y 40)
  familyEvent: {
    emoji: "🏠",
    title: "Para la familia",
    subtitle: "Los esperamos para seguir festejando",
    time: "A partir de las 17:00 hs",
    address: "Calle 4 y 40",
  },

  // Cierre
  closing: {
    title: "¡Los esperamos!",
    subtitle: "Con cariño, Charo 💕",
  },

  // Contacto y enlaces de utilidad
  links: {
    whatsappNumber: "5492215082163",
    eventAddress: "Calle 4 y 40",
    familyAddress: "Calle 4 y 40",
    familyMapsUrl: "https://www.google.com/maps/search/?api=1&query=Calle+4+y+40",
  },
} as const;
