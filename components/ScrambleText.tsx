import React, { useEffect, useState, useRef } from 'react';

interface ScrambleTextProps {
  text: string;
  className?: string;
  speed?: number;
  trigger?: boolean;
}

const CHARS = "!<>-_\\/[]{}—=+*^?#________";

const ScrambleText: React.FC<ScrambleTextProps> = ({ 
  text, 
  className = "", 
  speed = 50,
  trigger = true 
}) => {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (!trigger) return;

    let iteration = 0;
    
    clearInterval(intervalRef.current as number);
    
    intervalRef.current = window.setInterval(() => {
      setDisplayText(prev => 
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(intervalRef.current as number);
      }

      iteration += 1 / 3;
    }, speed);

    return () => clearInterval(intervalRef.current as number);
  }, [text, speed, trigger]);

  return <span className={className}>{displayText}</span>;
};

export default ScrambleText;