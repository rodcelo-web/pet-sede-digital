import { createFileRoute } from "@tanstack/react-router";
import {
  MessageCircle,
  AlertTriangle,
  Search,
  LayoutGrid,
  Stethoscope,
  Syringe,
  Scissors,
  Hotel,
  ArrowRight,
  Check,
  Mail,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "New Planet Offers — Sites para Clínicas e Pet Shops" },
      {
        name: "description",
        content:
          "Criamos Sedes Digitais profissionais para o mercado pet. Sites rápidos, otimizados para Google e prontos para transformar tutores em agendamentos.",
      },
      { property: "og:title", content: "New Planet Offers — Sites para Clínicas e Pet Shops" },
      {
        property: "og:description",
        content:
          "Não dependa apenas das redes sociais. Tenha um site rápido, otimizado para o Google e pronto para receber tutores na sua região.",
      },
      { property: "og:url", content: "https://pet-sede-digital.lovable.app/" },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c34eea49-7421-43a0-9e95-836bbe392b5c/id-preview-6b848466--c3c9b6f8-8ad1-4a66-82d5-082f3d7734ae.lovable.app-1779669271064.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c34eea49-7421-43a0-9e95-836bbe392b5c/id-preview-6b848466--c3c9b6f8-8ad1-4a66-82d5-082f3d7734ae.lovable.app-1779669271064.png" },
    ],
    links: [
      { rel: "canonical", href: "https://pet-sede-digital.lovable.app/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              name: "New Planet Offers",
              url: "https://pet-sede-digital.lovable.app/",
              email: "criadordesites@newplanetoffers.com",
              description:
                "Criação de sites profissionais para clínicas veterinárias, hospitais pet e pet shops.",
              areaServed: "BR",
            },
            {
              "@type": "WebSite",
              name: "New Planet Offers",
              url: "https://pet-sede-digital.lovable.app/",
            },
          ],
        }),
      },
    ],
  }),
});


