import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { images } from '@/data/imageImports';

const springConfig = { type: "spring" as const, duration: 0.4, bounce: 0 };

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-svh flex flex-col items-center justify-center px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...springConfig, delay: 0.1 }}
        className="w-full max-w-sm"
      >
        <div
          className="w-full aspect-[2/3] rounded-2xl overflow-hidden mb-8 shadow-card-hover"
          style={{ outline: '1px solid hsl(var(--border))', outlineOffset: '-1px' }}
        >
          <img
            src={images['hero-fez-alley']}
            alt="Les ruelles de Fès"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...springConfig, delay: 0.3 }}
        className="text-center max-w-md"
      >
        <h1 className="text-3xl sm:text-4xl font-medium mb-3 tracking-tight">
          La Boîte à Merveilles
        </h1>
        <p className="text-muted-foreground text-lg mb-1 font-serif">صندوق العجائب</p>
        <p className="text-muted-foreground text-sm mb-8">
          Redécouvrez le classique. أعد اكتشاف الرواية الكلاسيكية.
        </p>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={springConfig}
          onClick={() => navigate('/chapters')}
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium text-base shadow-card hover:shadow-card-hover transition-shadow"
        >
          Commencer la lecture
        </motion.button>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-12 text-xs text-muted-foreground text-center"
      >
        D'après le roman d'Ahmed Sefrioui · Roman graphique bilingue
      </motion.p>
    </div>
  );
}
