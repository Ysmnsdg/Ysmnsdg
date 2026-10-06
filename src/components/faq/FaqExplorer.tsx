"use client";

import { useMemo, useState } from "react";
import type { FaqCategory, FaqItem } from "@/data/types";
import { cn } from "@/lib/utils";

interface FaqExplorerProps {
  items: FaqItem[];
  categories: readonly FaqCategory[];
}

export function FaqExplorer({ items, categories }: FaqExplorerProps) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<FaqCategory | "All">(
    "All",
  );
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((item) => {
      const matchesCategory =
        activeCategory === "All" || item.category === activeCategory;
      const matchesQuery =
        !q ||
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [items, query, activeCategory]);

  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="w-full max-w-md">
          <label htmlFor="faq-search" className="eyebrow mb-3 block text-taupe">
            Search
          </label>
          <input
            id="faq-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask a question…"
            className="field"
            autoComplete="off"
          />
        </div>

        <div
          role="tablist"
          aria-label="FAQ categories"
          className="flex flex-wrap gap-2"
        >
          <CategoryTab
            label="All"
            active={activeCategory === "All"}
            onSelect={() => setActiveCategory("All")}
          />
          {categories.map((category) => (
            <CategoryTab
              key={category}
              label={category}
              active={activeCategory === category}
              onSelect={() => setActiveCategory(category)}
            />
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="border border-stone bg-ivory px-8 py-16 text-center">
          <p className="font-serif text-2xl text-espresso">No matching questions</p>
          <p className="mt-3 text-sm leading-relaxed text-text-secondary">
            Try another search term, or browse a different category.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setActiveCategory("All");
            }}
            className="mt-6 text-xs uppercase tracking-[0.18em] text-espresso underline-offset-4 hover:underline"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <ul className="divide-y divide-stone border-y border-stone">
          {filtered.map((item) => {
            const isOpen = openId === item.id;
            return (
              <li key={item.id}>
                <h3>
                  <button
                    type="button"
                    id={`faq-trigger-${item.id}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${item.id}`}
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="flex w-full items-start justify-between gap-6 py-6 text-left transition-colors hover:text-espresso"
                  >
                    <span className="font-serif text-xl leading-snug text-text md:text-2xl">
                      {item.question}
                    </span>
                    <span
                      className="mt-1 shrink-0 text-gold"
                      aria-hidden="true"
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${item.id}`}
                  hidden={!isOpen}
                  className="pb-8 pr-10"
                >
                  {isOpen && (
                    <>
                      <p className="eyebrow mb-3 text-taupe">{item.category}</p>
                      <p className="max-w-3xl text-[0.975rem] leading-relaxed text-text-secondary text-pretty">
                        {item.answer}
                      </p>
                    </>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

function CategoryTab({
  label,
  active,
  onSelect,
}: {
  label: string;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onSelect}
      className={cn(
        "px-4 py-2.5 text-[0.6875rem] uppercase tracking-[0.16em] transition-colors",
        active
          ? "bg-espresso text-warm-white"
          : "border border-stone text-text-secondary hover:border-espresso hover:text-espresso",
      )}
    >
      {label}
    </button>
  );
}