const WHATSAPP_NUMBER = "5511947384813";
const WHATSAPP_MSG = encodeURIComponent(
  "Olá! Gostaria de solicitar um esboço gratuito de Sede Digital para o meu negócio pet.",
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;
const WHATSAPP_SIMPLE = `https://wa.me/${WHATSAPP_NUMBER}`;

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="group flex items-center gap-2">
          <span className="font-display text-lg font-semibold tracking-tight text-foreground sm:text-xl">
            New Planet <span className="italic text-primary">Offers</span>
          </span>
        </a>
        <a
          href={WHATSAPP_SIMPLE}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elegant sm:px-5"
        >
          <MessageCircle className="h-4 w-4" />
          <span className="hidden sm:inline">Falar no WhatsApp</span>
          <span className="sm:hidden">WhatsApp</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="mx-auto max-w-6xl px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur sm:text-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-mint" />
            New Planet Offers — Soluções Digitais para o Mercado Pet
          </span>

          <h1 className="mt-7 font-display text-4xl font-medium leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
            Transforme seguidores em{" "}
            <span className="italic text-primary">agendamentos.</span>
          </h1>
          <p className="mt-5 font-display text-xl text-muted-foreground sm:text-2xl">
            Criamos Sedes Digitais de Alta Conversão para Clínicas Veterinárias e Pet Shops.
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Não dependa apenas das redes sociais. Tenha um site rápido, otimizado para o Google e
            pronto para receber tutores que procuram pelos seus serviços na sua região.
          </p>

          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-elegant transition-all hover:-translate-y-0.5 sm:w-auto"
            >
              Solicitar um Esboço Gratuito para Meu Negócio
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-mint" /> Sem compromisso</span>
            <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-mint" /> Resposta em até 24h</span>
            <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-mint" /> Feito sob medida</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  const cards = [
    {
      icon: AlertTriangle,
      title: "Falta de Controle",
      text: "O algoritmo muda e seus clientes param de ver seus posts. Você perde alcance da noite para o dia, sem aviso.",
    },
    {
      icon: Search,
      title: "Invisível no Google",
      text: "Quem procura por 'veterinário 24h' com uma emergência no Google não acha o seu perfil social.",
    },
    {
      icon: LayoutGrid,
      title: "Confusão de Informações",
      text: "Tutores não acham os preços, horários de banho e tosa ou telefone de vacinas facilmente na bio.",
    },
  ];

  return (
    <section className="border-t border-border/60 bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-mint">
            O Problema
          </span>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Depender só do Instagram é{" "}
            <span className="italic text-primary">um risco</span> para o seu negócio pet.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-mint/40 hover:shadow-soft"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Solution() {
  const pillars = [
    { icon: Stethoscope, title: "Clínica", text: "Especialidades, equipe e diferenciais apresentados com autoridade." },
    { icon: Syringe, title: "Vacinação", text: "Calendário, valores e agendamento direto, sem ruído na comunicação." },
    { icon: Scissors, title: "Banho e Tosa", text: "Pacotes, horários e fotos do antes/depois em uma vitrine organizada." },
    { icon: Hotel, title: "Hotel & Creche", text: "Estrutura, rotina e reservas com fluxo claro para o tutor decidir." },
  ];

  return (
    <section className="bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-end gap-6 lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-mint">
              A Solução
            </span>
            <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-foreground sm:text-4xl lg:text-5xl">
              Uma Sede Digital Pet que organiza{" "}
              <span className="italic text-primary">tudo em um só lugar.</span>
            </h2>
          </div>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Um site limpo, rápido e estratégico que apresenta todos os serviços da sua operação
            com clareza, conduzindo o tutor do primeiro clique até o agendamento confirmado.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:border-mint/50 hover:shadow-soft"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Otimização SEO local para aparecer no Google",
            "Carregamento ultra rápido em qualquer celular",
            "Integração com WhatsApp e Google Maps",
            "Design profissional, sem cara de template",
            "Editável, com manutenção descomplicada",
            "Estrutura preparada para anúncios",
          ].map((f) => (
            <li key={f} className="flex items-start gap-3 text-sm text-foreground">
              <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-mint/20 text-mint">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              {f}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Showcase() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="overflow-hidden rounded-3xl border border-border bg-primary text-primary-foreground shadow-elegant">
          <div className="grid gap-0 lg:grid-cols-2">
            <div className="p-8 sm:p-12 lg:p-14">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-mint">
                Vitrine
              </span>
              <h2 className="mt-4 font-display text-3xl font-medium leading-tight sm:text-4xl">
                Conheça o nosso{" "}
                <span className="italic">padrão de entrega.</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-primary-foreground/75 sm:text-lg">
                Desenvolvemos projetos sob medida para marcas locais, como o modelo conceitual
                criado para a{" "}
                <span className="font-medium text-primary-foreground">Bosque dos Animais</span>.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-mint px-6 py-3 text-sm font-semibold text-mint-foreground transition-all hover:-translate-y-0.5 hover:shadow-elegant"
              >
                Quero um projeto sob medida
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="relative flex items-center justify-center bg-gradient-to-br from-primary-foreground/[0.04] to-mint/10 p-8 sm:p-12">
              {/* Browser mockup */}
              <div className="w-full max-w-md rounded-xl border border-primary-foreground/10 bg-background text-foreground shadow-2xl">
                <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-mint/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-primary/30" />
                  <span className="ml-3 truncate rounded-md bg-muted px-2 py-0.5 text-[10px] text-muted-foreground">
                    bosquedosanimais.com.br
                  </span>
                </div>
                <div className="space-y-3 p-6">
                  <div className="flex items-center justify-between">
                    <div className="h-3 w-24 rounded bg-primary/80" />
                    <div className="h-2.5 w-16 rounded-full bg-mint/60" />
                  </div>
                  <div className="mt-6 h-4 w-4/5 rounded bg-foreground/80" />
                  <div className="h-4 w-3/5 rounded bg-foreground/60" />
                  <div className="h-2 w-full rounded bg-muted" />
                  <div className="h-2 w-11/12 rounded bg-muted" />
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <div className="h-16 rounded-lg bg-accent" />
                    <div className="h-16 rounded-lg bg-secondary" />
                  </div>
                  <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-[10px] font-medium text-primary-foreground">
                    Agendar consulta
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="bg-secondary/40 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <h2 className="font-display text-3xl font-medium leading-tight text-foreground sm:text-4xl lg:text-5xl">
          Pronto para tirar sua clínica do{" "}
          <span className="italic text-primary">refém do algoritmo?</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
          Em menos de 5 minutos no WhatsApp você recebe um esboço gratuito personalizado para o
          seu negócio pet.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-elegant transition-all hover:-translate-y-0.5"
        >
          <MessageCircle className="h-4 w-4" />
          Solicitar meu esboço gratuito
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 sm:px-8 md:flex-row md:items-center">
        <div>
          <p className="font-display text-base font-semibold text-foreground">
            New Planet <span className="italic text-primary">Offers</span>
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            © 2026 New Planet Offers. Todos os direitos reservados.
          </p>
        </div>
        <a
          href="mailto:criadordesites@newplanetoffers.com"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <Mail className="h-4 w-4" />
          criadordesites@newplanetoffers.com
        </a>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_SIMPLE}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-mint text-mint-foreground shadow-elegant transition-transform hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}

function Index() {
  return (
    <>
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
      />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;1,9..144,400&family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <main className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <Problem />
        <Solution />
        <Showcase />
        <FinalCta />
        <Footer />
        <FloatingWhatsApp />
      </main>
    </>
  );
}
