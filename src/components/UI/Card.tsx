import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  withShadow?: boolean;
  withBorder?: boolean;
  withHover?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  padding = 'md',
  withShadow = true,
  withBorder = false,
  withHover = false,
}) => {
  const baseClasses = 'bg-white rounded-lg overflow-hidden';
  
  const paddingClasses = {
    none: '',
    sm: 'p-3',
    md: 'p-5',
    lg: 'p-7',
  };
  
  const shadowClass = withShadow ? 'shadow-md' : '';
  const borderClass = withBorder ? 'border border-gray-200' : '';
  const hoverClass = withHover ? 'transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg' : '';
  
  return (
    <div className={`${baseClasses} ${paddingClasses[padding]} ${shadowClass} ${borderClass} ${hoverClass} ${className}`}>
      {children}
    </div>
  );
};

export default Card;