import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`} style={{ background: 'transparent' }}>
      <img 
        src="/vivid-narrative-uploads/Purple.png" 
        alt="Vivid Narrative Logo" 
        className="h-16 w-auto transition-smooth hover:medium"
        style={{ background: 'none', border: 'none', padding: 0 }}
      />
    </div>
  );
};