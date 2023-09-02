import { View, Text, StyleSheet } from "react-native";

export default function List({ data }) {
  return data.map((dataPoint) => (
    <View key={dataPoint} style={styles.listItem}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
}

const styles = StyleSheet.create({
    listItem: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginHorizontal: 13,
        marginVertical: 5,
        borderRadius: 9,
        backgroundColor: "#847ede",
    },
    itemText: {
        color: "white",
        textAlign: "center",
    }
});