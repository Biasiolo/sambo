/* eslint-disable prettier/prettier */
import { Instagram, Mail, Phone, Music2 } from "lucide-react";

export function Contato() {
  return (
    <section id="contato" className="relative px-6 py-24">
      <div
        className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-primary/30 p-10 sm:p-16"
        style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-glow)" }}
      >
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-background/80">
              Bora fechar um show?
            </span>
            <h2 className="mt-3 font-display text-5xl text-background sm:text-6xl">
              Fala com a gente
            </h2>
            <p className="mt-4 max-w-md text-background/80">
              Casamentos, festas, eventos corporativos ou só pra prosear sobre samba. A roda tá
              sempre aberta.
            </p>
          </div>

          <div className="space-y-4">
            <a
              href="mailto:contato@sambo.com.br"
              className="flex items-center gap-4 rounded-2xl bg-background/90 p-4 text-foreground transition-transform hover:-translate-y-0.5"
            >
              <div className="rounded-xl bg-primary/20 p-3 text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">E-mail</p>
                <p className="font-semibold">contato@sambo.com.br</p>
              </div>
            </a>
            <a
              href="https://wa.me/5511999999999"
              className="flex items-center gap-4 rounded-2xl bg-background/90 p-4 text-foreground transition-transform hover:-translate-y-0.5"
            >
              <div className="rounded-xl bg-accent/20 p-3 text-accent">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">WhatsApp</p>
                <p className="font-semibold">(11) 99999-9999</p>
              </div>
            </a>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-background/90 p-4 text-foreground transition-transform hover:-translate-y-0.5"
              >
                <Instagram className="h-5 w-5 text-secondary" />
                <span className="text-sm font-semibold">@sambo</span>
              </a>
              <a
                href="https://open.spotify.com"
                aria-label="Spotify"
                className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-background/90 p-4 text-foreground transition-transform hover:-translate-y-0.5"
              >
                <Music2 className="h-5 w-5 text-accent" />
                <span className="text-sm font-semibold">Spotify</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="mx-auto mt-16 max-w-7xl border-t border-border pt-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Sambô. Feito com samba no pé.
      </footer>
    </section>
  );
}
