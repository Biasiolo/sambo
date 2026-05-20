import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Agenda } from "@/components/Agenda";
import { Integrantes } from "@/components/Integrantes";
import { Contato } from "@/components/Contato";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Sambô — Pagode de raiz | Agenda de shows" },
      {
        name: "description",
        content:
          "Sambô: banda de pagode com seis integrantes. Confira a agenda de shows, conheça os integrantes e fale com a banda.",
      },
      { property: "og:title", content: "Sambô — Pagode de raiz" },
      { property: "og:description", content: "Agenda de shows, integrantes e contato da banda Sambô." },
    ],
  }),
});

function Index() {
  return (
    <main>
      <Header />
      <Agenda />
      <Integrantes />
      <Contato />
    </main>
  );
}
