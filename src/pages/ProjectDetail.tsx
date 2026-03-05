import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, Ruler } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { projects } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-4xl mb-4">Projeto não encontrado</h1>
          <Link to="/projetos" className="text-accent font-body text-sm tracking-widest uppercase">
            Voltar aos projetos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero image */}
      <section className="relative h-[70vh] overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-12">
          <div className="container mx-auto max-w-6xl">
            <AnimatedSection>
              <span className="text-xs font-body tracking-widest uppercase text-accent mb-4 block">{project.category}</span>
              <h1 className="font-heading text-4xl md:text-6xl font-light text-primary-foreground">{project.title}</h1>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="py-20 px-6 lg:px-12">
        <div className="container mx-auto max-w-6xl">
          <Link
            to="/projetos"
            className="inline-flex items-center gap-2 text-sm font-body tracking-widest uppercase text-muted-foreground hover:text-accent transition-colors mb-12"
          >
            <ArrowLeft size={14} /> Voltar
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <AnimatedSection>
                <h2 className="font-heading text-3xl font-light mb-8">Sobre o Projeto</h2>
                <p className="font-body font-light text-muted-foreground leading-relaxed mb-6">{project.description}</p>
                <p className="font-body font-light text-muted-foreground leading-relaxed">{project.details}</p>
              </AnimatedSection>

              {/* Additional images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
                {project.images.map((img, i) => (
                  <AnimatedSection key={i} delay={i * 0.15}>
                    <img src={img} alt={`${project.title} ${i + 1}`} className="w-full aspect-[4/3] object-cover" />
                  </AnimatedSection>
                ))}
              </div>
            </div>

            <div>
              <AnimatedSection delay={0.2}>
                <div className="border border-border p-8 space-y-8">
                  <h3 className="font-heading text-xl">Detalhes Técnicos</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <MapPin size={18} className="text-accent mt-1 flex-shrink-0" strokeWidth={1.5} />
                      <div>
                        <span className="font-body text-xs tracking-widest uppercase text-muted-foreground block mb-1">Localização</span>
                        <span className="font-body font-light">{project.location}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Calendar size={18} className="text-accent mt-1 flex-shrink-0" strokeWidth={1.5} />
                      <div>
                        <span className="font-body text-xs tracking-widest uppercase text-muted-foreground block mb-1">Ano</span>
                        <span className="font-body font-light">{project.year}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Ruler size={18} className="text-accent mt-1 flex-shrink-0" strokeWidth={1.5} />
                      <div>
                        <span className="font-body text-xs tracking-widest uppercase text-muted-foreground block mb-1">Área</span>
                        <span className="font-body font-light">{project.area}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
