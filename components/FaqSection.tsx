"use client";



import { Phone, Plus } from "lucide-react";

import { useState } from "react";

import { faqItems } from "@/lib/content/faq";



import Link from "next/link";

const COLUMN_COUNT = 3;



function splitIntoColumns<T>(items: T[], columnCount: number): T[][] {

  const itemsPerColumn = Math.ceil(items.length / columnCount);

  return Array.from({ length: columnCount }, (_, index) =>

    items.slice(index * itemsPerColumn, (index + 1) * itemsPerColumn),

  ).filter((column) => column.length > 0);

}



export function FaqSection({ items = faqItems, title = "Häufig gestellte Fragen", id = "faq" }: { items?: typeof faqItems, title?: string, id?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const columns = splitIntoColumns(items, COLUMN_COUNT);

  return (
    <section
      id={id}
      className="scroll-mt-28 border-t border-border bg-white py-16 lg:py-20"
      aria-labelledby={title ? "faq-heading" : undefined}
    >

      <div className="mx-auto max-w-6xl px-4 lg:px-8">

        {title && (
          <h2 id="faq-heading" className="text-xl font-bold text-navy sm:text-2xl">
            {title}
          </h2>
        )}



        <div className={`grid gap-4 lg:grid-cols-3 lg:gap-5 ${title ? "mt-10" : "mt-0"}`}>

          {columns.map((column, columnIndex) => (

            <div

              key={columnIndex}

              className="divide-y divide-border rounded-xl border border-border bg-surface"

            >

              {column.map((item, index) => {

                const globalIndex =

                  columnIndex * Math.ceil(items.length / COLUMN_COUNT) + index;

                const isOpen = openIndex === globalIndex;



                return (

                  <div key={item.question}>

                    <button

                      type="button"

                      className="flex w-full items-center gap-3 px-4 py-3.5 text-left"

                      onClick={() => setOpenIndex(isOpen ? null : globalIndex)}

                      aria-expanded={isOpen}

                    >

                      <Phone

                        className="h-4 w-4 shrink-0 text-accent"

                        strokeWidth={2}

                        aria-hidden="true"

                      />

                      <span className="flex-1 text-sm font-medium leading-snug text-navy">

                        {item.question}

                      </span>

                      <Plus

                        className={`h-4 w-4 shrink-0 text-muted transition-transform ${isOpen ? "rotate-45" : ""}`}

                        aria-hidden="true"

                      />

                    </button>

                    {isOpen && (

                      <p className="px-4 pb-4 pl-11 text-sm leading-relaxed text-muted">

                        {item.answer}

                      </p>

                    )}

                  </div>

                );

              })}

            </div>

          ))}

        </div>
        
        {title && (
          <div className="mt-12 text-center">
            <Link href="/faq" className="btn-primary inline-flex px-6 py-3.5 text-base">
              Alle häufigen Fragen ansehen
            </Link>
          </div>
        )}

      </div>

    </section>

  );

}


