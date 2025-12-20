import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, ViewStyle } from 'react-native';

interface GradientBackgroundProps {
  children?: React.ReactNode;
  style?: ViewStyle;
  className?: string;
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({ 
  children, 
  style, 
  className = "" 
}) => {
  // Scale factor to fit 384x384 container (from 600x620 original)
  const scaleX = 384 / 600;
  const scaleY = 384 / 620;
  
  return (
    <View 
      className={`relative bg-white ${className}`}
      style={style}
    >
      {/* Background gradient vectors exactly as in Figma */}
      <View className="absolute inset-0 overflow-hidden">
        
        {/* Vector 1054 - Pink to Yellow gradient */}
        <LinearGradient
          colors={['#FFA1BC', '#FFF47C']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{
            position: 'absolute',
            width: 600 * scaleX,
            height: 501.78 * scaleY,
            left: 0 * scaleX,
            top: 97.24 * scaleY,
            borderRadius: 200,
            // blur would require react-native-blur or similar
          }}
        />
        
        {/* Vector 1055 - Pink solid */}
        <View
          style={{
            position: 'absolute',
            width: 352.03 * scaleX,
            height: 247.97 * scaleY,
            left: 107.94 * scaleX,
            top: 145.87 * scaleY,
            backgroundColor: '#FF89C8',
            borderRadius: 150,
          }}
        />
        
        {/* Vector 1056 - Purple to Blue gradient */}
        <LinearGradient
          colors={['#8A38F5', '#02BAF6']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{
            position: 'absolute',
            width: 459.97 * scaleX,
            height: 172.12 * scaleY,
            left: 67.1 * scaleX,
            top: 0 * scaleY,
            borderRadius: 100,
          }}
        />
        
        {/* Vector 1057 - Lavender solid */}
        <View
          style={{
            position: 'absolute',
            width: 347.16 * scaleX,
            height: 274.23 * scaleY,
            left: 141.98 * scaleX,
            top: 86.55 * scaleY,
            backgroundColor: '#DAD3FE',
            borderRadius: 120,
          }}
        />
        
        {/* Vector 1058 - Purple to Light Purple gradient */}
        <LinearGradient
          colors={['#8A38F5', '#E5D0FF']}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={{
            position: 'absolute',
            width: 459 * scaleX,
            height: 149.76 * scaleY,
            left: 64.18 * scaleX,
            top: 471.64 * scaleY,
            borderRadius: 80,
          }}
        />
        
        {/* Radial gradient overlay */}
        <LinearGradient
          colors={['transparent', '#FFFFFF']}
          start={{ x: 0.5, y: 0.5 }}
          end={{ x: 1, y: 1 }}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            opacity: 0.9,
          }}
        />
      </View>
      
      {/* Border circles with glow effects */}
      <View className="absolute inset-0">
        <View 
          style={{
            position: 'absolute',
            width: 400 * scaleX,
            height: 400 * scaleY,
            left: '50%',
            top: '50%',
            marginLeft: (-200 * scaleX),
            marginTop: (-200 * scaleY),
            borderWidth: 1,
            borderColor: 'rgba(255, 255, 255, 0.2)',
            borderRadius: 200 * scaleX,
          }}
        />
        
        <View 
          style={{
            position: 'absolute',
            width: 300 * scaleX,
            height: 300 * scaleY,
            left: '50%',
            top: '50%',
            marginLeft: (-150 * scaleX),
            marginTop: (-150 * scaleY),
            borderWidth: 1.2,
            borderColor: 'rgba(255, 255, 255, 0.24)',
            borderRadius: 150 * scaleX,
          }}
        />
        
        <View 
          style={{
            position: 'absolute',
            width: 200 * scaleX,
            height: 200 * scaleY,
            left: '50%',
            top: '50%',
            marginLeft: (-100 * scaleX),
            marginTop: (-100 * scaleY),
            borderWidth: 1.4,
            borderColor: 'rgba(255, 255, 255, 0.28)',
            borderRadius: 100 * scaleX,
          }}
        />
      </View>
      
      {/* Content */}
      <View style={{ zIndex: 10, position: 'relative' }}>
        {children}
      </View>
    </View>
  );
};

export default GradientBackground;