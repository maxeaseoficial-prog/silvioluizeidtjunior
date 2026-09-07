import { createFileRoute } from "@tanstack/react-router";

import { PsvLanding } from "../components/psv-landing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Método PSV | Estruturação Comercial" },
      {
        name: "description",
        content:
          "Página do Método PSV, de Silvio Luiz Eidt Junior, para estruturação profissional de equipes e operações comerciais.",
      },
      { property: "og:title", content: "Método PSV | Estruturação Comercial" },
      {
        property: "og:description",
        content:
          "Processo, Sistema e Vendas para estruturar uma operação comercial com gestão, execução e previsibilidade.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PsvLanding,
});
