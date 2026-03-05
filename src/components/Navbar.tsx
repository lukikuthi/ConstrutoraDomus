import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-transparent.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/sobre", label: "Sobre" },
  { to: "/projetos", label: "Projetos" },
  { to: "/servicos", label: "Serviços" },
  { to: "/contato", label: "Contato" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  const navBg = scrolled || !isHome
    ? "bg-background/95 backdrop-blur-md shadow-sm"
    : "bg-transparent";

  const textColor = scrolled || !isHome
    ? "text-foreground"
    : "text-primary-foreground";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
      <div className="container mx-auto flex items-center justify-between py-4 px-6 lg:px-12">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Domus Engenharia" className="h-20 w-auto transition-all duration-300" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-body font-light tracking-widest uppercase transition-colors duration-300 hover:text-accent ${
                location.pathname === link.to ? "text-accent" : textColor
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          to="/contato"
          className="hidden md:inline-flex text-xs font-body font-medium tracking-widest uppercase px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
        >
          Orçamento
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden ${textColor}`}
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-t border-border">
          <div className="flex flex-col items-center gap-6 py-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-body font-light tracking-widest uppercase transition-colors hover:text-accent ${
                  location.pathname === link.to ? "text-accent" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contato"
              className="text-xs font-body font-medium tracking-widest uppercase px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              Orçamento
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
