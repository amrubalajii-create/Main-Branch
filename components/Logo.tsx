import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Yellow Bracket Shape */}
      <path 
        fill="#FFC107" 
        d="M95 15 L15 15 L15 90 L40 65 H25 V25 H87 L95 15Z" 
      />
      
      {/* HRB Text */}
      <text 
        x="60" 
        y="65" 
        fontFamily="Inter, Arial, sans-serif" 
        fontWeight="900" 
        fontSize="38" 
        fill="#003366" 
        textAnchor="middle"
        letterSpacing="-1"
      >
        HRB
      </text>
    </svg>
  );
};
