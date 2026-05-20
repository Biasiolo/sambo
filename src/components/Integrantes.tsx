import m1 from "@/assets/member-1.jpg";
import m2 from "@/assets/member-2.jpg";
import m3 from "@/assets/member-3.jpg";
import m4 from "@/assets/member-4.jpg";
import m5 from "@/assets/member-5.jpg";
import m6 from "@/assets/member-6.jpg";

const members = [
  { name: "Léo", role: "Cavaquinho", img: m1 },
  { name: "Bruno", role: "Pandeiro", img: m2 },
  { name: "Diego", role: "Tantã", img: m3 },
  { name: "Rafa", role: "Voz", img: m4 },
  { name: "Caio", role: "Violão 7 cordas", img: m5 },
  { name: "Marcão", role: "Repique de mão", img: m6 },
];

export function Integrantes() {
  return (
    <section id="integrantes" className="relative px-6 py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col items-start gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
            A roda
          </span>
          <h2 className="font-display text-5xl text-foreground sm:text-6xl">
            Conheça o <span className="text-primary">Sambô</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {members.map((m) => (
            <article
              key={m.name}
              className="group relative overflow-hidden rounded-2xl border border-border"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={m.img}
                  alt={`${m.name} — ${m.role}`}
                  width={640}
                  height={800}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/80 to-transparent p-4 pt-12">
                <p className="font-display text-2xl text-primary">{m.name}</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{m.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
