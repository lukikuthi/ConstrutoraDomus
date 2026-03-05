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
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [showSplash]);

  useEffect(() => {
    if (!showSplash) {
      window.scrollTo(0, 0);
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";

      requestAnimationFrame(() => {
        window.scrollTo(0, 0);
        setTimeout(() => {
          document.documentElement.classList.add("smooth-scroll");
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
          
          {/* HERO */}
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
                  Construímos o
                  <br />
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

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/50">
              <span className="text-[10px] font-body tracking-[0.3em] uppercase">
                Scroll
              </span>
              <div className="w-px h-8 bg-primary-foreground/30 animate-pulse" />
            </div>
          </section>

          {/* SOBRE */}
          <section className="py-32 px-6 lg:px-12">
            <div className="container mx-auto max-w-6xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                <AnimatedSection>
                  <SectionLabel>Sobre Nós</SectionLabel>

                  <h2 className="font-heading text-4xl md:text-5xl font-light leading-tight mb-8">
                    Mais de 15 anos
                    <br />
                    <span className="italic text-accent">
                      construindo confiança
                    </span>
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
                      <span className="text-xs tracking-widest uppercase mt-2 opacity-70">
                        Projetos Entregues
                      </span>
                    </div>

                    <div className="bg-secondary text-secondary-foreground p-8 flex flex-col justify-end aspect-square">
                      <span className="font-heading text-5xl font-light text-accent">15</span>
                      <span className="text-xs tracking-widest uppercase mt-2 text-muted-foreground">
                        Anos de Mercado
                      </span>
                    </div>

                    <div className="bg-secondary text-secondary-foreground p-8 flex flex-col justify-end aspect-square">
                      <span className="font-heading text-5xl font-light text-accent">98%</span>
                      <span className="text-xs tracking-widest uppercase mt-2 text-muted-foreground">
                        Satisfação
                      </span>
                    </div>

                    <div className="bg-accent text-accent-foreground p-8 flex flex-col justify-end aspect-square">
                      <span className="font-heading text-5xl font-light">50+</span>
                      <span className="text-xs tracking-widest uppercase mt-2 opacity-70">
                        Profissionais
                      </span>
                    </div>

                  </div>
                </AnimatedSection>

              </div>
            </div>
          </section>

        </div>
      )}
    </>
  );
};

export default Index;