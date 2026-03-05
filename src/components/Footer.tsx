import { Link } from "react-router-dom";
import logo from "@/assets/logo-transparent.png";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container mx-auto px-6 lg:px-12 py-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <img src={logo} alt="Domus Engenharia" className="h-12 w-auto mb-6 brightness-200" />
          <p className="text-sm font-body font-light leading-relaxed opacity-70">
            Construindo o futuro com excelência, inovação e compromisso com a qualidade.
          </p>
        </div>

        <div>
          <h4 className="font-heading text-lg mb-6 tracking-wide">Navegação</h4>
          <div className="flex flex-col gap-3">
            {[
              { to: "/", label: "Home" },
              { to: "/sobre", label: "Sobre" },
              { to: "/projetos", label: "Projetos" },
              { to: "/servicos", label: "Serviços" },
              { to: "/contato", label: "Contato" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="text-sm font-body font-light opacity-70 hover:opacity-100 hover:text-accent transition-all">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading text-lg mb-6 tracking-wide">Serviços</h4>
          <div className="flex flex-col gap-3">
            {["Construção Residencial", "Construção Comercial", "Reformas Estruturais", "Gerenciamento de Obras", "Consultoria Técnica"].map((s) => (
              <span key={s} className="text-sm font-body font-light opacity-70">{s}</span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading text-lg mb-6 tracking-wide">Contato</h4>
          <div className="flex flex-col gap-3 text-sm font-body font-light opacity-70">
            <a href="tel:+5511969987340" className="hover:text-accent transition-colors">(11) 96998-7340</a>
            <a href="mailto:contato@domusengenharia.com.br" className="hover:text-accent transition-colors">contato@domusengenharia.com.br</a>
            <span>Av. Paulista, 1000 — São Paulo, SP</span>
            <span>Seg — Sex: 08h às 18h</span>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-xs font-body font-light opacity-50">
          © {new Date().getFullYear()} Domus Engenharia. Todos os direitos reservados. Desenvolvido por Lucas Kikuthi.
        </span>
        <span className="text-xs font-body font-light opacity-50">
          CNPJ: 00.000.000/0001-00
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
