import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, BookOpen, Box } from 'lucide-react';
import BilingualToggle from './BilingualToggle';
import type { LangMode } from '@/data/chapters';

const springConfig = { type: "spring" as const, duration: 0.4, bounce: 0 };

interface ReaderChromeProps {
  visible: boolean;
  chapterTitle: string;
  currentPanel: number;
  totalPanels: number;
  lang: LangMode;
  onLangChange: (mode: LangMode) => void;
  onBack: () => void;
  onBoxOpen: () => void;
}

export default function ReaderChrome({
  visible,
  chapterTitle,
  currentPanel,
  totalPanels,
  lang,
  onLangChange,
  onBack,
  onBoxOpen,
}: ReaderChromeProps) {
  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Header */}
          <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={springConfig}
            className="fixed top-0 left-0 right-0 z-30 bg-background/90 backdrop-blur-sm"
            style={{ padding: '12px 16px' }}
          >
            <div className="flex items-center justify-between max-w-2xl mx-auto">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onBack}
                className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ChevronLeft size={20} />
                <span className="text-sm font-medium">Chapitres</span>
              </motion.button>
              <span className="text-sm text-muted-foreground font-medium">{chapterTitle}</span>
            </div>
          </motion.header>

          {/* Footer */}
          <motion.footer
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={springConfig}
            className="fixed bottom-0 left-0 right-0 z-30 bg-background/90 backdrop-blur-sm"
            style={{ padding: '12px 16px' }}
          >
            <div className="flex items-center justify-between max-w-2xl mx-auto">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onBoxOpen}
                className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-primary"
              >
                <Box size={20} />
              </motion.button>

              <BilingualToggle value={lang} onChange={onLangChange} />

              <span className="text-sm text-muted-foreground font-medium tabular-nums">
                {currentPanel} / {totalPanels}
              </span>
            </div>

            {/* Progress bar */}
            <div className="max-w-2xl mx-auto mt-2">
              <div className="h-0.5 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary rounded-full"
                  animate={{ width: `${(currentPanel / totalPanels) * 100}%` }}
                  transition={springConfig}
                />
              </div>
            </div>
          </motion.footer>
        </>
      )}
    </AnimatePresence>
  );
}
