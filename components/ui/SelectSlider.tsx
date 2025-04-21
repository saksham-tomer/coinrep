import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useState } from "react";

const SliderValues: string[] = [
  "Favourite",
  "Trending",
  "Popular",
  "NewListings",
  "MostActive",
  "MostGained",
  "MostLost",
];

const SelectSlider = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <View style={styles.wrapper}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        {SliderValues.map((item, idx) => {
          const isSelected = idx === selectedIndex;
          return (
            <TouchableOpacity
              key={idx}
              style={[
                styles.item,
                isSelected ? styles.selectedItem : null,
                { marginRight: idx === SliderValues.length - 1 ? 0 : 10 },
              ]}
              onPress={() => handleSelect(idx)}
            >
              <Text
                style={[
                  styles.itemText,
                  isSelected ? styles.selectedItemText : null,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default SelectSlider;

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: 80,
  },
  container: {
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  item: {
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
  },
  selectedItem: {
    backgroundColor: "#8b5cf6",
  },
  itemText: {
    fontSize: 16,
    fontWeight: "600",
  },
  selectedItemText: {
    color: "white",
  },
});
