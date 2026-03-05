import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  area: string;
  description: string;
  details: string;
  image: string;
  images: string[];
}

export const projects: Project[] = [
  {
    id: "residencial-villa-nova",
    title: "Residencial Villa Nova",
    category: "Residencial",
    location: "São Paulo, SP",
    year: "2024",
    area: "1.200 m²",
    description: "Condomínio residencial de alto padrão com arquitetura contemporânea e materiais nobres.",
    details: "O Residencial Villa Nova é um projeto que redefine o conceito de moradia premium em São Paulo. Com linhas limpas e uso intensivo de vidro e concreto aparente, o empreendimento oferece 12 unidades exclusivas com plantas inteligentes que privilegiam a integração entre espaços internos e externos. Cada detalhe foi pensado para proporcionar conforto e sofisticação, desde o paisagismo autoral até os acabamentos de primeira linha.",
    image: project1,
    images: [project1, project3],
  },
  {
    id: "torre-corporativa-nexus",
    title: "Torre Corporativa Nexus",
    category: "Comercial",
    location: "Curitiba, PR",
    year: "2023",
    area: "8.500 m²",
    description: "Edifício comercial com fachada de vidro de alta performance e certificação sustentável.",
    details: "A Torre Corporativa Nexus representa o que há de mais moderno em construção comercial. Com 15 pavimentos e fachada de vidro duplo de alta performance energética, o edifício foi projetado para abrigar empresas que valorizam inovação e sustentabilidade. O projeto conta com certificação LEED Gold, sistemas de automação predial inteligente e espaços colaborativos no térreo.",
    image: project2,
    images: [project2, project6],
  },
  {
    id: "penthouse-aurora",
    title: "Penthouse Aurora",
    category: "Residencial",
    location: "Rio de Janeiro, RJ",
    year: "2024",
    area: "450 m²",
    description: "Cobertura duplex com design minimalista e vista panorâmica para o mar.",
    details: "A Penthouse Aurora é uma obra de arte habitável. Localizada no último andar de um edifício exclusivo na orla carioca, esta cobertura duplex de 450m² combina design minimalista com materiais de altíssima qualidade. Mármore italiano, madeira certificada e um sistema de automação completo garantem uma experiência de moradia incomparável. O pé-direito duplo na sala principal emoldura a vista panorâmica do Atlântico.",
    image: project3,
    images: [project3, project1],
  },
  {
    id: "condominio-jardins",
    title: "Condomínio Jardins",
    category: "Residencial",
    location: "Florianópolis, SC",
    year: "2023",
    area: "15.000 m²",
    description: "Complexo residencial com áreas de lazer premium e paisagismo tropical.",
    details: "O Condomínio Jardins é um empreendimento que harmoniza arquitetura contemporânea com a exuberância natural de Florianópolis. São 48 unidades distribuídas em 4 torres baixas, integradas por um generoso deck de lazer com piscina aquecida, academia, salão gourmet e playground. O paisagismo tropical de autoria de renomado escritório complementa a experiência de viver em contato com a natureza.",
    image: project4,
    images: [project4, project1],
  },
  {
    id: "centro-logistico-prime",
    title: "Centro Logístico Prime",
    category: "Industrial",
    location: "Campinas, SP",
    year: "2022",
    area: "25.000 m²",
    description: "Centro de distribuição com estrutura metálica de última geração e eficiência operacional.",
    details: "O Centro Logístico Prime foi projetado para atender às demandas mais exigentes do setor de logística e distribuição. Com estrutura metálica de última geração, o galpão de 25.000m² oferece pé-direito de 12 metros, piso industrial de alta resistência e docas automatizadas. A obra foi concluída em tempo recorde de 8 meses, demonstrando a capacidade técnica e organizacional da Domus Engenharia.",
    image: project5,
    images: [project5, project2],
  },
  {
    id: "edificio-meridian",
    title: "Edifício Meridian",
    category: "Comercial",
    location: "Belo Horizonte, MG",
    year: "2024",
    area: "6.800 m²",
    description: "Edifício de escritórios com iluminação dramática e design sofisticado.",
    details: "O Edifício Meridian é referência em arquitetura corporativa em Belo Horizonte. Seu design contemporâneo combina concreto aparente com grandes panos de vidro, criando um jogo de luz e sombra que valoriza cada pavimento. O projeto inclui rooftop com vista 360° da cidade, estacionamento subterrâneo automatizado e lobby com pé-direito triplo que impressiona desde o primeiro momento.",
    image: project6,
    images: [project6, project2],
  },
];
