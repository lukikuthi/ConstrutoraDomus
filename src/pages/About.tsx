import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Heart } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";
import aboutTeam from "@/assets/about-team.jpg";
import project1 from "@/assets/project-1.jpg";
import project6 from "@/assets/project-6.jpg";

const About = () => (
  <div className="min-h-screen">
    {/* Hero */}
    <section className="pt-32 pb-20 px-6 lg:px-12">
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection>
          <SectionLabel>Sobre Nós</SectionLabel>
          <h1 className="font-heading text-5xl md:text-7xl font-light leading-tight mb-8">
            Uma história de<br />
            <span className="italic text-accent">excelência</span>
          </h1>
          <p className="font-body font-light text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Desde 2008, a Domus Engenharia constrói mais do que empreendimentos — 
            construímos relações de confiança e um legado de qualidade.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* History */}
    <section className="py-20 px-6 lg:px-12">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <img src={project1} alt="Nossa história" className="w-full aspect-[4/3] object-cover" />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <SectionLabel>Nossa História</SectionLabel>
            <h2 className="font-heading text-3xl md:text-4xl font-light mb-8">
              Do sonho à <span className="italic">realidade</span>
            </h2>
            <div className="space-y-5 font-body font-light text-muted-foreground leading-relaxed">
              <p>
                Fundada em 2008 pelo engenheiro civil Ricardo Domingues, a Domus Engenharia 
                começou como um pequeno escritório na zona sul de São Paulo, com a visão de 
                oferecer construções de qualidade superior a preços justos.
              </p>
              <p>
                Ao longo dos anos, a empresa cresceu de forma consistente, expandindo sua 
                atuação para diferentes segmentos da construção civil. Hoje, com mais de 
                150 projetos entregues, somos referência em construção de alto padrão.
              </p>
              <p>
                Nossa trajetória é marcada pela busca constante por inovação, investimento 
                em capacitação da equipe e adoção de práticas sustentáveis que fazem a 
                diferença em cada projeto.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Mission, Vision, Values */}
    <section className="py-32 px-6 lg:px-12 bg-secondary">
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection>
          <div className="text-center mb-20">
            <SectionLabel>Nossos Pilares</SectionLabel>
            <h2 className="font-heading text-4xl md:text-5xl font-light">
              O que nos <span className="italic">guia</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Target, title: "Missão", desc: "Entregar empreendimentos de excelência que superem as expectativas, com respeito aos prazos, ao orçamento e ao meio ambiente." },
            { icon: Eye, title: "Visão", desc: "Ser reconhecida como a construtora mais confiável e inovadora do mercado, referência em qualidade e relacionamento com clientes." },
            { icon: Heart, title: "Valores", desc: "Integridade, excelência técnica, inovação constante, respeito às pessoas e compromisso com a sustentabilidade em cada decisão." },
          ].map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.15}>
              <div className="bg-background p-12 text-center">
                <item.icon size={32} className="text-accent mx-auto mb-6" strokeWidth={1.2} />
                <h3 className="font-heading text-2xl mb-6">{item.title}</h3>
                <p className="font-body text-sm font-light text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="py-32 px-6 lg:px-12">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <SectionLabel>Equipe</SectionLabel>
            <h2 className="font-heading text-3xl md:text-4xl font-light mb-8">
              Pessoas que fazem a <span className="italic text-accent">diferença</span>
            </h2>
            <p className="font-body font-light text-muted-foreground leading-relaxed mb-8">
              Nossa equipe é formada por mais de 50 profissionais altamente qualificados, 
              incluindo engenheiros civis, arquitetos, técnicos em segurança do trabalho e 
              gestores de projeto. Investimos continuamente em capacitação e desenvolvimento 
              profissional, garantindo que cada membro da equipe esteja atualizado com as 
              melhores práticas e tecnologias do setor.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { n: "12", label: "Engenheiros" },
                { n: "8", label: "Arquitetos" },
                { n: "15", label: "Técnicos" },
                { n: "20+", label: "Colaboradores" },
              ].map((item) => (
                <div key={item.label} className="border border-border p-6">
                  <span className="font-heading text-3xl text-accent">{item.n}</span>
                  <span className="font-body text-xs tracking-widest uppercase block mt-1 text-muted-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <img src={aboutTeam} alt="Nossa equipe" className="w-full aspect-[4/3] object-cover" />
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Architecture photo band */}
    <section className="relative h-[50vh] overflow-hidden">
      <img src={project6} alt="Arquitetura" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
        <AnimatedSection>
          <div className="text-center text-primary-foreground px-6">
            <h2 className="font-heading text-4xl md:text-5xl font-light mb-6">
              Construindo <span className="italic">legados</span>
            </h2>
            <Link
              to="/contato"
              className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 font-body text-sm font-medium tracking-widest uppercase hover:bg-accent/90 transition-all"
            >
              Fale Conosco <ArrowRight size={16} />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default About;
