import React from 'react';
import { Award } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center h-10 w-10">
      <Award size={28} className="text-gold absolute" />
    </div>
  );
};

export default Logo;