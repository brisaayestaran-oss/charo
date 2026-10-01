/**
 * Reproductor de audio para la invitación de Snoopy y Charo
 * - Prioriza cargar el archivo local /audio/charo-theme.mp3 (o /audio/snoopy.mp3)
 * - Como respaldo automático y libre de copyright, incluye una melodía instrumental
 *   suave, cálida y alegre con timbre de piano cálido y celesta estilo caricatura clásica.
 */

class SnoopyAudioEngine {
  private audioEl: HTMLAudioElement | null = null;
  private audioCtx: AudioContext | null = null;
  private isPlayingState = false;
  private isSynthesizing = false;
  private synthTimer: number | null = null;
  private listeners: Set<(isPlaying: boolean) => void> = new Set();
  private volume = 0.5;
  private melodyIndex = 0;

  constructor() {
    if (typeof window !== "undefined") {
      this.initAudioElement();
    }
  }

  private initAudioElement() {
    try {
      this.audioEl = new Audio("/audio/charo-theme.mp3");
      this.audioEl.loop = true;
      this.audioEl.volume = this.volume;

      this.audioEl.addEventListener("ended", () => {
        this.setPlayingState(false);
      });
      this.audioEl.addEventListener("pause", () => {
        if (!this.isSynthesizing) {
          this.setPlayingState(false);
        }
      });
      this.audioEl.addEventListener("play", () => {
        this.setPlayingState(true);
      });
    } catch {
      // Audio element fallback
    }
  }

  public subscribe(listener: (isPlaying: boolean) => void) {
    this.listeners.add(listener);
    listener(this.isPlayingState);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private setPlayingState(playing: boolean) {
    this.isPlayingState = playing;
    this.listeners.forEach((fn) => fn(playing));
  }

  public isPlaying(): boolean {
    return this.isPlayingState;
  }

  public async toggle(): Promise<boolean> {
    if (this.isPlayingState) {
      this.stop();
      return false;
    } else {
      return await this.play();
    }
  }

  public async play(): Promise<boolean> {
    if (this.audioEl) {
      try {
        await this.audioEl.play();
        this.setPlayingState(true);
        return true;
      } catch {
        // Si no existe charo-theme.mp3, intenta con snoopy.mp3
        try {
          this.audioEl.src = "/audio/snoopy.mp3";
          await this.audioEl.play();
          this.setPlayingState(true);
          return true;
        } catch {
          // Si ninguno existe, activa la melodía instrumental cálida y alegre
          return this.startSoftCartoontheme();
        }
      }
    }
    return this.startSoftCartoontheme();
  }

  public stop() {
    if (this.audioEl && !this.audioEl.paused) {
      this.audioEl.pause();
      this.audioEl.currentTime = 0;
    }
    this.stopSynthMelody();
    this.setPlayingState(false);
  }

  private getAudioContext(): AudioContext {
    if (!this.audioCtx) {
      const AudioCtxClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.audioCtx = new AudioCtxClass();
    }
    if (this.audioCtx.state === "suspended") {
      this.audioCtx.resume();
    }
    return this.audioCtx;
  }

  /**
   * Toca una nota con timbre muy cálido, dulce y acaramelado (celesta / piano de juguete vintage)
   * Sin estridencias, con armónicos redondos y atenuación suave.
   */
  private playWarmBellNote(freq: number, startTime: number, duration: number, gainMultiplier = 1.0) {
    if (!this.audioCtx) return;
    const ctx = this.audioCtx;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    // Filtro pasa bajos muy suave para un sonido redondo y no chillón
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(1100, startTime);
    filter.frequency.exponentialRampToValueAtTime(450, startTime + duration);

    // Onda seno pura con un toque de dulzura
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, startTime);

    const maxGain = 0.16 * gainMultiplier * this.volume;
    gain.gain.setValueAtTime(0.0001, startTime);
    // Ataque suave (no golpe seco)
    gain.gain.linearRampToValueAtTime(maxGain, startTime + 0.03);
    // Caída acampanada agradable
    gain.gain.exponentialRampToValueAtTime(maxGain * 0.35, startTime + 0.2);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc.start(startTime);
    osc.stop(startTime + duration + 0.05);
  }

