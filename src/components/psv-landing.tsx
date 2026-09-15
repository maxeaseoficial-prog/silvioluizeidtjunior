import {
  ArrowRight,
  BarChart3,
  Building2,
  Check,
  ChevronDown,
  Instagram,
  Linkedin,
  Target,
  TrendingUp,
  Users,
  Workflow,
  X,
} from "lucide-react";
import { useEffect, type CSSProperties, type ReactNode } from "react";

const problems = [
  "Não sabe como abordar um cliente sem parecer insistente",
  "Conversa com muitos clientes, mas fecha poucos",
  "Perde vendas por não saber contornar objeções",
  "Dá desconto antes mesmo de o cliente pedir",
  "Tem dificuldade para conduzir o cliente até a decisão",
  "Depende de indicação, movimento da loja ou sorte para vender",
];

const pillars = [
  {
    number: "01",
    title: "Processo",
    text: "Saiba como conduzir uma conversa comercial desde a abordagem até o fechamento, sem depender de improviso.",
    icon: Workflow,
  },
  {
    number: "02",
    title: "Sistema",
    text: "Desenvolva uma rotina comercial que aumente sua consistência e sua capacidade de gerar oportunidades.",
    icon: BarChart3,
  },
  {
    number: "03",
    title: "Vendas",
    text: "Aprenda a aplicar técnicas de comunicação, negociação, contorno de objeções e fechamento na vida real.",
    icon: Target,
  },
];

const before = [
  "Improvisa na abordagem",
  "Fica inseguro diante das objeções",
  "Concede desconto com facilidade",
  "Não sabe conduzir o fechamento",
  "Depende do movimento para vender",
];

const after = [
  "Aborda com segurança",
  "Conduz melhor a conversa",
  "Defende valor antes de falar em preço",
  "Sabe responder às principais objeções",
  "Conduz o cliente até a decisão",
];

const structure = [
  { title: "Mentalidade de vendas", icon: Target },
  { title: "Abordagem", icon: Workflow },
  { title: "Investigação", icon: Building2 },
  { title: "Apresentação", icon: Users },
  { title: "Objeções", icon: BarChart3 },
  { title: "Fechamento", icon: TrendingUp },
];

const audiences = [
  { icon: Building2, text: "Vendedores B2C" },
  { icon: Target, text: "Empresários" },
  { icon: Users, text: "Profissionais comerciais" },
  { icon: Users, text: "Quem está começando em vendas" },
  { icon: Building2, text: "Quem já vende, mas sente que poderia vender muito mais" },
];

const objections = [
  ["Processo", "Para saber exatamente como conduzir uma venda."],
  ["Sistema", "Para transformar boas técnicas em uma rotina comercial consistente."],
  ["Vendas", "Para transformar conhecimento em conversão."],
];

const faqs = [
  {
    question: "Para quem é o Método PSV?",
    answer:
      "Para vendedores, empresários e profissionais que trabalham com vendas B2C e querem desenvolver suas habilidades comerciais, aumentar sua conversão e vender com mais consistência.",
  },
  {
    question: "O Método PSV serve para quem já trabalha com vendas?",
    answer:
      "Sim. O método foi desenvolvido tanto para quem está começando quanto para quem já vende e quer aprimorar sua abordagem, negociação, tratamento de objeções e fechamento.",
  },
  {
    question: "Preciso ter experiência em vendas para fazer o Método PSV?",
    answer:
      "Não. O método apresenta os fundamentos e as técnicas necessárias para desenvolver uma venda mais segura, profissional e consistente.",
  },
];

function CtaLink({ children, secondary = false }: { children: ReactNode; secondary?: boolean }) {
  return (
    <a
      href="https://wa.me/5566999681305"
      target="_blank"
      rel="noopener noreferrer"
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

function Portrait({
  src,
  alt,
  className = "",
  eager = false,
}: {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
}) {
  return (
    <img
      className={`portrait ${className}`}
      src={src}
      alt={alt}
      width="1120"
      height="1400"
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : "auto"}
      decoding="async"
    />
  );
}

function RevealMotion() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    document.documentElement.classList.add("motion-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10%", threshold: 0.12 },
    );

    items.forEach((item) => observer.observe(item));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  return null;
}

