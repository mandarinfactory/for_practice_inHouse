import { Pressable, View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/style";

export default function Button({ children, onPress, mode, style }) {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.btn, mode === "flat" && styles.flat]}>
          <Text style={[styles.btnText, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    borderRadius: 5,
    padding: 7,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  btnText: {
    color: "white",
    textAlign: "center",
  },
  flat: {
    backgroundColor: "transparent",
  },
  flatText: {
    color: GlobalStyles.colors.primary200,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 5,
  },
});
