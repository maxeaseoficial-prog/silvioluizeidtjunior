import { createFileRoute } from "@tanstack/react-router";

import { PsvLanding } from "../components/psv-landing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Método PSV | Processo, Sistema e Vendas — Silvio Luiz Eidt Junior" },
      {
        name: "description",
        content:
          "Método PSV de Silvio Luiz Eidt Junior: escola de vendas B2C para aprender abordagem, comunicação, objeções, negociação e fechamento.",
      },
      { property: "og:title", content: "Método PSV | Escola de Vendas B2C" },
      {
        property: "og:description",
        content:
          "Aprenda a vender mais, melhor e com mais consistência com o Método PSV, de Silvio Luiz Eidt Junior.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:image", content: "/images/silvio/hero-stage-clean.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PsvLanding,
});
