import React from 'react';
import { View, Text } from 'react-native';

interface CardProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  shadow?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  title,
  subtitle,
  className = '',
  shadow = true
}) => {
  return (
    <View
      className={`
        bg-white
        rounded-lg
        p-4
        ${shadow ? 'shadow-sm' : ''}
        ${className}
      `}
    >
      {title && (
        <Text className="text-lg font-semibold text-gray-800 mb-2">
          {title}
        </Text>
      )}
      
      {subtitle && (
        <Text className="text-sm text-gray-600 mb-3">
          {subtitle}
        </Text>
      )}
      
      {children}
    </View>
  );
}; 