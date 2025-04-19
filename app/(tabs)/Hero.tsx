import { Text, View, Image, TouchableOpacity, Dimensions, useWindowDimensions } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants/images'
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withSpring, 
  withDelay, 
  withTiming,
  Easing
} from 'react-native-reanimated'

const Hero = () => {
  const { height, width } = useWindowDimensions();
  
  const imageOpacity = useSharedValue(0);
  const titleOpacity = useSharedValue(0);
  const descriptionOpacity = useSharedValue(0);
  const buttonOpacity = useSharedValue(0);
  const buttonScale = useSharedValue(0.8);
  
  useEffect(() => {
    imageOpacity.value = withDelay(100, withTiming(1, { duration: 800 }));
    titleOpacity.value = withDelay(500, withTiming(1, { duration: 800 }));
    descriptionOpacity.value = withDelay(900, withTiming(1, { duration: 800 }));
    buttonOpacity.value = withDelay(1300, withTiming(1, { duration: 800 }));
    buttonScale.value = withDelay(1300, withSpring(1));
  }, []);
  
  const imageAnimatedStyle = useAnimatedStyle(() => ({
    opacity: imageOpacity.value,
    transform: [{ scale: imageOpacity.value }]
  }));
  
  const titleAnimatedStyle = useAnimatedStyle(() => ({
    opacity: titleOpacity.value,
    transform: [{ translateY: withTiming(titleOpacity.value * 0, { duration: 300 }) }]
  }));
  
  const descriptionAnimatedStyle = useAnimatedStyle(() => ({
    opacity: descriptionOpacity.value,
    transform: [{ translateY: withTiming(descriptionOpacity.value * 0, { duration: 300 }) }]
  }));
  
  const buttonAnimatedStyle = useAnimatedStyle(() => ({
    opacity: buttonOpacity.value,
    transform: [{ scale: buttonScale.value }]
  }));
  
  const handleGetStarted = () => {
    // Handle the get started action here
    console.log('Get Started pressed!');
  };

  const imageSize = Math.min(width * 0.45, 250); 
  const titleSize = width < 380 ? 'text-4xl' : 'text-5xl';
  const descriptionSize = width < 380 ? 'text-xl' : 'text-2xl';
  const buttonTextSize = width < 380 ? 'text-3xl' : 'text-4xl';
  const buttonPadding = width < 380 ? 'py-3' : 'py-4';
  const containerPadding = width < 380 ? 'px-6' : 'px-10';

  return (
    <SafeAreaView className={`${containerPadding} flex items-center justify-center min-h-screen`}>
      <View className="items-center flex flex-col">
        <Animated.View style={imageAnimatedStyle}>
          <Image
            source={images.wallet}
            className="object-cover shadow-md"
            style={{ width: imageSize, height: imageSize }}
          />
        </Animated.View>
        
        <Animated.Text style={titleAnimatedStyle} className={`${titleSize} text-black font-black shadow-lg mt-4`}>
          Coinico Wallet
        </Animated.Text>
      </View>
      
      <Animated.View style={descriptionAnimatedStyle} className="flex items-center justify-center mt-8">
        <Text className={`text-center ${descriptionSize} font-semibold text-gray-500`}>
          The best crypto wallet app of this century
        </Text>
      </Animated.View>
      
      <Animated.View style={buttonAnimatedStyle} className="w-full mt-16">
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={handleGetStarted}
          className={`bg-indigo-500 rounded-3xl flex items-center justify-center px-6 ${buttonPadding} w-full`}
        >
          <Text className={`font-bold text-white ${buttonTextSize}`}>Get Started</Text>
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  );
};

export default Hero;