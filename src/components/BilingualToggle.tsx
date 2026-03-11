import { motion } from 'framer-motion';
import type { LangMode } from '@/data/chapters';

const springConfig = { type: "spring" as const, duration: 0.4, bounce: 0 };

const options: { value: LangMode; label: string }[] = [
  { value: 'fr', label: 'Français' },
  { value: 'ar', label: 'العربية' },
  { value: 'both', label: 'FR + AR' },
];

interface BilingualToggleProps {
  value: LangMode;
  onChange: (mode: LangMode) => void;
}

export default function BilingualToggle({ value, onChange }: BilingualToggleProps) {
  return (
    <div className="inline-flex items-center gap-1 rounded-full bg-muted p-1">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          className="relative px-3 py-1.5 text-sm font-medium rounded-full transition-colors"
        >
          {value === opt.value && (
            <motion.div
              layoutId="toggle-active"
              className="absolute inset-0 rounded-full bg-primary"
              transition={springConfig}
            />
          )}
          <span className={`relative z-10 ${value === opt.value ? 'text-primary-foreground' : 'text-muted-foreground'}`}>
            {opt.label}
          </span>
        </button>
      ))}
    </div>
  );
}
