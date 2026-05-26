/* eslint-disable prettier/prettier */

import { useQuery } from "@tanstack/react-query";
import { fetchShows } from "@/lib/shows";

import fundoAgenda from "@/assets/fundo.png";
import cardTexture from "@/assets/hero-banner.jpg";

import {
  Clock3,
  MapPin,
} from "lucide-react";

export function Agenda() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["shows"],
    queryFn: fetchShows,
    staleTime: 60_000,
  });

  const shows = data?.slice(0, 4);

  return (
    <section
      id="agenda"
      style={{
        backgroundImage: `url(${fundoAgenda})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        padding: "12px 40px",
      }}
    >
      <div
        style={{
          maxWidth: "1600px",
          margin: "0 auto",
        }}
      >
        {/* Título */}
        <div
          style={{
            marginBottom: "60px",
            textAlign: "center",
          }}
        >
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(2rem, 4vw, 6rem)",
              lineHeight: "0.9",
              color: "#000",
              fontWeight: "900",
              letterSpacing: "-2px",
            }}
          >
            AGENDA DE SHOWS
          </h2>
        </div>

        {/* Loading */}
        {isLoading && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
            }}
          >
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                style={{
                  height: "240px",
                  borderRadius: "40px",
                  background: "rgba(255,255,255,0.1)",
                }}
              />
            ))}
          </div>
        )}

        {/* Error */}
        {isError && (
          <div
            style={{
              padding: "40px",
              borderRadius: "30px",
              background: "rgba(0,0,0,0.4)",
              color: "#000000",
              textAlign: "center",
            }}
          >
            Não foi possível carregar a agenda.
          </div>
        )}

        {/* Empty */}
        {shows && shows.length === 0 && (
          <div
            style={{
              padding: "40px",
              borderRadius: "30px",
              background: "rgba(0,0,0,0.4)",
              color: "#000000",
              textAlign: "center",
            }}
          >
            Em breve novas datas.
          </div>
        )}

        {/* Agenda */}
        {shows && shows.length > 0 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
            }}
          >
            {shows.map((show, index) => (
              <article
                key={index}
                style={{
                  background: "#7e7171",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "42px",
                  padding: "40px 50px",
                  minHeight: "240px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "40px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Data */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    minWidth: "280px",
                  }}
                >
                  <h3
                    className="font-display"
                    style={{
                      fontSize: "8rem",
                      lineHeight: "0.8",
                      color: "#000",
                    }}
                  >
                    {show.data}
                  </h3>

                  <span
                    style={{
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                      color: "#facc15",
                      fontWeight: "800",
                      letterSpacing: "0.3em",
                      fontSize: "1rem",
                      textTransform: "uppercase",
                    }}
                  >
                    {show.mes}
                  </span>
                </div>

                {/* Infos */}
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: "18px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "3rem",
                      color: "#000",
                      fontWeight: "800",
                      lineHeight: "1",
                    }}
                  >
                    {show.local}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      color: "rgba(255,255,255,0.85)",
                      fontSize: "1.1rem",
                    }}
                  >
                    <MapPin size={18} color="#facc15" />
                    {show.cidade}
                  </div>

                  {show.horario && (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        color: "#fff",
                        fontSize: "1rem",
                      }}
                    >
                      <Clock3 size={18} color="#facc15" />
                      {show.horario}
                    </div>
                  )}
                </div>

                {/* CTA */}
                {show.ingresso && (
                  <a
                    href={show.ingresso}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: "#facc15",
                      color: "#000",
                      padding: "18px 32px",
                      borderRadius: "999px",
                      fontWeight: "900",
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      textDecoration: "none",
                      whiteSpace: "nowrap",
                      fontSize: "0.9rem",
                    }}
                  >
                    Comprar ingresso
                  </a>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}