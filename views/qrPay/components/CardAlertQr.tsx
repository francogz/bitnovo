import { StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const CardAlertQr = () => {
    return (
        <View style={styles.container}>
            <View style={styles.icon}>
                <Ionicons name="alert" size={15} color="#035AC5" />
            </View>
            <Text style={styles.text}>
                Escanea el QR y serás redirigido a la pasarela de pago de
                Bitnovo Pay.
            </Text>
        </View>
    );
};

export default CardAlertQr;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxHeight: 60,
        borderRadius: 6,
        gap: 10,
        flexDirection: "row",
        backgroundColor: "#eaf3ff",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingVertical: 14,
        paddingHorizontal: 16,
    },
    icon: {
        width: 20,
        height: 20,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#8eb6e8",
    },
    text: {
        fontSize: 12,
        color: "#002859",
        textAlign: "left",
        flex: 1,
        lineHeight: 16,
    },
});
