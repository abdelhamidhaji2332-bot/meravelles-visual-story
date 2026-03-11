import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { chapters } from '@/data/chapters';
import { images } from '@/data/imageImports';

const springConfig = { type: "spring" as const, duration: 0.4, bounce: 0 };

export default function ChapterSelect() {
  const navigate = useNavigate();

  return (
    <div className="min-h-svh px-4 py-8 max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={springConfig}
        className="mb-8"
      >
        <h1 className="text-2xl font-medium">Chapitres</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Chapitre 1–{chapters.length} / 12
        </p>
      </motion.div>

      <div className="flex flex-col gap-4">
        {chapters.map((ch, i) => (
          <motion.button
            key={ch.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springConfig, delay: i * 0.1 }}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            onClick={() => navigate(`/reader/${ch.id}`)}
            className="flex items-stretch gap-4 rounded-xl text-left shadow-card hover:shadow-card-hover transition-shadow overflow-hidden bg-card"
          >
            <div className="w-24 sm:w-32 flex-shrink-0">
              <img
                src={images[ch.coverImage]}
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex-1 py-4 pr-4">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
                Chapitre {ch.id}
              </p>
              <h2 className="text-base font-medium mb-1">{ch.title_fr}</h2>
              <p className="text-sm font-serif text-muted-foreground" dir="rtl">{ch.title_ar}</p>
              <p className="text-xs text-muted-foreground mt-2">
                {ch.panels.length} planches
              </p>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
