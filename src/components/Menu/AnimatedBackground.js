import React, { useEffect } from 'react';
import paint from '../../utils/paint';

function AnimatedBackground() {
  const { downlink } = window.navigator.connection;
  useEffect(() => {
    if (downlink < 1.3) return;
    paint();
  }, []);
  return (
    <canvas className="animated-background" />
  );
}

export default AnimatedBackground;
