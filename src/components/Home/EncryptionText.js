import React, { useEffect, useState, useRef } from 'react';

const EncryptionText = ({ text, speed = 50, className = "" }) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()!';
  
  // Helper function to scramble text
  const scrambleText = (originalText) => {
    return originalText.split('').map(char => {
      if (char === ' ' || char === '\n') return char;
      return characters[Math.floor(Math.random() * characters.length)];
    }).join('');
  };

  const [displayText, setDisplayText] = useState(() => scrambleText(text));
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [isReady, setIsReady] = useState(false);

  // Start animation after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
      setCurrentIndex(0);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isReady) return;

    if (currentIndex >= 0 && currentIndex < text.length) {
      let iterations = 0;
      const maxIterations = 8;

      const interval = setInterval(() => {
        setDisplayText(() => {
          const chars = text.split('');
          return chars
            .map((char, index) => {
              // Already decrypted characters
              if (index < currentIndex) {
                return char;
              }
              // Currently decrypting character
              if (index === currentIndex) {
                if (iterations < maxIterations) {
                  // Keep scrambling
                  if (char === ' ' || char === '\n') return char;
                  return characters[Math.floor(Math.random() * characters.length)];
                }
                // Reveal the actual character
                return char;
              }
              // Future characters - keep scrambled
              if (char === ' ' || char === '\n') return char;
              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join('');
        });

        iterations++;

        if (iterations >= maxIterations) {
          clearInterval(interval);
          setCurrentIndex(prev => prev + 1);
        }
      }, speed);

      return () => clearInterval(interval);
    } else if (currentIndex >= text.length) {
      setDisplayText(text);
    }
  }, [currentIndex, text, speed, isReady]);

  return <span className={className}>{displayText}</span>;
};

export default EncryptionText;
