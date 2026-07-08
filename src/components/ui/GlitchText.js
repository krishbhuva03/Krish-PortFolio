import React from 'react';
import './GlitchText.css';

const GlitchText = ({
  children,
  speed = 0.5,
  enableShadows = true,
  enableOnHover = false,
  className = ''
}) => {
  const inlineStyles = {
    '--after-duration': `${speed * 3}s`,
    '--before-duration': `${speed * 2}s`,
    '--after-shadow': enableShadows ? '-3px 0 #c770f0' : 'none',
    '--before-shadow': enableShadows ? '3px 0 #00f0ff' : 'none'
  };

  const baseClasses = 'glitch-text';
  const modeClass = enableOnHover ? 'glitch-hover' : 'glitch-active';
  const combinedClasses = `${baseClasses} ${modeClass} ${className}`;

  return (
    <div style={inlineStyles} data-text={children} className={combinedClasses}>
      {children}
    </div>
  );
};

export default GlitchText;
