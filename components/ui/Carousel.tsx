import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  GestureResponderEvent,
} from "react-native";
import React from "react";
import { images } from "@/constants/images";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const imagesArray = [
  {
    src: images.coin,
    url: "https://example.com/home.jpg",
  },
  {
    src: images.wallet,
    url: "https://example.com/wallet.png",
  },
  {
    src: images.logo,
    url: "https://example.com/favicon.png",
  },
  {
    src: images.hero,
    url: "https://example.com/coin.png",
  },
  {
    src: images.home,
    url: "https://example.com/react-logo.png",
  },
];

const Carousel = () => {
  const [currentImage, setCurrentImage] = React.useState(0);

  const imageShare = useSharedValue(0);

  const imageAnimatedStyle = useAnimatedStyle(() => ({
    opacity: 1,
    transform: [
      {
        translateX: withTiming(imageShare.value, { duration: 300 }),
      },
    ],
  }));

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) =>
        prevIndex === imagesArray.length - 1 ? 0 : prevIndex + 1
      );
      imageShare.value = -20;
      setTimeout(() => {
        imageShare.value = 0;
      }, 50);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  function handleNext(idx: number) {
    setCurrentImage(idx);
    imageShare.value = idx > currentImage ? 20 : -20;
    setTimeout(() => {
      imageShare.value = 0;
    }, 50);
  }

  return (
    <View>
      <View style={styles.carouselContainer}>
        <Animated.Image
          source={imagesArray[currentImage].src}
          style={[styles.image, imageAnimatedStyle]}
          resizeMode="contain"
        />
      </View>
      <View style={styles.dotsContainer}>
        {imagesArray.map((_, idx) => (
          <TouchableHighlight
            key={idx}
            onPress={() => handleNext(idx)}
            underlayColor="transparent"
          >
            <View
              style={[
                styles.dot,
                idx === currentImage ? styles.activeDot : styles.inactiveDot,
              ]}
            />
          </TouchableHighlight>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    backgroundColor: "#e5e7eb",
    borderRadius: 16,
    alignItems: "center",
    marginTop: 16,
  },
  image: {
    width: "100%",
    height: 200,
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 6,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#c55bc7",
    width: 20,
  },
  inactiveDot: {
    backgroundColor: "#9ca3af",
  },
});

export default Carousel;
