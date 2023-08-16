import { View, Text, Pressable, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

export default function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.btnOuterContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: Colors.purple100 }}
        style={({ pressed }) =>
          pressed
            ? [styles.btnInnerContainer, styles.pressed]
            : styles.btnInnerContainer
        }
      >
        <Text style={styles.btnText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  btnOuterContainer: {
    margin: 5,
    borderRadius: 30,
    overflow: "hidden",
  },
  btnInnerContainer: {
    backgroundColor: Colors.purple200,
    paddingVertical: 10,
    paddingHorizontal: 15,
    elevation: 5,
  },
  btnText: {
    fontFamily: "gameSans",
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
  pressed: {
    opacity: 0.75,
  }, // iphone에서는 android_ripple이 따로 없으므로
});
