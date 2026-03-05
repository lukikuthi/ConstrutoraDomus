import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-20 px-6 lg:px-12">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <SectionLabel>Contato</SectionLabel>
            <h1 className="font-heading text-5xl md:text-7xl font-light leading-tight mb-8">
              Vamos <span className="italic text-accent">conversar</span>
            </h1>
            <p className="font-body font-light text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Estamos prontos para ouvir sobre seu projeto. Entre em contato e 
              solicite um orçamento sem compromisso.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-32 px-6 lg:px-12">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">Nome</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border-b border-border py-3 font-body font-light focus:outline-none focus:border-accent transition-colors"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">E-mail</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border-b border-border py-3 font-body font-light focus:outline-none focus:border-accent transition-colors"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">Telefone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-border py-3 font-body font-light focus:outline-none focus:border-accent transition-colors"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                    <div>
                      <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">Assunto</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border-b border-border py-3 font-body font-light focus:outline-none focus:border-accent transition-colors"
                      >
                        <option value="">Selecione</option>
                        <option value="orcamento">Solicitar Orçamento</option>
                        <option value="residencial">Construção Residencial</option>
                        <option value="comercial">Construção Comercial</option>
                        <option value="reforma">Reforma Estrutural</option>
                        <option value="consultoria">Consultoria Técnica</option>
                        <option value="outro">Outro</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">Mensagem</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-transparent border-b border-border py-3 font-body font-light focus:outline-none focus:border-accent transition-colors resize-none"
                      placeholder="Conte-nos sobre seu projeto..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-accent text-accent-foreground px-10 py-4 font-body text-sm font-medium tracking-widest uppercase hover:bg-accent/90 transition-all"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              </AnimatedSection>
            </div>

            {/* Contact info */}
            <div>
              <AnimatedSection delay={0.2}>
                <div className="space-y-10">
                  {[
                    { icon: Phone, label: "Telefone", value: "(11) 96998-7340", link: "tel:+5511969987340" },
                    { icon: Mail, label: "E-mail", value: "contato@domusengenharia.com.br", link: "mailto:contato@domusengenharia.com.br" },
                    { icon: MapPin, label: "Endereço", value: "Av. Paulista, 1000\nSão Paulo, SP — 01310-100" },
                    { icon: Clock, label: "Horário", value: "Segunda a Sexta\n08h às 18h" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <item.icon size={20} className="text-accent mt-1 flex-shrink-0" strokeWidth={1.5} />
                      <div>
                        <span className="font-body text-xs tracking-widest uppercase text-muted-foreground block mb-1">{item.label}</span>
                        {item.link ? (
                          <a href={item.link} className="font-body font-light hover:text-accent transition-colors whitespace-pre-line">{item.value}</a>
                        ) : (
                          <span className="font-body font-light whitespace-pre-line">{item.value}</span>
                        )}
                      </div>
                    </div>
                  ))}

                  {/* WhatsApp */}
                  <a
                    href="https://api.whatsapp.com/send/?phone=5511969987340&text=Ol%C3%A1%21+Gostaria+de+falar+com+o+Lucas&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-[hsl(142,70%,40%)] text-primary-foreground px-6 py-4 font-body text-sm font-medium tracking-widest uppercase hover:opacity-90 transition-all"
                  >
                    <MessageCircle size={18} /> WhatsApp
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[400px] bg-muted">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975830828656!2d-46.65512892394044!3d-23.56329006178901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c0776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1709000000000!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(100%) contrast(1.1)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização"
        />
      </section>
    </div>
  );
};

export default Contact;
