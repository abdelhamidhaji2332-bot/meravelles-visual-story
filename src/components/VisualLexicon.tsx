import { AnimatePresence, motion } from 'framer-motion';
import type { GlossaryTerm } from '@/data/chapters';
import type { LangMode } from '@/data/chapters';
import { X } from 'lucide-react';

const springConfig = { type: "spring" as const, duration: 0.4, bounce: 0 };

interface VisualLexiconProps {
  term: GlossaryTerm | null;
  lang: LangMode;
  onClose: () => void;
}

export default function VisualLexicon({ term, lang, onClose }: VisualLexiconProps) {
  return (
    <AnimatePresence>
      {term && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/20 z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={springConfig}
            className="fixed bottom-0 left-0 right-0 z-50 bg-background rounded-t-3xl p-6 pb-8"
            style={{ boxShadow: 'var(--shadow-sheet)' }}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                {(lang === 'fr' || lang === 'both') && (
                  <h3 className="text-xl font-medium">{term.term_fr}</h3>
                )}
                {(lang === 'ar' || lang === 'both') && (
                  <h3 className="text-xl font-medium font-serif" dir="rtl">{term.term_ar}</h3>
                )}
              </div>
              <button onClick={onClose} className="p-1 rounded-full hover:bg-muted transition-colors">
                <X size={20} className="text-muted-foreground" />
              </button>
            </div>
            <div className="space-y-3">
              {(lang === 'fr' || lang === 'both') && (
                <p className="font-narrative text-foreground">{term.definition_fr}</p>
              )}
              {(lang === 'ar' || lang === 'both') && (
                <p className="font-narrative-ar text-foreground">{term.definition_ar}</p>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
