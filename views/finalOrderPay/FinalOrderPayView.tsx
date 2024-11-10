import { Image, StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import CustomButton from "@/components/common/buttons/CustomButton";
import { useNavigation } from "@react-navigation/native";

const FinalOrderPayView = () => {
    const { navigate } = useNavigation() as any;

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.body}>
                <View style={styles.infoSuccess}>
                    <View style={styles.imageContainer}>
                        <Image source={require("assets/Confetti.png")} />
                    </View>
                    <Text style={styles.title}>Pago recibido</Text>
                    <Text style={styles.subTitle}>El pago se ha confirmado con éxito</Text>
                </View>
                <CustomButton
                    title="Finalizar"
                    variant="secondary"
                    handleOnPress={() => {
                        navigate("CreatePay");
                    }}
                />
            </View>
        </View>
    );
};

export default FinalOrderPayView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    body: {
        flex: 1,
        paddingHorizontal: 18,
        paddingBottom: 44,
        gap: 24,
    },
    infoSuccess: {
        alignItems: "center",
        gap: 16,
        flex: 1,
        justifyContent: "center",
    },
    imageContainer: {
        width: 204,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {    
        fontSize: 20,
        fontWeight: "700",
        color: "#002859",
        textAlign: "center",
    },
    subTitle: {
        fontSize: 14,
        color: "#647184",
        textAlign: "center",
        lineHeight: 18,
    },
});
