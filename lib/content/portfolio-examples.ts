export type PortfolioExample = {
  title: string;
  subtitle: string;
  gradient: string;
  href?: string;
  image?: string;
};

export const portfolioExamples: PortfolioExample[] = [
  {
    title: "Zahnarztpraxis",
    subtitle: "Moderne Praxis-Website mit Leistungsübersicht",
    gradient: "from-slate-600 to-slate-800",
    href: "/beispiele/zahnarztpraxis",
    image: "/beispiele/zahnarzt-behandlungsraum.png",
  },
  {
    title: "Hautarzt Dr. Schmidt",
    subtitle: "Vertrauensvoller Auftritt für Facharztpraxis",
    gradient: "from-emerald-700 to-emerald-900",
    href: "/beispiele/hautarzt-dr-schmidt",
  },
  {
    title: "Orthopädie am Rhein",
    subtitle: "Übersichtliche Patientenführung online",
    gradient: "from-blue-700 to-blue-900",
    href: "/beispiele/orthopaedie-am-rhein",
  },
];