function Hero() {
  return (
    <header id="inicio" className="hero">
      <picture className="hero-backdrop" aria-hidden="true">
        <source media="(max-width: 900px)" srcSet="/images/silvio/silvio-speaker.jpg" />
        <img
          src="/images/silvio/hero-stage-clean.png"
          alt=""
          width="1671"
          height="941"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </picture>
      <div className="hero-shade" aria-hidden="true" />

      <div className="hero-native page-shell" data-hero-sequence>
        <p className="hero-presenter">Silvio Luis Eidt Junior apresenta</p>
        <h1>
          <span className="hero-method">Método</span>
          <span className="hero-psv">
            PS<span>V</span>
            <b aria-hidden="true">:</b>
          </span>
        </h1>
        <p className="hero-signature">
          Processo, Sistema e <strong>Vendas.</strong>
        </p>
        <p className="hero-description">
          Um método prático para empresários e vendedores que querem dominar as principais habilidades de vendas B2B e B2C, aumentar sua conversão e transformar vendas em resultado.
        </p>
        <CtaLink>Quero aprender a vender mais</CtaLink>
        <div className="hero-proofline" aria-label="Processo, Sistema e Vendas">
          <span>Processo</span>
          <span>Sistema</span>
          <span>Vendas</span>
        </div>
      </div>
    </header>
  );
}

