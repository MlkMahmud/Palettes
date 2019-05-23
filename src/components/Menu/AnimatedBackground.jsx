import React, { useEffect } from 'react';
import paint from '../../utils/paint';

function AnimatedBackground() {
  useEffect(() => paint(), []);
  return (
    <canvas className="animated-background" />
  );
}

export default AnimatedBackground;
