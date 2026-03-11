import { useParams, useNavigate } from 'react-router-dom';
import { useState, useCallback, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { chapters, type LangMode, type GlossaryTerm } from '@/data/chapters';
import { images } from '@/data/imageImports';
import ComicPanel from '@/components/ComicPanel';
import ReaderChrome from '@/components/ReaderChrome';
import VisualLexicon from '@/components/VisualLexicon';
import DigitalBox from '@/components/DigitalBox';

export default function Reader() {
  const { chapterId } = useParams();
  const navigate = useNavigate();
  const chapter = chapters.find(c => c.id === Number(chapterId));

  const [lang, setLang] = useState<LangMode>('fr');
  const [chromeVisible, setChromeVisible] = useState(true);
  const [activeTerm, setActiveTerm] = useState<GlossaryTerm | null>(null);
  const [boxOpen, setBoxOpen] = useState(false);
  const [currentPanel, setCurrentPanel] = useState(1);
  const hideTimer = useRef<ReturnType<typeof setTimeout>>();
  const containerRef = useRef<HTMLDivElement>(null);

  const resetChromeTimer = useCallback(() => {
    setChromeVisible(true);
    clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setChromeVisible(false), 4000);
  }, []);

  useEffect(() => {
    resetChromeTimer();
    return () => clearTimeout(hideTimer.current);
  }, [resetChromeTimer]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || !chapter) return;
    const handler = () => {
      const scrollPercentage = el.scrollTop / (el.scrollHeight - el.clientHeight);
      const idx = Math.round(scrollPercentage * (chapter.panels.length - 1)) + 1;
      setCurrentPanel(Math.min(idx, chapter.panels.length));
    };
    el.addEventListener('scroll', handler, { passive: true });
    return () => el.removeEventListener('scroll', handler);
  }, [chapter]);

  if (!chapter) {
    navigate('/chapters');
    return null;
  }

  const nextChapter = chapters.find(c => c.id === chapter.id + 1);

  return (
    <div
      ref={containerRef}
      className="h-svh overflow-y-auto bg-card"
      onClick={resetChromeTimer}
    >
      {/* Chapter title page */}
      <div className="relative w-full" style={{ minHeight: '50svh' }}>
        <img
          src={images[chapter.coverImage]}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/50" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6" style={{ minHeight: '50svh' }}>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground/70 mb-2">
            Chapitre {chapter.id}
          </p>
          <h1 className="text-3xl sm:text-4xl font-medium text-primary-foreground mb-2">
            {chapter.title_fr}
          </h1>
          <p className="text-xl font-serif text-primary-foreground/80" dir="rtl">
            {chapter.title_ar}
          </p>
        </div>
      </div>

      {/* Comic grid */}
      <div className="comic-grid max-w-3xl mx-auto px-2 py-3 sm:px-4 sm:py-4">
        {chapter.panels.map((panel) => (
          <ComicPanel
            key={panel.id}
            panel={panel}
            lang={lang}
            onTermClick={(term) => { setActiveTerm(term); setChromeVisible(false); }}
          />
        ))}
      </div>

      {/* Next chapter link */}
      <div className="max-w-3xl mx-auto px-4 py-8 flex flex-col items-center gap-4">
        {nextChapter ? (
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => { navigate(`/reader/${nextChapter.id}`); containerRef.current?.scrollTo(0, 0); }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium shadow-card hover:shadow-card-hover transition-shadow"
          >
            Chapitre suivant : {nextChapter.title_fr} →
          </motion.button>
        ) : (
          <div className="text-center">
            <p className="text-lg font-medium mb-2">Fin</p>
            <p className="text-muted-foreground text-sm font-serif" dir="rtl">النهاية</p>
          </div>
        )}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate('/chapters')}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Tous les chapitres
        </motion.button>
      </div>

      <ReaderChrome
        visible={chromeVisible && !activeTerm && !boxOpen}
        chapterTitle={lang === 'ar' ? chapter.title_ar : chapter.title_fr}
        currentPanel={currentPanel}
        totalPanels={chapter.panels.length}
        lang={lang}
        onLangChange={setLang}
        onBack={() => navigate('/chapters')}
        onBoxOpen={() => setBoxOpen(true)}
      />

      <VisualLexicon
        term={activeTerm}
        lang={lang}
        onClose={() => setActiveTerm(null)}
      />

      <DigitalBox
        open={boxOpen}
        onClose={() => setBoxOpen(false)}
        lang={lang}
        onLangChange={setLang}
      />
    </div>
  );
}
