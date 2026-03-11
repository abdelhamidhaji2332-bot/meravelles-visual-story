import type { Panel, LangMode, GlossaryTerm } from '@/data/chapters';
import { glossary } from '@/data/chapters';
import { images } from '@/data/imageImports';

interface ComicPanelProps {
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
  let remaining = text;
  const parts: (string | { term: GlossaryTerm; matched: string })[] = [];
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
          <span key={i} className="lexicon-term" onClick={(e) => { e.stopPropagation(); onTermClick(part.term); }}>
            {part.matched}
          </span>
        )
      )}
    </>
  );
}

export default function ComicPanel({ panel, lang, onTermClick }: ComicPanelProps) {
  const imgSrc = images[panel.image];
  const isFull = panel.layout === 'full';
  const hasSpeaker = !!panel.speaker;

  return (
    <div
      className={`comic-panel relative overflow-hidden ${isFull ? 'col-span-2' : 'col-span-1'}`}
      style={{
        border: '2.5px solid hsl(var(--foreground))',
        borderRadius: '4px',
        minHeight: isFull ? '320px' : '240px',
      }}
    >
      {/* Panel image */}
      <img
        src={imgSrc}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />

      {/* Speech bubble overlay */}
      <div className={`relative z-10 flex flex-col h-full ${hasSpeaker ? 'justify-end' : 'justify-end'}`}
        style={{ minHeight: isFull ? '320px' : '240px' }}
      >
        <div className={`comic-bubble ${lang === 'ar' || lang === 'both' ? '' : ''}`}>
          {hasSpeaker && (
            <span className="comic-speaker">{panel.speaker}</span>
          )}
          {(lang === 'fr' || lang === 'both') && (
            <p className="comic-text-fr">
              {renderTextWithTerms(panel.text_fr, panel.glossaryTerms, 'fr', onTermClick)}
            </p>
          )}
          {(lang === 'ar' || lang === 'both') && (
            <p className="comic-text-ar" dir="rtl">
              {renderTextWithTerms(panel.text_ar, panel.glossaryTerms, 'ar', onTermClick)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
