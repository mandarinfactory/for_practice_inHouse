import { Pressable, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function IconButton({ icon, size, color, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.btnContainer}>
        <Ionicons name={icon} size={size} color={color} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    margin: 7,
    padding: 7,
    borderRadius: 25,
    marginHorizontal: 7,
    marginVertical: 3,
  },
  pressed: {
    opacity: 0.75,
  },
});
