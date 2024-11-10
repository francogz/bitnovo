import { DataOrdersCreateType } from "@/views/createPay/models/createOrder.model";
import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, View } from "react-native";

interface ButtonQrProps {
    dataOrderPay: DataOrdersCreateType;
}

const ButtonQr = (props: ButtonQrProps) => {
    const { dataOrderPay } = props;

    const { navigate } = useNavigation() as any;

    return (
        <Pressable
            onPress={() =>
                navigate("QrPay", {
                    dataOrderPay,
                })
            }
            style={styles.button}
        >
            <Image source={require("assets/scan-barcode.png")} />
        </Pressable>
    );
};

export default ButtonQr;

const styles = StyleSheet.create({
    button: {
        height: 56,
        width: 56,
        borderRadius: 6,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#035AC5",
    },
});
