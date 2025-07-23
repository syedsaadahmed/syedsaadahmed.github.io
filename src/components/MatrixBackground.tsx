import { useEffect, useRef } from 'react';

const MatrixBackground = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    
    const createMatrixChar = () => {
      const char = document.createElement('div');
      char.className = 'matrix-char';
      char.textContent = chars[Math.floor(Math.random() * chars.length)];
      char.style.left = Math.random() * 100 + '%';
      char.style.fontSize = (Math.random() * 8 + 10) + 'px';
      char.style.animationDuration = (Math.random() * 3 + 2) + 's';
      char.style.animationDelay = Math.random() * 2 + 's';
      
      canvas.appendChild(char);
      
      setTimeout(() => {
        if (char.parentNode) {
          char.parentNode.removeChild(char);
        }
      }, 5000);
    };

    const interval = setInterval(createMatrixChar, 200);

    return () => {
      clearInterval(interval);
      if (canvas) {
        canvas.innerHTML = '';
      }
    };
  }, []);

  return <div ref={canvasRef} className="matrix-bg" />;
};

export default MatrixBackground;