function ProblemSection() {
  return (
    <section id="problema" className="section section-light">
      <div className="page-shell">
        <SectionLabel number="01">O ponto de partida</SectionLabel>
        <div className="problem-heading" data-reveal>
          <h2>Vender mais não depende de sorte. Depende de método.</h2>
          <p>Vendedores que dominam o processo comercial conseguem abordar melhor, conduzir conversas com mais segurança, contornar objeções e fechar mais vendas.</p>
        </div>
        <div className="problem-list">
          {problems.map((problem, index) => (
            <div
              className="problem-row"
              key={problem}
              data-reveal
              style={{ "--reveal-delay": `${index * 55}ms` } as CSSProperties}
            >
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
        <SectionLabel number="02">O método PSV</SectionLabel>
        <div className="section-heading section-heading-wide" data-reveal>
          <h2>
            O Método <span>PSV</span>
          </h2>
          <p>Um método para transformar vendas em uma habilidade dominada.</p>
        </div>
        <div className="pillar-flow">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <article
                className="pillar"
                key={pillar.title}
                data-reveal
                style={{ "--reveal-delay": `${index * 100}ms` } as CSSProperties}
              >
                <div className="pillar-top">
                  <span className="pillar-number">{pillar.number}</span>
                  <Icon aria-hidden="true" className="pillar-icon" />
                  {index < pillars.length - 1 && <ArrowRight aria-hidden="true" className="pillar-arrow" />}
                </div>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            );
          })}
        </div>
        <div className="method-signature" aria-label="Processo, Sistema e Vendas">
          <span>Processo</span>
          <ArrowRight aria-hidden="true" />
          <span>Sistema</span>
          <ArrowRight aria-hidden="true" />
          <span>Vendas</span>
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
        <div className="transformation-head">
          <h2 className="transformation-title">
            De vendedor que tenta vender para vendedor que <span>sabe vender.</span>
          </h2>
          <p className="transformation-intro">
            O Método PSV transforma conhecimento em habilidade prática para quem vive de vendas.
          </p>
        </div>
        <div className="comparison" data-reveal>
          <div className="comparison-side comparison-before">
            <div className="comparison-heading">
              <p className="comparison-label">Antes</p>
              <span>Operação sem processo definido</span>
            </div>
            <ul>
              {before.map((item) => (
                <li key={item}>
                  <span className="comparison-icon" aria-hidden="true">
                    <X />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="comparison-axis" aria-hidden="true">
            <span>Estrutura</span>
            <div className="comparison-axis-mark">
              <ArrowRight />
            </div>
          </div>
          <div className="comparison-side comparison-after">
            <div className="comparison-heading">
              <p className="comparison-label">Com o PSV</p>
              <span>Processo, gestão e execução alinhados</span>
            </div>
            <ul>
              {after.map((item) => (
                <li key={item}>
                  <span className="comparison-icon" aria-hidden="true">
                    <Check />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
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
        <SectionLabel number="04">O que você vai aprender</SectionLabel>
        <h2 className="structure-title">O que você vai aprender no Método PSV</h2>
        <ol className="timeline">
          {structure.map(({ title, icon: Icon }, index) => (
            <li key={title} data-reveal style={{ "--reveal-delay": `${index * 65}ms` } as CSSProperties}>
              <span className="timeline-number">{String(index + 1).padStart(2, "0")}</span>
              <span className="timeline-icon" aria-hidden="true">
                <Icon />
              </span>
              <h3>{title}</h3>
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
        <div className="authority-photo" data-reveal>
          <Portrait
            src="/images/silvio/silvio-about.jpg"
            alt="Retrato profissional de Silvio Luiz Eidt Junior"
            className="authority-portrait"
          />
        </div>
        <div className="authority-copy" data-reveal>
          <SectionLabel number="05">Liderança e direção</SectionLabel>
          <h2>Quem está por trás do Método PSV</h2>
          <p className="authority-name">Silvio Luiz Eidt Junior</p>
          <p className="authority-bio">
            Empresário, Mentor e Especialista em Vendas B2C. Silvio dedica sua experiência a ensinar pessoas a vender melhor, com método, técnica e aplicação prática.
          </p>
          <p className="authority-bio">
            Criador do Método PSV, desenvolveu uma metodologia própria para quem quer transformar vendas em uma habilidade e aumentar seus resultados no mercado B2C.
          </p>
          <div className="authority-line">
            <span>Processo</span>
            <span>Sistema</span>
            <span>Vendas</span>
          </div>
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
        <h2>Para quem quer vender mais</h2>
        <p className="authority-bio" style={{ maxWidth: "54rem", marginTop: "1rem" }}>
          O Método PSV foi criado para quem entende que vender é uma habilidade que pode ser aprendida, praticada e aperfeiçoada.
        </p>
        <div className="audience-list">
          {audiences.map(({ icon: Icon, text }, index) => (
            <div className="audience-item" key={text} data-reveal style={{ "--reveal-delay": `${index * 55}ms` } as CSSProperties}>
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
        <div data-reveal>
          <SectionLabel number="07">Próximo passo</SectionLabel>
          <h2>Aprenda a vender com método.</h2>
          <p>Domine o processo, desenvolva sua técnica e aumente sua capacidade de transformar conversas em vendas.</p>
        </div>
        <div className="offer-panel" data-reveal>
          <p className="offer-panel-title">Uma rotina para vender melhor</p>
          <div className="offer-principles" aria-label="Fundamentos do Método PSV">
            <span>
              <Workflow aria-hidden="true" />
              Processo
            </span>
            <span>
              <BarChart3 aria-hidden="true" />
              Técnica
            </span>
            <span>
              <Target aria-hidden="true" />
              Conversão
            </span>
          </div>
          <a href="https://wa.me/5566999681305" target="_blank" rel="noopener noreferrer" className="cta-link">
            <span>Quero aprender o Método PSV</span>
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
        <h2>
          Vender melhor não é falar mais. <span>É saber conduzir melhor.</span>
        </h2>
        <div className="objection-rows">
          {objections.map(([title, text], index) => (
            <article key={title} data-reveal style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="objection-close">
          <p>O Método PSV ensina o que fazer antes, durante e depois de uma conversa de vendas.</p>
          <p>Um bom vendedor não depende de improviso para fechar uma venda.</p>
          <CtaLink secondary>Quero aprender o Método PSV</CtaLink>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="section section-light faq-section">
      <div className="page-shell faq-layout">
        <div data-reveal>
          <SectionLabel number="09">Dúvidas</SectionLabel>
          <h2>Perguntas frequentes</h2>
        </div>
        <div className="faq-list" data-reveal>
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
        <div data-reveal>
          <p className="eyebrow">Método PSV</p>
          <h2>Você não precisa nascer vendedor. Você precisa aprender a vender.</h2>
        </div>
        <div data-reveal>
          <div className="final-words">
            <span>Processo.</span>
            <span>Sistema.</span>
            <span>Vendas.</span>
          </div>
          <p>O Método PSV reúne os fundamentos, técnicas e estratégias práticas para quem quer vender melhor no mercado B2C.</p>
          <CtaLink>Quero aprender a vender</CtaLink>
        </div>
        <div className="final-media" data-reveal aria-hidden="true">
          <img src="/images/silvio/silvio-speaker.jpg" alt="" width="972" height="1215" loading="lazy" decoding="async" />
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
          <p className="footer-name">Silvio Luis Eidt Junior</p>
          <p>Método PSV</p>
          <p>Processo, Sistema e Vendas.</p>
        </div>
        <div className="footer-links">
          <a href="https://www.instagram.com/silvio.eidt/" target="_blank" rel="noreferrer">
            <Instagram aria-hidden="true" />
            Instagram
          </a>
          <a href="https://www.linkedin.com/in/silvio-eidt-jr-8741b36b/" target="_blank" rel="noreferrer">
            <Linkedin aria-hidden="true" />
            LinkedIn
          </a>
        </div>
      </div>
      <div className="page-shell footer-bottom">
        <span>PSV</span>
        <span>Processo · Sistema · Vendas</span>
      </div>
    </footer>
  );
}

export function PsvLanding() {
  return (
    <>
      <RevealMotion />
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
