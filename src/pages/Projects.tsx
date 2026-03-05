import { useState } from "react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";
import { projects } from "@/data/projects";

const categories = ["Todos", "Residencial", "Comercial", "Industrial"];

const Projects = () => {
  const [filter, setFilter] = useState("Todos");
  const filtered = filter === "Todos" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-20 px-6 lg:px-12">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <SectionLabel>Portfólio</SectionLabel>
            <h1 className="font-heading text-5xl md:text-7xl font-light leading-tight mb-8">
              Nossos <span className="italic text-accent">projetos</span>
            </h1>
            <p className="font-body font-light text-lg text-muted-foreground max-w-2xl leading-relaxed mb-12">
              Conheça os empreendimentos que definem nosso padrão de excelência em construção civil.
            </p>
          </AnimatedSection>

          {/* Filter */}
          <AnimatedSection>
            <div className="flex flex-wrap gap-4 mb-16">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`font-body text-xs tracking-widest uppercase px-6 py-3 border transition-all duration-300 ${
                    filter === cat
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border text-muted-foreground hover:border-accent hover:text-accent"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((project, i) => (
              <AnimatedSection key={project.id} delay={i * 0.1}>
                <Link to={`/projetos/${project.id}`} className="group block">
                  <div className="overflow-hidden mb-6">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-xs font-body tracking-widest uppercase text-accent">{project.category}</span>
                    <span className="text-xs font-body text-muted-foreground">{project.year}</span>
                  </div>
                  <h3 className="font-heading text-2xl md:text-3xl font-light group-hover:text-accent transition-colors">{project.title}</h3>
                  <p className="font-body text-sm font-light text-muted-foreground mt-2">{project.location} — {project.area}</p>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
