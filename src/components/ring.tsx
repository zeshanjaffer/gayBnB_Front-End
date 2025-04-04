import React from 'react';

interface RingProps {
  isSelected: boolean;
  buttonSize: number;
  description?: string;
}

const Ring: React.FC<RingProps> = ({ isSelected, buttonSize, description }) => {
  // Only change: Added mobile detection
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
  
  // Only change: Adjusted multipliers for mobile
  const outerSize = buttonSize * (isMobile ? 2.5 : 3.3);
  const innerSize = buttonSize * (isMobile ? 1.6 : 2.06);

  return (
    <>
      {isSelected && (
        <div className="absolute inset-0 pointer-events-none">
          {/* Outer Ring */}
          <div 
            className="absolute border-[1.26px] border-white/40 rounded-full"
            style={{
              width: `${outerSize}px`,
              height: `${outerSize}px`,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
          
          {/* Inner Ring */}
          <div 
            className="absolute border-[1.26px] border-white/40 rounded-full"
            style={{
              width: `${innerSize}px`,
              height: `${innerSize}px`,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
          
          {/* Description Text - UNCHANGED */}
          {description && (
            <div 
              className="absolute text-white text-sm sm:text-base md:text-lg font-medium whitespace-nowrap"
              style={{
                fontFamily: 'Nunito Sans',
                fontWeight: 800,
                fontSize: '21.3px',
                lineHeight: '124%',
                letterSpacing: '0%',
                left: `-${outerSize * 1.0}px`,
                top: '50%',
                transform: 'translateY(-50%)',
                maxWidth: `${outerSize * 0.6}px`,
                textShadow: '0 0 4px rgba(0,0,0,0.5)'
              }}
            >
              {description}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Ring;