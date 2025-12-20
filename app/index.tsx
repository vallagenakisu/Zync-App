import { useEffect, useRef } from "react";
import { Animated, Image, Text, View } from "react-native";
import WelcomeCard from "../components/onboarding/welcome_card";


export default function Index() {
  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const startAnimation = () => {
      scrollX.setValue(-400); // Start from left (off-screen)
      Animated.timing(scrollX, {
        toValue: 400, // Move to right (off-screen)
        duration: 8000, // 8 seconds for full cycle
        useNativeDriver: true,
      }).start(() => {
        startAnimation(); // Restart animation when complete
      });
    };

    startAnimation();
  }, []);

  return (
    <View className="flex flex-col justify-start items-center h-full relative">
      <View className="flex flex-col gap-y-4 justify-center items-center my-20" style={{ zIndex: 10 }}>
        <Image style={{ width: 50, height: 50 }} source={require('../assets/icons/logo.png')} />
        <Text className="text-lg text-textsecondary">Hey it's</Text>
        <Image style={{ width: 124, height: 54 }} source={require('../assets/icons/Zync-heading.png')} />
      </View>
      <View className="flex overflow-hidden flex-row gap-x-4 h-96 w-96 justify-center items-center" >
        <Animated.View
          className="flex flex-row"
          style={{
            transform: [{ translateX: scrollX }],
            flexDirection: 'row',
            flexWrap: 'nowrap',
            gap: 20,
          }}
        >
          <View style={{ marginTop: 20 }}>
            <WelcomeCard
              title="News"
              imageSource={require('../assets/icons/newspaperandman.png')}
              rotation="-14.06deg"
            />
          </View>
          <WelcomeCard
            title="World"
            imageSource={require('../assets/icons/Image_Earth.png')}
            rotation="0.18deg"
          />
          <View style={{ marginTop: 20 }}>
            <WelcomeCard
              title="Connected"
              imageSource={require('../assets/icons/satelite.png')}
              rotation="-7.08deg"
            />
          </View>

          <WelcomeCard
            title="Curious"
            imageSource={require('../assets/icons/newspaper.png')}
            rotation="3.72deg"
          />
          {/* Duplicate cards for seamless infinite scroll */}
          <View style={{ marginTop: 20 }}>
            <WelcomeCard
              title="News"
              imageSource={require('../assets/icons/newspaperandman.png')}
              rotation="-14.06deg"
            />
          </View>
          <WelcomeCard
            title="World"
            imageSource={require('../assets/icons/Image_Earth.png')}
            rotation="0.18deg"
          />
          <View style={{ marginTop: 20 }}>
            <WelcomeCard
              title="Connected"
              imageSource={require('../assets/icons/satelite.png')}
              rotation="-7.08deg"
            />
          </View>
          <WelcomeCard
            title="Curious"
            imageSource={require('../assets/icons/newspaper.png')}
            rotation="3.72deg"
          />
        </Animated.View>

      </View>
    </View>
  );
}
