import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  center = false,
  light = false 
}) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      className={`mb-12 ${center ? 'text-center' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
    >
      {subtitle && (
        <p className={`font-sans text-sm md:text-base uppercase tracking-wider mb-2 ${light ? 'text-gold-light' : 'text-gold'}`}>
          {subtitle}
        </p>
      )}
      <h2 className={`font-script text-4xl md:text-5xl lg:text-6xl ${light ? 'text-white' : 'text-noir'} relative inline-block`}>
        {title}
        <span className={`absolute -bottom-3 left-0 w-1/2 h-[2px] ${light ? 'bg-gold-light' : 'bg-gold'}`}></span>
      </h2>
    </motion.div>
  );
};

export default SectionTitle;