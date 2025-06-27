import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  className = ''
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-blue-600';
      case 'secondary':
        return 'bg-gray-600';
      case 'outline':
        return 'bg-transparent border border-blue-600';
      default:
        return 'bg-blue-600';
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return 'px-4 py-2';
      case 'medium':
        return 'px-6 py-3';
      case 'large':
        return 'px-8 py-4';
      default:
        return 'px-6 py-3';
    }
  };

  const getTextColor = () => {
    switch (variant) {
      case 'outline':
        return 'text-blue-600';
      default:
        return 'text-white';
    }
  };

  return (
    <TouchableOpacity
      className={`
        ${getVariantStyles()}
        ${getSizeStyles()}
        rounded-lg
        items-center
        justify-center
        ${disabled ? 'opacity-50' : ''}
        ${className}
      `}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'outline' ? '#2563eb' : '#ffffff'} />
      ) : (
        <Text className={`font-semibold ${getTextColor()}`}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}; 