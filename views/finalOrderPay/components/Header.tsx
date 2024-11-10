import { Image, StyleSheet, View } from "react-native";

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require("assets/bitnovo-pay.png")} />
            </View>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        height: 100,
        width: "100%",
        paddingHorizontal: 20,
        paddingTop: 40,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderBottomColor: "rgba(0, 0, 0, 0.1)",
        flexDirection: "row",
    },
    imageContainer: {
        width: 120,
        justifyContent: "center",
        alignItems: "center",
    },
});
