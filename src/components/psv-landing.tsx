import {
  ArrowDown,
  ArrowRight,
  Building2,
  Check,
  ChevronDown,
  Instagram,
  Linkedin,
  Target,
  Users,
} from "lucide-react";
import type { ReactNode } from "react";

const problems = [
  "Cada vendedor trabalha de uma forma",
  "Oportunidades se perdem por falta de acompanhamento",
  "O gestor não consegue identificar onde a venda trava",
  "Metas existem, mas o processo para alcançá-las não está claro",
  "O resultado depende excessivamente de pessoas específicas",
  "Falta previsibilidade comercial",
];

const pillars = [
  {
    number: "01",
    title: "Processo",
    text: "Estrutura, etapas, responsabilidades e padrões claros para a operação comercial.",
  },
  {
    number: "02",
    title: "Sistema",
    text: "Organização, acompanhamento, indicadores e gestão da execução.",
  },
  {
    number: "03",
    title: "Vendas",
    text: "Transformar processo e gestão em execução comercial orientada a resultado.",
  },
];

const before = [
  "Operação dependente de pessoas",
  "Processos pouco claros",
  "Gestão reativa",
  "Baixa previsibilidade",
  "Dificuldade para escalar",
];

const after = [
  "Processo comercial definido",
  "Papéis e responsabilidades claros",
  "Gestão baseada em acompanhamento",
  "Equipe orientada à execução",
  "Maior previsibilidade operacional",
];

const structure = [
  "Diagnóstico comercial",
  "Estruturação do processo",
  "Organização da operação",
  "Gestão da equipe",
  "Indicadores e acompanhamento",
  "Evolução da execução comercial",
];

const audiences = [
  { icon: Building2, text: "Empresários" },
  { icon: Target, text: "Gestores comerciais" },
  { icon: Users, text: "Empresas formando uma equipe de vendas" },
  { icon: Users, text: "Empresas reorganizando uma equipe existente" },
  { icon: Building2, text: "Operações que cresceram sem estruturar o comercial" },
  { icon: Target, text: "Negócios que querem reduzir improvisação na gestão de vendas" },
];

const objections = [
  ["Processo", "Para deixar claro como a operação comercial deve funcionar."],
  ["Sistema", "Para transformar acompanhamento e gestão em rotina."],
  ["Vendas", "Para fazer a estrutura chegar até a execução comercial."],
];

const faqs = [
  {
    question: "Para quem é o Método PSV?",
    answer:
      "Para empresas, empresários e gestores que precisam organizar, formar ou reorganizar sua operação comercial.",
  },
  {
    question: "Como funciona o processo?",
    answer:
      "O formato detalhado será apresentado após a definição final da entrega. A estrutura parte de processo, sistema e execução em vendas.",
  },
  {
    question: "O método serve para equipes comerciais já existentes?",
    answer:
      "Sim. A proposta contempla operações que precisam organizar processos, responsabilidades, acompanhamento e execução.",
  },
  {
    question: "Também funciona para quem está montando uma nova equipe?",
    answer:
      "Sim. O método também foi pensado para empresas que precisam estruturar a operação desde a formação da equipe.",
  },
  {
    question: "Como saber se minha operação comercial precisa ser estruturada?",
    answer:
      "Falta de clareza no processo, gestão reativa, dependência de pessoas específicas e pouca previsibilidade são sinais relevantes.",
  },
];

function CtaLink({ children, secondary = false }: { children: ReactNode; secondary?: boolean }) {
  return (
    <a
      href="#oferta"
      className={secondary ? "cta-link cta-link-secondary" : "cta-link"}
    >
      <span>{children}</span>
      <ArrowRight aria-hidden="true" className="size-5 shrink-0" />
    </a>
  );
}

function SectionLabel({ number, children }: { number: string; children: ReactNode }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <span>{children}</span>
    </div>
  );
}

function PhotoPlaceholder({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={compact ? "photo-placeholder photo-placeholder-compact" : "photo-placeholder"}
      role="img"
      aria-label="Espaço reservado para fotografia profissional de Silvio Luiz Eidt Junior"
    >
      <div className="photo-grid" aria-hidden="true" />
      <div className="photo-mark" aria-hidden="true">PSV</div>
      <p>Fotografia profissional de Silvio</p>
    </div>
  );
}

