import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from "@/components/ui/Carousel";

const Search = () => {
  const { width, height } = useWindowDimensions();

  const paddingHorizontal = width < 380 ? 16 : 24;
  const paddingVertical = height < 700 ? 16 : 24;
  const marginTop = height < 700 ? 24 : 30;
  const fontSize = width < 380 ? 16 : 18;
  const buttonSize = width < 380 ? 12 : 14;

  return (
    <SafeAreaView style={{ paddingHorizontal, paddingVertical }}>
      <View className="mt-6 flex flex-row justify-between items-center">
        <TouchableOpacity>
          <Text className="text-xl font-semibold text-purple-500">
            Connect Wallet
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="text-xl font-semibold text-purple-500">
            Connect Wallet
          </Text>
        </TouchableOpacity>
      </View>
      <Text
        className="text-4xl text-black font-bold "
        style={{ marginTop: marginTop }}
      >
        Dashboard
      </Text>
      <Carousel />
      
      <ScrollView></ScrollView>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({});
