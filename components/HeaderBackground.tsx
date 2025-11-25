import React from 'react';

const HeaderBackground: React.FC = () => {
  /**
   * Configuration for the Flowing Lines
   * 
   * Updates:
   * - Lines now move strictly Left -> Right
   * - Reduced count for cleaner look
   * - Thicker lines (h-[5px])
   * - Diagonal movement types included
   */
  const lines = [
    // Top Section
    { top: '8%', color: 'via-cyan-400', duration: 25, opacity: 0.7, movement: 'flat' },
    { top: '15%', color: 'via-teal-300', duration: 32, opacity: 0.6, movement: 'up' },
    { top: '25%', color: 'via-blue-500', duration: 28, opacity: 0.5, movement: 'down' },
    
    // Middle Section
    { top: '38%', color: 'via-indigo-400', duration: 35, opacity: 0.6, movement: 'flat' },
    { top: '45%', color: 'via-amber-300', duration: 40, opacity: 0.8, movement: 'up' }, // Gold accent
    { top: '55%', color: 'via-purple-400', duration: 38, opacity: 0.5, movement: 'down' },
    
    // Bottom Section
    { top: '68%', color: 'via-teal-400', duration: 30, opacity: 0.7, movement: 'flat' },
    { top: '78%', color: 'via-orange-400', duration: 34, opacity: 0.6, movement: 'up' },
    { top: '88%', color: 'via-sky-500', duration: 33, opacity: 0.5, movement: 'down' },
    { top: '95%', color: 'via-emerald-300', duration: 28, opacity: 0.6, movement: 'flat' },
  ];

  const getAnimationClass = (movement: string) => {
    switch (movement) {
      case 'up': return 'animate-flow-right-up';
      case 'down': return 'animate-flow-right-down';
      default: return 'animate-flow-right';
    }
  };

  const getRotation = (movement: string) => {
     // Slight rotation to match the movement direction visually
     switch (movement) {
        case 'up': return 'rotate(-1deg)'; // Points slightly up-right
        case 'down': return 'rotate(1deg)'; // Points slightly down-right
        default: return 'rotate(0deg)';
     }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {/* 
        Base Gradient Background 
      */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a262a] via-[#0E3338] to-[#092529]"></div>

      {/* 
        Lines Container
      */}
      <div className="absolute inset-0">
        {lines.map((line, i) => {
            const animationClass = getAnimationClass(line.movement || 'flat');
            const rotation = getRotation(line.movement || 'flat');
            
            return (
              <div 
                  key={i}
                  className="absolute left-0 w-full"
                  style={{ 
                      top: line.top, 
                      opacity: line.opacity,
                      transform: rotation,
                  }}
              >
                  {/* 
                     LINE A: Primary flow
                     Starts entering from left.
                  */}
                  <div 
                      className={`absolute top-0 left-0 w-[150%] h-[5px] bg-gradient-to-r from-transparent ${line.color} to-transparent ${animationClass}`} 
                      style={{ 
                          animationDuration: `${line.duration}s`, 
                          animationDelay: `-${line.duration * 0.5}s` 
                      }} 
                  ></div>

                   {/* 
                     LINE B: Loop connector
                     Ensures continuous stream.
                  */}
                  <div 
                      className={`absolute top-0 left-0 w-[150%] h-[5px] bg-gradient-to-r from-transparent ${line.color} to-transparent ${animationClass}`} 
                      style={{ 
                          animationDuration: `${line.duration}s`, 
                          animationDelay: `0s` 
                      }} 
                  ></div>
              </div>
            );
        })}
      </div>
      
      {/* Vignette Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#092529_100%)] opacity-50"></div>
    </div>
  );
};

export default HeaderBackground;