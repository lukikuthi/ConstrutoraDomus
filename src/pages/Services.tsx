import { Link } from "react-router-dom";
import { ArrowRight, Home, Building2, Wrench, HardHat, ClipboardCheck } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";

const services = [
  {
    icon: Home,
    title: "Construção Residencial",
    desc: "Desenvolvemos projetos residenciais de alto padrão, desde casas unifamiliares até condomínios completos. Cada detalhe é cuidadosamente planejado para garantir conforto, funcionalidade e estética impecável.",
    features: ["Casas e mansões", "Condomínios residenciais", "Edifícios de apartamentos", "Projetos sob medida"],
  },
  {
    icon: Building2,
    title: "Construção Comercial",
    desc: "Construímos espaços comerciais que aliam funcionalidade e design, criando ambientes que potencializam negócios. De edifícios corporativos a centros comerciais, entregamos projetos que impressionam.",
    features: ["Edifícios corporativos", "Centros comerciais", "Galpões industriais", "Espaços comerciais"],
  },
  {
    icon: Wrench,
    title: "Reformas Estruturais",
    desc: "Realizamos reformas estruturais com a mesma excelência das construções novas. Revitalizamos edifícios existentes, adequamos layouts e modernizamos estruturas com segurança e eficiência.",
    features: ["Retrofit de edifícios", "Reforço estrutural", "Ampliações", "Modernizações"],
  },
  {
    icon: HardHat,
    title: "Gerenciamento de Obras",
    desc: "Oferecemos gerenciamento completo de obras, garantindo que cada projeto seja executado dentro do prazo, orçamento e padrões de qualidade estabelecidos. Controle total do início ao fim.",
    features: ["Gestão de cronograma", "Controle de custos", "Gestão de qualidade", "Coordenação de equipes"],
  },
  {
    icon: ClipboardCheck,
    title: "Consultoria Técnica",
    desc: "Nossa consultoria técnica oferece suporte especializado em todas as fases do projeto, desde a viabilidade até a manutenção. Orientação profissional para decisões assertivas.",
    features: ["Laudos técnicos", "Viabilidade construtiva", "Perícias e vistorias", "Consultoria em sustentabilidade"],
  },
];

const Services = () => (
  <div className="min-h-screen">
    <section className="pt-32 pb-20 px-6 lg:px-12">
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection>
          <SectionLabel>Serviços</SectionLabel>
          <h1 className="font-heading text-5xl md:text-7xl font-light leading-tight mb-8">
            Soluções completas<br />
            em <span className="italic text-accent">engenharia</span>
          </h1>
          <p className="font-body font-light text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Do planejamento à entrega, oferecemos um portfólio completo de serviços 
            para atender às mais diversas demandas da construção civil.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Services list */}
    <section className="pb-32 px-6 lg:px-12">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-0">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.1}>
              <div className="py-16 border-t border-border grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-1">
                  <service.icon size={28} className="text-accent" strokeWidth={1.2} />
                </div>
                <div className="lg:col-span-5">
                  <h2 className="font-heading text-3xl font-light mb-4">{service.title}</h2>
                  <p className="font-body font-light text-muted-foreground leading-relaxed">{service.desc}</p>
                </div>
                <div className="lg:col-span-4 lg:col-start-8">
                  <ul className="space-y-3">
                    {service.features.map((f) => (
                      <li key={f} className="font-body text-sm font-light text-muted-foreground flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Image band */}
    <section className="grid grid-cols-1 md:grid-cols-2 h-[50vh]">
      <img src={project1} alt="Serviços" className="w-full h-full object-cover" />
      <img src={project2} alt="Serviços" className="w-full h-full object-cover" />
    </section>

    {/* CTA */}
    <section className="py-32 px-6 lg:px-12 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-4xl text-center">
        <AnimatedSection>
          <h2 className="font-heading text-4xl md:text-5xl font-light mb-6">
            Tem um projeto em <span className="italic">mente?</span>
          </h2>
          <p className="font-body font-light text-lg opacity-70 mb-12">
            Conte-nos sobre suas necessidades e descubra como podemos ajudar.
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-10 py-4 font-body text-sm font-medium tracking-widest uppercase hover:bg-accent/90 transition-all"
          >
            Solicitar Orçamento <ArrowRight size={16} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default Services;
