import { useParams, useNavigate } from 'react-router-dom';
import { useState, useCallback, useRef, useEffect } from 'react';
import { chapters, type LangMode, type GlossaryTerm } from '@/data/chapters';
import ReaderPanel from '@/components/ReaderPanel';
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
    hideTimer.current = setTimeout(() => setChromeVisible(false), 3000);
  }, []);

  useEffect(() => {
    resetChromeTimer();
    return () => clearTimeout(hideTimer.current);
  }, [resetChromeTimer]);

  // Track scroll for current panel
  useEffect(() => {
    const el = containerRef.current;
    if (!el || !chapter) return;
    const handler = () => {
      const panelHeight = el.scrollHeight / chapter.panels.length;
      const idx = Math.round(el.scrollTop / panelHeight) + 1;
      setCurrentPanel(Math.min(idx, chapter.panels.length));
    };
    el.addEventListener('scroll', handler, { passive: true });
    return () => el.removeEventListener('scroll', handler);
  }, [chapter]);

  if (!chapter) {
    navigate('/chapters');
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="scroll-snap-container"
      onClick={resetChromeTimer}
    >
      {chapter.panels.map(panel => (
        <ReaderPanel
          key={panel.id}
          panel={panel}
          lang={lang}
          onTermClick={(term) => { setActiveTerm(term); setChromeVisible(false); }}
        />
      ))}

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
