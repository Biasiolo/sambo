import heroBanner from "@/assets/hero-banner.jpg";

export function Header() {
  return (
    <header className="relative min-h-[92vh] w-full overflow-hidden">
      <img
        src={heroBanner}
        alt="Sambô tocando ao vivo"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      <div
        className="absolute inset-0 opacity-40 mix-blend-overlay"
        style={{ background: "var(--gradient-hero)" }}
      />

      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <span className="font-display text-3xl tracking-widest text-primary">SAMBÔ</span>
        <div className="hidden gap-8 text-sm font-medium uppercase tracking-wider text-foreground/80 md:flex">
          <a href="#agenda" className="hover:text-primary transition-colors">Agenda</a>
          <a href="#integrantes" className="hover:text-primary transition-colors">Integrantes</a>
          <a href="#contato" className="hover:text-primary transition-colors">Contato</a>
        </div>
      </nav>

      <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-7xl flex-col items-start justify-center px-6">
        <span className="mb-4 inline-block rounded-full border border-primary/40 bg-background/40 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary backdrop-blur">
          Pagode de raiz
        </span>
        <h1 className="font-display text-7xl leading-[0.9] text-foreground sm:text-8xl md:text-[10rem]">
          <span className="block text-primary drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)]">SAMBÔ</span>
          <span className="block text-2xl font-sans font-light tracking-[0.4em] text-foreground/80 sm:text-3xl">
            o som que faz a roda girar
          </span>
        </h1>
        <p className="mt-8 max-w-xl text-base text-foreground/80 sm:text-lg">
          Seis amigos, um pandeiro e a vontade de fazer todo mundo cantar junto.
          Pagode autoral e clássicos que não saem da cabeça.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#agenda"
            className="rounded-full bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
          >
            Ver próximos shows
          </a>
          <a
            href="#contato"
            className="rounded-full border border-foreground/30 bg-background/20 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-foreground backdrop-blur transition-colors hover:border-primary hover:text-primary"
          >
            Contratar a banda
          </a>
        </div>
      </div>
    </header>
  );
}
