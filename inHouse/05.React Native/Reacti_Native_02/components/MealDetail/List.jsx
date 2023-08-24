import { View, Text, StyleSheet } from "react-native";

export default function List({ data }) {
  return data.map((dataPoint) => (
    <View key={dataPoint} style={styles.listItem}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
}

const styles = StyleSheet.create({
    listItem : {
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 7,
        backgroundColor: "#e2b497",
    },
    itemText : {
        color : "#351401",
        textAlign: "center",
    }
});
