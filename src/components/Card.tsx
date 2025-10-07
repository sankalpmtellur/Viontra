import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false,
  glass = false
}) => {
  const baseStyles = 'rounded-2xl p-6 transition-all duration-300';
  const glassStyles = glass
    ? 'bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl'
    : 'bg-white shadow-lg';
  const hoverStyles = hover ? 'hover:shadow-2xl hover:transform hover:scale-105 cursor-pointer' : '';

  return (
    <div className={`${baseStyles} ${glassStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};
