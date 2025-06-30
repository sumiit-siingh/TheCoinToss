import React from 'react';
import { Text, TouchableOpacity, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

type GradientButtonProps = {
    onPress: () => void;
    title: string;
    icon?: React.ComponentType<{ size?: number; color?: string; style?: any }>;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
};

export const GradientButton: React.FC<GradientButtonProps> = ({ onPress, title, icon: Icon, style, textStyle }) => (
    <TouchableOpacity onPress={onPress} style={style} className="rounded-[12px] overflow-hidden">
        <LinearGradient 
            colors={['#facc15', '#f97316']} 
            className="flex-row items-center justify-center py-4 px-6" 
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
        >
            {Icon && <Icon size={16} color="#111217" style={{ marginRight: 8 }} />}
            <Text className="text-slate-900 font-bold text-base" style={textStyle}>{title}</Text>
        </LinearGradient>
    </TouchableOpacity>
);