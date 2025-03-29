import React from 'react';

interface RingProps {
  isSelected: boolean;
  buttonSize: number;
  description?: string;
}

const Ring: React.FC<RingProps> = ({ isSelected, buttonSize, description }) => {
  // Calculate ring sizes based on button size
  const outerSize = buttonSize * 3.3; // 408.307px for 124px button
  const innerSize = buttonSize * 2.06; // 255.636px for 124px button

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
          
          {/* Description Text */}
          {description && (
            <div 
              className="absolute text-white text-sm sm:text-base md:text-lg font-medium whitespace-nowrap"
              style={{
                left: `-${outerSize * 0.7}px`,
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