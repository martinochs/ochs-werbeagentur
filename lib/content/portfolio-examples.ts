export type PortfolioExample = {
  title: string;
  subtitle: string;
  gradient: string;
  href?: string;
  image?: string;
};

export const portfolioExamples: PortfolioExample[] = [
  {
    title: "Zahnarztpraxis am See",
    subtitle: "Helles Design mit Leistungsübersicht, Team & Terminbuchung",
    gradient: "from-sky-700 to-slate-800",
    href: "/webdesign-zahnarzt-am-see",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Zahnarztpraxis Dr. Leonhard",
    subtitle: "Premium-Design mit warmer Farbwelt & Interior-Charakter",
    gradient: "from-stone-600 to-teal-900",
    href: "/webdesign-zahnarzt-leonhard",
    image: "/beispiele/zahnarzt-leonhard-hero.png",
  },
  {
    title: "Zahnarztpraxis Dr. Schmidt",
    subtitle: "Moderne Praxis-Website mit Team, Leistungen & Bewertungen",
    gradient: "from-slate-600 to-slate-800",
    href: "/webdesign-zahnarzt",
    image: "/beispiele/zahnarzt-behandlungsraum.png",
  },
  {
    title: "Hautärztin Dr. Sophie Keller",
    subtitle: "Elegante Praxis-Website mit Schwerpunkten & Ästhetik",
    gradient: "from-emerald-700 to-emerald-900",
    href: "/webdesign-hautarzt",
    image: "/beispiele/hautarzt-preview.png",
  },
  {
    title: "Orthopädie Dr. Kraft",
    subtitle: "Sportmedizin, Diagnostik & Patientenführung online",
    gradient: "from-blue-700 to-blue-900",
    href: "/webdesign-orthopaede",
    image: "/beispiele/orthopaedie-hero.png",
  },
];
