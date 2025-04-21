import {
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
import SelectSlider from "@/components/ui/SelectSlider";
import ExplorePools from "@/components/ui/ExplorePools";

const Search = () => {
  const { width, height } = useWindowDimensions();

  const paddingHorizontal = width < 380 ? 16 : 24;
  const paddingVertical = height < 700 ? 16 : 24;
  const marginTop = height < 700 ? 24 : 30;
  const fontSize = width < 380 ? 16 : 18;
  const buttonSize = width < 380 ? 12 : 14;

  return (
    <SafeAreaView
      style={[styles.container, { paddingHorizontal, paddingVertical }]}
    >
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.connectWalletText}>Connect Wallet</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.connectWalletText}>Connect Wallet</Text>
        </TouchableOpacity>
      </View>

      <Text style={[styles.dashboardTitle, { marginTop }]}>Dashboard</Text>

      <Carousel />

      <View style={styles.sliderContainer}>
        <SelectSlider />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.poolsContainer}>
          <ExplorePools />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    marginTop: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  connectWalletText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#8b5cf6",
  },
  dashboardTitle: {
    fontSize: 36,
    color: "#000",
    fontWeight: "bold",
  },
  sliderContainer: {
    marginVertical: 16,
    height: 60,
    marginBottom: 32,
  },
  poolsContainer: {
    flex: 1,
    marginBottom: 32,
  },
});
