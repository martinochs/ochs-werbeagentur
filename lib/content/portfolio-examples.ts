export type PortfolioExample = {
  title: string;
  subtitle: string;
  gradient: string;
  href?: string;
  image?: string;
};

export const portfolioExamples: PortfolioExample[] = [
  {
    title: "Zahnarztpraxis Dr. Schmidt",
    subtitle: "Moderne Praxis-Website mit Team, Leistungen & Bewertungen",
    gradient: "from-slate-600 to-slate-800",
    href: "/webdesign-zahnarzt",
    image: "/beispiele/zahnarzt-behandlungsraum.png",
  },
  {
    title: "Hautärztin Dr. Weiss",
    subtitle: "Elegante Praxis-Website mit Schwerpunkten & Ästhetik",
    gradient: "from-emerald-700 to-emerald-900",
    href: "/webdesign-hautarzt",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Orthopädie Dr. Kraft",
    subtitle: "Sportmedizin, Diagnostik & Patientenführung online",
    gradient: "from-blue-700 to-blue-900",
    href: "/webdesign-orthopaede",
    image: "/beispiele/orthopaedie-hero.png",
  },
];
