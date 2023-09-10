import { View, Text, StyleSheet } from "react-native"

export default function HeroScreen ({ apartmentData }) {
    return (
        <View>
            <Text>{apartmentData}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    titleText: {
        fontFamily: "HeroSans",
        fontSize: 30,
        color: "white",
    },
})