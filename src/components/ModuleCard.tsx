import React from 'react';
import { ModuleDefinition } from '../config/modulesConfig';
import { motion } from 'framer-motion';
import {
  BookPalmLeafIcon,
  InscriptionSteleIcon,
  ScannerSparklesIcon,
  TimelineGlyphIcon,
  ArchiveRibbonIcon
} from './ModuleIcons';
import { ArrowRight } from 'lucide-react';

interface ModuleCardProps {
  module: ModuleDefinition;
  isActive: boolean;
  onSelect: (slug: ModuleDefinition['slug']) => void;
  bgImage: string;
}

export const ModuleCard: React.FC<ModuleCardProps> = ({
  module,
  isActive,
  onSelect,
  bgImage
}) => {
  const renderIcon = () => {
    const iconProps = { className: "w-7 h-7" };
    switch (module.iconIdentifier) {
      case 'book_palm_leaf': return <BookPalmLeafIcon {...iconProps} />;
      case 'inscription_stele': return <InscriptionSteleIcon {...iconProps} />;
      case 'scanner_sparkles': return <ScannerSparklesIcon {...iconProps} />;
      case 'timeline_glyph': return <TimelineGlyphIcon {...iconProps} />;
      case 'archive_ribbon': return <ArchiveRibbonIcon {...iconProps} />;
      default: return <BookPalmLeafIcon {...iconProps} />;
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onSelect(module.slug)}
      className={`group relative text-left p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg ${
        isActive
          ? 'border-[#36D6F5] ring-2 ring-[#36D6F5]/50'
          : 'border-white/10 hover:border-[#00B887]'
      }`}
      style={{
        backgroundImage: `linear-gradient(rgba(16, 24, 45, 0.7), rgba(16, 24, 45, 0.9)), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '320px'
      }}
    >
      {/* Top Bar with Icon & Badge */}
      <div className="flex items-center justify-between w-full z-10">
        <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#48E5CF] shadow-sm">
          {renderIcon()}
        </div>

        <span className="text-[10px] font-mono px-3 py-1 rounded-full font-bold uppercase tracking-wide bg-[#FFD166]/20 text-[#FFD166] border border-[#FFD166]/30 backdrop-blur-sm">
          {module.badge}
        </span>
      </div>

      {/* Main Content */}
      <div className="space-y-2 z-10 mt-auto">
        <h3 className="font-tamil-serif font-bold text-xl text-white leading-tight">
          {module.titleTamil}
        </h3>
        <p className="text-xs text-[#EEE9FF]/80 leading-relaxed line-clamp-3">
          {module.descriptionTamil}
        </p>
      </div>

      {/* Action Footer */}
      <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold z-10">
        <span className="text-[#36D6F5] group-hover:text-[#48E5CF] transition-colors">
          ஆய்வுத் தளத்திற்குச் செல்க →
        </span>
        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-[#00B887] transition-colors">
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </motion.button>
  );
};
