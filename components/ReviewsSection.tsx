"use client";

import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const dummyReviews = [
  {
    id: 1,
    author: "Dr. med. Thomas Müller",
    role: "Hausarzt",
    date: "vor 2 Wochen",
    text: "Frau Ochs hat unsere Praxis-Website komplett neu gestaltet. Wir bekommen jetzt deutlich mehr Anfragen von Neupatienten und die Online-Terminbuchung entlastet unser Team enorm. Absolute Empfehlung!",
    rating: 5,
  },
  {
    id: 2,
    author: "Dr. Sarah Schmidt",
    role: "Zahnärztin",
    date: "vor 1 Monat",
    text: "Sehr professionelle Zusammenarbeit. Die Google-Ads-Kampagnen haben vom ersten Monat an funktioniert. Transparente Kommunikation, faire Preise und tolle Ergebnisse für unsere Zahnarztpraxis.",
    rating: 5,
  },
  {
    id: 3,
    author: "Gemeinschaftspraxis am Park",
    role: "Fachärzte für Orthopädie",
    date: "vor 3 Monaten",
    text: "Modernes Design, schnelle Umsetzung und immer erreichbar bei Fragen. Wir fühlen uns bei Ochs Digital bestens aufgehoben. Endlich eine Agentur, die versteht, worauf es bei Ärzten ankommt.",
    rating: 5,
  },
  {
    id: 4,
    author: "Dr. med. dent. Andreas Weber",
    role: "Kieferorthopäde",
    date: "vor 4 Monaten",
    text: "Hervorragende Arbeit! Unsere alte Website war nicht mehr zeitgemäß. Das neue Design ist modern, schnell und sieht auf dem Handy super aus. Auch die SEO-Optimierung zeigt bereits erste Erfolge.",
    rating: 5,
  },
];

export function ReviewsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="border-t border-border bg-[#f8fafc] py-16 lg:py-20" aria-labelledby="reviews-heading">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 id="reviews-heading" className="text-2xl font-bold text-navy sm:text-3xl">
              Designbeispiel
            </h2>
            <div className="mt-3 flex items-center gap-3">
              <div className="flex items-center gap-1">
                <span className="text-xl font-bold text-navy">5,0</span>
                <div className="flex text-[#FBBC05]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <span className="text-sm text-muted">Basierend auf Google-Bewertungen</span>
            </div>
          </div>

          {/* Desktop Navigation Buttons */}
          <div className="hidden gap-2 sm:flex">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-navy shadow-sm transition-all hover:bg-gray-50 disabled:opacity-50 disabled:hover:bg-white"
              aria-label="Vorherige Bewertung"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-navy shadow-sm transition-all hover:bg-gray-50 disabled:opacity-50 disabled:hover:bg-white"
              aria-label="Nächste Bewertung"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Slider Container */}
        <div 
          ref={scrollRef}
          onScroll={checkScroll}
          className="scrollbar-hide -mx-4 mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-8 sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0"
        >
          {dummyReviews.map((review) => (
            <div 
              key={review.id} 
              className="w-[85vw] shrink-0 snap-center rounded-2xl border border-border bg-white p-6 shadow-sm sm:w-[400px]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eff6ff] text-lg font-bold text-[#1d6fd8]">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-navy">{review.author}</h3>
                    <p className="text-xs text-muted">{review.role}</p>
                  </div>
                </div>
                <GoogleIcon />
              </div>
              
              <div className="mt-4 flex items-center gap-2">
                <div className="flex text-[#FBBC05]">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs text-muted">{review.date}</span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-navy/80">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
