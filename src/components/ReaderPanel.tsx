import { motion } from 'framer-motion';
import type { Panel, LangMode, GlossaryTerm } from '@/data/chapters';
import { glossary } from '@/data/chapters';
import { images } from '@/data/imageImports';
import { useCallback } from 'react';

const springConfig = { type: "spring" as const, duration: 0.4, bounce: 0 };

interface ReaderPanelProps {
  panel: Panel;
  lang: LangMode;
  onTermClick: (term: GlossaryTerm) => void;
}

function renderTextWithTerms(
  text: string,
  termIds: string[] | undefined,
  lang: 'fr' | 'ar',
  onTermClick: (term: GlossaryTerm) => void
) {
  if (!termIds || termIds.length === 0) return text;

  const terms = termIds.map(id => glossary.find(g => g.id === id)).filter(Boolean) as GlossaryTerm[];
  let result = text;
  const parts: (string | { term: GlossaryTerm; matched: string })[] = [];
  
  // Simple approach: find terms in text and wrap them
  let remaining = text;
  for (const term of terms) {
    const termText = lang === 'fr' ? term.term_fr : term.term_ar;
    const idx = remaining.indexOf(termText);
    if (idx !== -1) {
      if (idx > 0) parts.push(remaining.slice(0, idx));
      parts.push({ term, matched: termText });
      remaining = remaining.slice(idx + termText.length);
    }
  }
  if (remaining) parts.push(remaining);

  if (parts.length === 0) return text;

  return (
    <>
      {parts.map((part, i) =>
        typeof part === 'string' ? (
          <span key={i}>{part}</span>
        ) : (
          <span
            key={i}
            className="lexicon-term"
            onClick={(e) => { e.stopPropagation(); onTermClick(part.term); }}
          >
            {part.matched}
          </span>
        )
      )}
    </>
  );
}

export default function ReaderPanel({ panel, lang, onTermClick }: ReaderPanelProps) {
  const imgSrc = images[panel.image];

  return (
    <section className="scroll-snap-panel w-full px-4 py-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ amount: 0.5, once: false }}
        transition={springConfig}
        className="w-full max-w-2xl mx-auto space-y-6"
      >
        <div className="w-full overflow-hidden rounded-lg" style={{ outline: '1px solid hsl(var(--border))', outlineOffset: '-1px' }}>
          <img
            src={imgSrc}
            alt=""
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>

        <div className={`space-y-4 ${lang === 'both' ? 'divide-y divide-border' : ''}`}>
          {(lang === 'fr' || lang === 'both') && (
            <div className="font-narrative text-foreground">
              {renderTextWithTerms(panel.text_fr, panel.glossaryTerms, 'fr', onTermClick)}
            </div>
          )}
          {(lang === 'ar' || lang === 'both') && (
            <div className={`font-narrative-ar text-foreground ${lang === 'both' ? 'pt-4' : ''}`}>
              {renderTextWithTerms(panel.text_ar, panel.glossaryTerms, 'ar', onTermClick)}
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