function Hero() {
  return (
    <header className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <nav className="site-nav page-shell" aria-label="Navegação principal">
        <a href="#inicio" className="brand" aria-label="Método PSV — início">
          <span className="brand-monogram">PSV</span>
          <span className="brand-copy">Processo · Sistema · Vendas</span>
        </a>
        <a href="#metodo" className="nav-link">Conheça o método</a>
      </nav>

      <div id="inicio" className="hero-content page-shell">
        <div className="hero-copy">
          <p className="eyebrow">Silvio Luiz Eidt Junior apresenta</p>
          <h1>Método <span>PSV</span></h1>
          <p className="hero-signature">Processo, Sistema e Vendas.</p>
          <p className="hero-description">
            Estruture sua operação comercial com processos claros, gestão e um sistema de vendas preparado para gerar resultados previsíveis.
          </p>
          <CtaLink>Quero estruturar minha equipe de vendas</CtaLink>
          <p className="hero-proofline">Processo. Gestão. Execução. Vendas.</p>
        </div>
        <div className="hero-photo-wrap">
          {/* Substituir pelo asset oficial quando a fotografia for adicionada ao projeto. */}
          <PhotoPlaceholder />
        </div>
      </div>
      <a className="scroll-cue" href="#problema" aria-label="Ir para a próxima seção">
        <ArrowDown aria-hidden="true" className="size-4" />
      </a>
    </header>
  );
}

