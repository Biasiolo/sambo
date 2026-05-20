import { useQuery } from "@tanstack/react-query";
import { fetchShows } from "@/lib/shows";
import { Calendar, MapPin, Clock } from "lucide-react";

export function Agenda() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["shows"],
    queryFn: fetchShows,
    staleTime: 60_000,
  });

  return (
    <section id="agenda" className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col items-start gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Próximos shows
          </span>
          <h2 className="font-display text-5xl text-foreground sm:text-6xl">
            Agenda <span className="text-primary">2026</span>
          </h2>
          <p className="max-w-xl text-muted-foreground">
            Atualizada em tempo real — direto da planilha da banda.
          </p>
        </div>

        {isLoading && (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-40 animate-pulse rounded-2xl bg-card" />
            ))}
          </div>
        )}

        {isError && (
          <p className="rounded-xl border border-destructive/40 bg-destructive/10 p-6 text-destructive-foreground">
            Não foi possível carregar a agenda agora. Tente novamente em instantes.
          </p>
        )}

        {data && data.length === 0 && (
          <div className="rounded-2xl border border-border bg-card p-10 text-center">
            <p className="font-display text-2xl text-primary">Em breve novas datas!</p>
            <p className="mt-2 text-muted-foreground">
              Fique de olho — estamos fechando a próxima temporada de shows.
            </p>
          </div>
        )}

        {data && data.length > 0 && (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {data.map((show, i) => (
              <article
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-border p-6 transition-all hover:-translate-y-1 hover:border-primary/60"
                style={{ background: "var(--gradient-card)", boxShadow: "var(--shadow-card)" }}
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                      {show.mes}
                    </p>
                    <p className="mt-1 font-display text-5xl text-primary">{show.data}</p>
                  </div>
                  {show.horario && (
                    <div className="flex items-center gap-1.5 rounded-full bg-background/60 px-3 py-1 text-xs text-foreground/80">
                      <Clock className="h-3 w-3" />
                      {show.horario}
                    </div>
                  )}
                </div>
                <div className="mt-6 space-y-2">
                  <div className="flex items-center gap-2 text-foreground">
                    <Calendar className="h-4 w-4 text-secondary" />
                    <span className="font-semibold">{show.local}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4 text-secondary" />
                    <span>{show.cidade}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
