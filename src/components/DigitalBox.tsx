import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react';
import { boxItems, type LangMode } from '@/data/chapters';
import { images } from '@/data/imageImports';
import BilingualToggle from './BilingualToggle';

const springConfig = { type: "spring" as const, duration: 0.4, bounce: 0 };

interface DigitalBoxProps {
  open: boolean;
  onClose: () => void;
  lang: LangMode;
  onLangChange: (lang: LangMode) => void;
}

export default function DigitalBox({ open, onClose, lang, onLangChange }: DigitalBoxProps) {
  const [selectedItem, setSelectedItem] = useState(0);
  const item = boxItems[selectedItem];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-foreground/40 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={springConfig}
            className="bg-background rounded-2xl w-full max-w-lg max-h-[85vh] overflow-y-auto"
            style={{ boxShadow: 'var(--shadow-card-hover)' }}
          >
            <div className="p-5">
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-xl font-medium">
                  {lang === 'ar' ? 'صندوق العجائب' : 'La Boîte à Merveilles'}
                </h2>
                <button onClick={onClose} className="p-1 rounded-full hover:bg-muted transition-colors">
                  <X size={20} className="text-muted-foreground" />
                </button>
              </div>

              <div className="flex justify-center mb-5">
                <BilingualToggle value={lang} onChange={onLangChange} />
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3 mb-6">
                {boxItems.map((bi, i) => (
                  <motion.button
                    key={bi.id}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    transition={springConfig}
                    onClick={() => setSelectedItem(i)}
                    className={`flex-1 aspect-square rounded-xl overflow-hidden transition-shadow ${
                      i === selectedItem ? 'ring-2 ring-primary shadow-card-hover' : 'shadow-card'
                    }`}
                    style={{ outline: '1px solid hsl(var(--border))', outlineOffset: '-1px' }}
                  >
                    <img src={images['ch3-box-treasures']} alt="" className="w-full h-full object-cover" />
                  </motion.button>
                ))}
              </div>

              {/* Item detail */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-center">
                  {lang === 'ar' ? item.name_ar : item.name_fr}
                  {lang === 'both' && <span className="block font-serif text-base mt-1" dir="rtl">{item.name_ar}</span>}
                </h3>

                <div className="grid gap-4 sm:grid-cols-2">
                  {/* Le Réel */}
                  <div className="rounded-xl p-4 bg-muted/50">
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">
                      {lang === 'ar' ? 'الواقع' : 'Le Réel'}
                    </p>
                    {(lang === 'fr' || lang === 'both') && (
                      <p className="font-narrative text-sm">{item.real_fr}</p>
                    )}
                    {(lang === 'ar' || lang === 'both') && (
                      <p className="font-narrative-ar text-sm mt-2">{item.real_ar}</p>
                    )}
                  </div>

                  {/* L'Imaginaire */}
                  <div className="rounded-xl p-4 bg-primary/5">
                    <p className="text-xs font-medium uppercase tracking-wider text-primary mb-2">
                      {lang === 'ar' ? 'الخيال' : "L'Imaginaire"}
                    </p>
                    {(lang === 'fr' || lang === 'both') && (
                      <p className="font-narrative text-sm">{item.imaginary_fr}</p>
                    )}
                    {(lang === 'ar' || lang === 'both') && (
                      <p className="font-narrative-ar text-sm mt-2">{item.imaginary_ar}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