function ProblemSection() {
  return (
    <section id="problema" className="section section-light">
      <div className="page-shell">
        <SectionLabel number="01">O ponto de partida</SectionLabel>
        <div className="problem-heading">
          <h2>Vender mais não começa cobrando mais do vendedor.</h2>
          <p>Começa construindo uma operação comercial que sabe o que fazer, como fazer e como medir.</p>
        </div>
        <div className="problem-list">
          {problems.map((problem, index) => (
            <div className="problem-row" key={problem}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{problem}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MethodSection() {
  return (
    <section id="metodo" className="section method-section">
      <div className="method-grid" aria-hidden="true" />
      <div className="page-shell">
        <SectionLabel number="02">A estrutura</SectionLabel>
        <div className="section-heading section-heading-wide">
          <h2>O Método <span>PSV</span></h2>
          <p>Uma estrutura comercial construída sobre três fundamentos.</p>
        </div>
        <div className="pillar-flow">
          {pillars.map((pillar, index) => (
            <article className="pillar" key={pillar.title}>
              <div className="pillar-top">
                <span className="pillar-number">{pillar.number}</span>
                {index < pillars.length - 1 && <ArrowRight aria-hidden="true" className="pillar-arrow" />}
              </div>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
        <div className="method-signature" aria-label="Processo leva ao sistema, que leva a vendas">
          <span>Processo</span><ArrowRight aria-hidden="true" /><span>Sistema</span><ArrowRight aria-hidden="true" /><span>Vendas</span>
        </div>
      </div>
    </section>
  );
}

function TransformationSection() {
  return (
    <section className="section transformation-section">
      <div className="page-shell">
        <SectionLabel number="03">A transformação</SectionLabel>
        <h2 className="transformation-title">De uma equipe que apenas vende para uma operação comercial estruturada.</h2>
        <div className="comparison">
          <div className="comparison-side comparison-before">
            <p className="comparison-label">Antes</p>
            <ul>{before.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <div className="comparison-axis" aria-hidden="true">
            <span>Estrutura</span><ArrowRight />
          </div>
          <div className="comparison-side comparison-after">
            <p className="comparison-label">Com o PSV</p>
            <ul>{after.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function StructureSection() {
  return (
    <section className="section section-light">
      <div className="page-shell">
        <SectionLabel number="04">Dentro da operação</SectionLabel>
        <h2 className="structure-title">O que estruturamos dentro da sua operação comercial</h2>
        <ol className="timeline">
          {structure.map((item, index) => (
            <li key={item}>
              <span className="timeline-number">{String(index + 1).padStart(2, "0")}</span>
              <span className="timeline-dot" aria-hidden="true" />
              <h3>{item}</h3>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function AuthoritySection() {
  return (
    <section className="section authority-section">
      <div className="page-shell authority-layout">
        <div className="authority-photo">
          {/* Substituir pelo segundo enquadramento oficial quando disponível. */}
          <PhotoPlaceholder compact />
        </div>
        <div className="authority-copy">
          <SectionLabel number="05">Liderança e direção</SectionLabel>
          <h2>Quem está por trás do Método PSV</h2>
          <p className="authority-name">Silvio Luiz Eidt Junior</p>
          <p className="authority-bio">
            Especialista em estruturação comercial e responsável pelo Método PSV. Esta área está preparada para receber a biografia oficial na próxima etapa do projeto.
          </p>
          <div className="authority-line"><span>Processo</span><span>Sistema</span><span>Vendas</span></div>
        </div>
      </div>
    </section>
  );
}

function AudienceSection() {
  return (
    <section className="section section-light audience-section">
      <div className="page-shell">
        <SectionLabel number="06">Para quem é</SectionLabel>
        <h2>O Método PSV é para empresas que precisam transformar vendas em uma operação.</h2>
        <div className="audience-list">
          {audiences.map(({ icon: Icon, text }, index) => (
            <div className="audience-item" key={text}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <Icon aria-hidden="true" />
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OfferSection() {
  return (
    <section id="oferta" className="section offer-section">
      <div className="offer-grid" aria-hidden="true" />
      <div className="page-shell offer-layout">
        <div>
          <SectionLabel number="07">Próximo passo</SectionLabel>
          <h2>Estruture sua equipe de vendas com o Método PSV.</h2>
          <p>Processo, Sistema e Vendas trabalhando juntos para transformar sua operação comercial.</p>
        </div>
        <div className="offer-panel">
          <p className="offer-panel-title">Informações da entrega</p>
          {/* Campos preparados para [FORMATO], [DURAÇÃO] e [INVESTIMENTO] a definir. */}
          <div className="offer-pending">
            Formato, duração e condições comerciais serão apresentados após a definição final da entrega.
          </div>
          <a href="#contato" className="cta-link">
            <span>Quero conhecer o Método PSV</span>
            <ArrowRight aria-hidden="true" className="size-5 shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
}

function ObjectionsSection() {
  return (
    <section className="section objections-section">
      <div className="page-shell">
        <SectionLabel number="08">Clareza na operação</SectionLabel>
        <h2>Estruturar vendas não é adicionar burocracia. <span>É eliminar improviso.</span></h2>
        <div className="objection-rows">
          {objections.map(([title, text], index) => (
            <article key={title}>
              <span>0{index + 1}</span><h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
        <div className="objection-close">
          <p>Uma equipe comercial forte não depende apenas de bons vendedores.</p>
          <p>Depende de uma estrutura que permita que boas pessoas executem um bom processo.</p>
          <CtaLink secondary>Quero conhecer o Método PSV</CtaLink>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="section section-light faq-section">
      <div className="page-shell faq-layout">
        <div>
          <SectionLabel number="09">Dúvidas</SectionLabel>
          <h2>Perguntas frequentes</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details key={faq.question}>
              <summary>
                <span className="faq-number">0{index + 1}</span>
                <span>{faq.question}</span>
                <ChevronDown aria-hidden="true" />
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="contato" className="section final-cta">
      <div className="final-lines" aria-hidden="true" />
      <div className="page-shell final-layout">
        <div>
          <p className="eyebrow">Método PSV</p>
          <h2>Sua equipe não precisa depender de improviso para vender.</h2>
        </div>
        <div>
          <div className="final-words"><span>Processo.</span><span>Sistema.</span><span>Vendas.</span></div>
          <p>Construa uma operação comercial mais organizada, gerenciável e preparada para crescer.</p>
          <CtaLink>Quero estruturar minha operação comercial</CtaLink>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-layout">
        <div>
          <p className="footer-name">Silvio Luiz Eidt Junior</p>
          <p>Método PSV</p>
          <p>Processo, Sistema e Vendas.</p>
        </div>
        <div className="footer-links">
          <a href="https://www.instagram.com/silvio.eidt/" target="_blank" rel="noreferrer"><Instagram aria-hidden="true" />Instagram</a>
          <a href="https://www.linkedin.com/in/silvio-eidt-jr-8741b36b/" target="_blank" rel="noreferrer"><Linkedin aria-hidden="true" />LinkedIn</a>
          <a href="#inicio">Política de Privacidade</a>
          <a href="#inicio">Termos de Uso</a>
        </div>
      </div>
      <div className="page-shell footer-bottom"><span>PSV</span><span>Processo · Sistema · Vendas</span></div>
    </footer>
  );
}

export function PsvLanding() {
  return (
    <>
      <Hero />
      <main>
        <ProblemSection />
        <MethodSection />
        <TransformationSection />
        <StructureSection />
        <AuthoritySection />
        <AudienceSection />
        <OfferSection />
        <ObjectionsSection />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
