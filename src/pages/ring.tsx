import React from 'react';

interface RingProps {
  isVisible: boolean;
  width: number;
  height: number;
  top: number;
  left: number;
  borderWidth: number;
  borderColor: string;
}

const Ring: React.FC<RingProps> = ({
  isVisible,
  width,
  height,
  top,
  left,
  borderWidth,
  borderColor,
}) => {
  if (!isVisible) return null; // Don't render if not visible

  return (
    <div
      style={{
        position: 'absolute',
        width: `${width}px`,
        height: `${height}px`,
        top: `${top}px`,
        left: `${left}px`,
        border: `${borderWidth}px solid ${borderColor}`,
        borderRadius: '50%', // Make it a circle
        pointerEvents: 'none', // Prevent interference with clicks
      }}
    />
  );
};

export default Ring;