  /**
   * Nota de bajo acústico redondo y suave
   */
  private playSoftBass(freq: number, startTime: number, duration: number) {
    if (!this.audioCtx) return;
    const ctx = this.audioCtx;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    filter.type = "lowpass";
    filter.frequency.setValueAtTime(300, startTime);

    osc.type = "triangle";
    osc.frequency.setValueAtTime(freq, startTime);

    const maxGain = 0.14 * this.volume;
    gain.gain.setValueAtTime(0.0001, startTime);
    gain.gain.linearRampToValueAtTime(maxGain, startTime + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc.start(startTime);
    osc.stop(startTime + duration + 0.05);
  }

  /**
   * Melodía tierna, suave y juguetona estilo caricatura clásica (Swing liviano y alegre)
   */
  private startSoftCartoontheme(): boolean {
    try {
      const ctx = this.getAudioContext();
      this.isSynthesizing = true;
      this.setPlayingState(true);

      const tempo = 112; // BPM suave y relajado
      const beat = 60 / tempo; // Duración de una negra
      const swingRatio = 0.62; // Swing ligero y cálido

      // Notas de la escala de C Mayor / F Mayor tiernas
      const C3 = 130.81;
      const F3 = 174.61;
      const G3 = 196.0;
      const A3 = 220.0;

      const C4 = 261.63;
      const D4 = 293.66;
      const E4 = 329.63;
      const F4 = 349.23;
      const G4 = 392.0;
      const A4 = 440.0;
      const B4 = 493.88;
      const C5 = 523.25;
      const D5 = 587.33;
      const E5 = 659.25;

      // Frases melódicas tiernas estilo paseo de Snoopy
      const phrases = [
        // Frase 1: Alegría dulce
        [
          { t: 0, note: C5, bass: F3, dur: beat * 0.9 },
          { t: beat * swingRatio, note: A4, dur: beat * 0.5 },
          { t: beat, note: F4, bass: C3, dur: beat * 0.8 },
          { t: beat * (1 + swingRatio), note: G4, dur: beat * 0.5 },
          { t: beat * 2, note: A4, bass: F3, dur: beat * 0.9 },
          { t: beat * (2 + swingRatio), note: C5, dur: beat * 0.5 },
          { t: beat * 3, note: D5, bass: G3, dur: beat * 1.2 },
        ],
        // Frase 2: Respuesta juguetona
        [
          { t: 0, note: C5, bass: C3, dur: beat * 0.9 },
          { t: beat * swingRatio, note: G4, dur: beat * 0.5 },
          { t: beat, note: E4, bass: G3, dur: beat * 0.8 },
          { t: beat * (1 + swingRatio), note: F4, dur: beat * 0.5 },
          { t: beat * 2, note: G4, bass: C3, dur: beat * 0.9 },
          { t: beat * (2 + swingRatio), note: A4, dur: beat * 0.5 },
          { t: beat * 3, note: F4, bass: F3, dur: beat * 1.3 },
        ],
        // Frase 3: Saltito de Woodstock
        [
          { t: 0, note: A4, bass: F3, dur: beat * 0.8 },
          { t: beat * swingRatio, note: C5, dur: beat * 0.5 },
          { t: beat, note: E5, bass: A3, dur: beat * 0.9 },
          { t: beat * (1 + swingRatio), note: D5, dur: beat * 0.5 },
          { t: beat * 2, note: C5, bass: F3, dur: beat * 0.9 },
          { t: beat * (2 + swingRatio), note: A4, dur: beat * 0.5 },
          { t: beat * 3, note: G4, bass: C3, dur: beat * 1.2 },
        ],
        // Frase 4: Cierre tierno
        [
          { t: 0, note: F4, bass: F3, dur: beat * 0.8 },
          { t: beat * swingRatio, note: G4, dur: beat * 0.5 },
          { t: beat, note: A4, bass: C3, dur: beat * 0.8 },
          { t: beat * (1 + swingRatio), note: C5, dur: beat * 0.6 },
          { t: beat * 2, note: D4, bass: G3, dur: beat * 0.8 },
          { t: beat * (2 + swingRatio), note: E4, dur: beat * 0.5 },
          { t: beat * 3, note: F4, bass: F3, dur: beat * 1.8 },
        ],
      ];

      const playCurrentPhrase = () => {
        if (!this.isSynthesizing || !this.audioCtx) return;
        const now = this.audioCtx.currentTime + 0.05;
        const currentNotes = phrases[this.melodyIndex % phrases.length];

        currentNotes.forEach((step) => {
          if (step.note) {
            this.playWarmBellNote(step.note, now + step.t, step.dur, 1.0);
          }
          if (step.bass) {
            this.playSoftBass(step.bass, now + step.t, step.dur * 0.9);
          }
        });

        this.melodyIndex++;
        const phraseDuration = beat * 4 * 1000;
        this.synthTimer = window.setTimeout(playCurrentPhrase, phraseDuration - 30);
      };

      playCurrentPhrase();
      return true;
    } catch {
      this.isSynthesizing = false;
      this.setPlayingState(false);
      return false;
    }
  }

  private stopSynthMelody() {
    this.isSynthesizing = false;
    if (this.synthTimer) {
      clearTimeout(this.synthTimer);
      this.synthTimer = null;
    }
  }
}

export const audioPlayer = new SnoopyAudioEngine();
