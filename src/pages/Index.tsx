import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ArrowRight, Shield, Award, Users, Lightbulb, ChevronRight, Quote } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";
import SplashScreen from "@/components/SplashScreen";
import { projects } from "@/data/projects";
import heroVideo from "@/assets/hero.mp4";

const Index = () => {
  const featuredProjects = projects.slice(0, 3);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    if (showSplash) {
      window.scrollTo(0, 0);
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [showSplash]);

  useEffect(() => {
    if (!showSplash) {
      window.scrollTo(0, 0);
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';

      requestAnimationFrame(() => {
        window.scrollTo(0, 0);
        setTimeout(() => {
          document.documentElement.classList.add('smooth-scroll');
        }, 100);
      });
    }
  }, [showSplash]);

  return (
    <>
      <AnimatePresence mode="wait">
        {showSplash && (
          <SplashScreen
            key="splash"
            onComplete={() => setShowSplash(false)}
          />
        )}
      </AnimatePresence>

      {!showSplash && (
        <div className="min-h-screen">
          {/* Hero */}
          <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              src={heroVideo}
            />
            <div className="absolute inset-0 bg-foreground/60" />
            <div className="relative z-10 text-center text-primary-foreground px-6 max-w-4xl">
              <AnimatedSection>
                <span className="text-xs font-body font-medium tracking-[0.4em] uppercase text-accent mb-8 block">
                  Construtora & Incorporadora
                </span>
                <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] mb-8">
                  Construímos o<br />
                  <span className="italic">extraordinário</span>
                </h1>
                <p className="font-body font-light text-lg md:text-xl opacity-80 max-w-2xl mx-auto mb-12 leading-relaxed">
                  Excelência em engenharia e construção de alto padrão há mais de 15 anos,
                  transformando projetos em realidade com precisão e sofisticação.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contato"
                    className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 font-body text-sm font-medium tracking-widest uppercase hover:bg-accent/90 transition-all"
                  >
                    Solicitar Orçamento <ArrowRight size={16} />
                  </Link>
                  <Link
                    to="/projetos"
                    className="inline-flex items-center gap-3 border border-primary-foreground/30 text-primary-foreground px-8 py-4 font-body text-sm font-medium tracking-widest uppercase hover:bg-primary-foreground/10 transition-all"
                  >
                    Ver Projetos
                  </Link>
                </div>
              </AnimatedSection>
            </div>
            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/50">
              <span className="text-[10px] font-body tracking-[0.3em] uppercase">Scroll</span>
              <div className="w-px h-8 bg-primary-foreground/30 animate-pulse" />
            </div>
          </section>

          {/* About preview */}
          <section className="py-32 px-6 lg:px-12">
            <div className="container mx-auto max-w-6xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <AnimatedSection>
                  <SectionLabel>Sobre Nós</SectionLabel>
                  <h2 className="font-heading text-4xl md:text-5xl font-light leading-tight mb-8">
                    Mais de 15 anos<br />
                    <span className="italic text-accent">construindo confiança</span>
                  </h2>
                  <p className="font-body font-light text-muted-foreground leading-relaxed mb-6">
                    A Domus Engenharia nasceu da paixão por construir. Desde 2008, atuamos no mercado
                    da construção civil com foco em empreendimentos residenciais e comerciais de alto padrão,
                    sempre priorizando qualidade, pontualidade e inovação.
                  </p>
                  <p className="font-body font-light text-muted-foreground leading-relaxed mb-10">
                    Nossa equipe multidisciplinar combina experiência técnica com visão criativa,
                    garantindo que cada projeto supere as expectativas dos nossos clientes.
                  </p>
                  <Link
                    to="/sobre"
                    className="inline-flex items-center gap-2 text-sm font-body font-medium tracking-widest uppercase text-accent hover:gap-4 transition-all"
                  >
                    Conheça nossa história <ChevronRight size={14} />
                  </Link>
                </AnimatedSection>
                <AnimatedSection delay={0.2}>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-primary text-primary-foreground p-8 flex flex-col justify-end aspect-square">
                      <span className="font-heading text-5xl font-light">150+</span>
                      <span className="font-body text-xs tracking-widest uppercase mt-2 opacity-70">Projetos Entregues</span>
                    </div>
                    <div className="bg-secondary text-secondary-foreground p-8 flex flex-col justify-end aspect-square">
                      <span className="font-heading text-5xl font-light text-accent">15</span>
                      <span className="font-body text-xs tracking-widest uppercase mt-2 text-muted-foreground">Anos de Mercado</span>
                    </div>
                    <div className="bg-secondary text-secondary-foreground p-8 flex flex-col justify-end aspect-square">
                      <span className="font-heading text-5xl font-light text-accent">98%</span>
                      <span className="font-body text-xs tracking-widest uppercase mt-2 text-muted-foreground">Satisfação</span>
                    </div>
                    <div className="bg-accent text-accent-foreground p-8 flex flex-col justify-end aspect-square">
                      <span className="font-heading text-5xl font-light">50+</span>
                      <span className="font-body text-xs tracking-widest uppercase mt-2 opacity-70">Profissionais</span>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>

          {/* Featured Projects */}
          <section className="py-32 px-6 lg:px-12 bg-secondary">
            <div className="container mx-auto max-w-6xl">
              <AnimatedSection>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
                  <div>
                    <SectionLabel>Portfólio</SectionLabel>
                    <h2 className="font-heading text-4xl md:text-5xl font-light">
                      Projetos em <span className="italic">destaque</span>
                    </h2>
                  </div>
                  <Link
                    to="/projetos"
                    className="inline-flex items-center gap-2 text-sm font-body font-medium tracking-widest uppercase text-accent hover:gap-4 transition-all mt-6 md:mt-0"
                  >
                    Ver todos <ChevronRight size={14} />
                  </Link>
                </div>
              </AnimatedSection>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {featuredProjects.map((project, i) => (
                  <AnimatedSection key={project.id} delay={i * 0.15}>
                    <Link to={`/projetos/${project.id}`} className="group block">
                      <div className="overflow-hidden mb-6">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <span className="text-xs font-body tracking-widest uppercase text-accent">{project.category}</span>
                      <h3 className="font-heading text-2xl font-light mt-2 group-hover:text-accent transition-colors">{project.title}</h3>
                      <p className="font-body text-sm font-light text-muted-foreground mt-2">{project.location} — {project.year}</p>
                    </Link>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>

          {/* Differentials */}
          <section className="py-32 px-6 lg:px-12">
            <div className="container mx-auto max-w-6xl">
              <AnimatedSection>
                <div className="text-center mb-20">
                  <SectionLabel>Diferenciais</SectionLabel>
                  <h2 className="font-heading text-4xl md:text-5xl font-light">
                    Por que escolher a <span className="italic text-accent">Domus</span>
                  </h2>
                </div>
              </AnimatedSection>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { icon: Shield, title: "Qualidade Garantida", desc: "Rigoroso controle de qualidade em todas as etapas, com materiais de primeira linha." },
                  { icon: Award, title: "Excelência Técnica", desc: "Equipe altamente qualificada com certificações e atualização constante." },
                  { icon: Users, title: "Atendimento Exclusivo", desc: "Acompanhamento personalizado do início ao fim de cada projeto." },
                  { icon: Lightbulb, title: "Inovação Constante", desc: "Uso de tecnologias de ponta e métodos construtivos modernos." },
                ].map((item, i) => (
                  <AnimatedSection key={item.title} delay={i * 0.1}>
                    <div className="group p-8 border border-border hover:border-accent/30 transition-all duration-500">
                      <item.icon size={28} className="text-accent mb-6" strokeWidth={1.2} />
                      <h3 className="font-heading text-xl mb-4">{item.title}</h3>
                      <p className="font-body text-sm font-light text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="py-32 px-6 lg:px-12 bg-primary text-primary-foreground">
            <div className="container mx-auto max-w-6xl">
              <AnimatedSection>
                <div className="text-center mb-20">
                  <span className="text-xs font-body font-medium tracking-[0.3em] uppercase text-accent mb-4 block">Processo</span>
                  <h2 className="font-heading text-4xl md:text-5xl font-light">
                    Como <span className="italic">trabalhamos</span>
                  </h2>
                </div>
              </AnimatedSection>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { step: "01", title: "Planejamento", desc: "Análise detalhada do projeto, viabilidade técnica e financeira." },
                  { step: "02", title: "Projeto", desc: "Desenvolvimento do projeto executivo com equipe multidisciplinar." },
                  { step: "03", title: "Execução", desc: "Obra conduzida com rigoroso controle de qualidade e cronograma." },
                  { step: "04", title: "Entrega", desc: "Vistoria final, documentação e acompanhamento pós-obra." },
                ].map((item, i) => (
                  <AnimatedSection key={item.step} delay={i * 0.15}>
                    <div className="text-center md:text-left">
                      <span className="font-heading text-6xl font-light text-accent/40">{item.step}</span>
                      <h3 className="font-heading text-xl mt-4 mb-3">{item.title}</h3>
                      <p className="font-body text-sm font-light opacity-70 leading-relaxed">{item.desc}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-32 px-6 lg:px-12">
            <div className="container mx-auto max-w-6xl">
              <AnimatedSection>
                <div className="text-center mb-20">
                  <SectionLabel>Depoimentos</SectionLabel>
                  <h2 className="font-heading text-4xl md:text-5xl font-light">
                    O que dizem nossos <span className="italic">clientes</span>
                  </h2>
                </div>
              </AnimatedSection>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { name: "Carlos Mendes", role: "Empresário", text: "A Domus superou todas as nossas expectativas. A qualidade da construção e o profissionalismo da equipe são incomparáveis." },
                  { name: "Ana Beatriz Lima", role: "Arquiteta", text: "Trabalhar com a Domus é sinônimo de tranquilidade. Cumprem prazos, mantêm a qualidade e são extremamente profissionais." },
                  { name: "Roberto Silva", role: "Investidor Imobiliário", text: "Já fizemos três empreendimentos juntos. A confiança e os resultados falam por si. Parceria de longo prazo garantida." },
                ].map((t, i) => (
                  <AnimatedSection key={t.name} delay={i * 0.15}>
                    <div className="p-10 border border-border">
                      <Quote size={24} className="text-accent/30 mb-6" />
                      <p className="font-body text-sm font-light text-muted-foreground leading-relaxed mb-8">
                        "{t.text}"
                      </p>
                      <div>
                        <span className="font-heading text-lg block">{t.name}</span>
                        <span className="font-body text-xs tracking-widest uppercase text-accent">{t.role}</span>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-32 px-6 lg:px-12 bg-accent text-accent-foreground">
            <div className="container mx-auto max-w-4xl text-center">
              <AnimatedSection>
                <h2 className="font-heading text-4xl md:text-6xl font-light mb-6">
                  Pronto para construir<br />
                  seu <span className="italic">próximo projeto?</span>
                </h2>
                <p className="font-body font-light text-lg opacity-80 mb-12 max-w-2xl mx-auto">
                  Entre em contato conosco e descubra como podemos transformar sua visão em realidade.
                </p>
                <Link
                  to="/contato"
                  className="inline-flex items-center gap-3 bg-foreground text-primary-foreground px-10 py-4 font-body text-sm font-medium tracking-widest uppercase hover:bg-foreground/90 transition-all"
                >
                  Fale Conosco <ArrowRight size={16} />
                </Link>
              </AnimatedSection>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Index;
