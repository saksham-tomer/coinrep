import React, { useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

// Sample data - you can replace this with your actual data source
const poolData = [
  {
    id: 1,
    name: "BTC/USDC",
    description: "Description for Pool 1",
    image: "https://example.com/pool1.jpg",
    tvl: "12002.12312",
    prevTvl: "8899.12312",
  },
  {
    id: 2,
    name: "ETH/USDT",
    description: "Description for Pool 2",
    image: "https://example.com/pool2.jpg",
    tvl: "1000.12312",
    prevTvl: "880.12312",
  },
];

const ExplorePools = () => {
  // Add debug logging to verify data
  useEffect(() => {
    console.log("ExplorePools mounted, data:", poolData);
  }, []);

  // Check if data is empty
  if (!poolData || poolData.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No pools available</Text>
      </View>
    );
  }

  return (
    <View style={styles.mainContainer}>
      {/* Debug text to verify component is rendering */}
      <Text style={styles.debugText}>Total pools: {poolData.length}</Text>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {poolData.map((pool) => (
          <TouchableOpacity
            key={pool.id.toString()}
            style={styles.poolCard}
            onPress={() => console.log(`Selected pool: ${pool.name}`)}
          >
            <Text style={styles.poolName}>{pool.name}</Text>
            <Text style={styles.poolDescription}>{pool.description}</Text>
            <View style={styles.dataRow}>
              <Text style={styles.dataLabel}>TVL:</Text>
              <Text style={styles.dataValue}>${pool.tvl}</Text>
            </View>
            <View style={styles.dataRow}>
              <Text style={styles.dataLabel}>Previous:</Text>
              <Text style={styles.dataValue}>${pool.prevTvl}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  debugText: {
    padding: 8,
    backgroundColor: "#e0e0e0",
    color: "#333",
    fontSize: 12,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  emptyText: {
    fontSize: 16,
    color: "#666",
  },
  poolCard: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  poolName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  poolDescription: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
    marginBottom: 8,
  },
  dataRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  dataLabel: {
    fontSize: 14,
    color: "#666",
    marginRight: 4,
    width: 70,
  },
  dataValue: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
  },
});

export default ExplorePools;
