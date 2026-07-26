import { Cloud, Heart, ShieldCheck, User } from "lucide-react";

const trustItems = [
  { icon: User, label: "Spezialisiert auf Webdesign für Arzt- & Zahnarztpraxen" },
  { icon: Heart, label: "Persönliche Betreuung durch Mariia Ochs" },
  { icon: ShieldCheck, label: "DSGVO-konform & sicher" },
  { icon: Cloud, label: "Hosting in Deutschland" },
];

export function TrustBarSection() {
  return (
    <section className="border-y border-[#dde8f3] bg-[#eef3f9]" aria-label="Vertrauensmerkmale">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <ul className="grid gap-6 py-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-[#cddaea]">
          {trustItems.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-3 lg:px-6 lg:first:pl-0 lg:last:pr-0"
            >
              <Icon
                className="h-6 w-6 shrink-0 text-navy"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <p className="text-[13px] font-semibold leading-snug text-navy">
                {label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
