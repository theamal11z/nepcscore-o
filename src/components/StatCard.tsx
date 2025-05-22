import React, { ReactNode } from 'react';
import Card from './UI/Card';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  change?: {
    value: number;
    trend: 'up' | 'down' | 'neutral';
  };
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  change,
  className = '',
}) => {
  const getTrendColor = () => {
    if (!change) return '';
    
    switch (change.trend) {
      case 'up':
        return 'text-green-600';
      case 'down':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };
  
  const getTrendIcon = () => {
    if (!change) return null;
    
    switch (change.trend) {
      case 'up':
        return '↑';
      case 'down':
        return '↓';
      default:
        return '→';
    }
  };
  
  return (
    <Card className={`${className}`}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-600">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
        </div>
        <div className="p-2 bg-[#DC143C] bg-opacity-10 rounded-md text-[#DC143C]">
          {icon}
        </div>
      </div>
      
      {change && (
        <div className={`mt-3 flex items-center text-sm ${getTrendColor()}`}>
          <span>{getTrendIcon()}</span>
          <span className="ml-1">{Math.abs(change.value)}%</span>
          <span className="ml-1 text-gray-500">from last month</span>
        </div>
      )}
    </Card>
  );
};

export default StatCard;