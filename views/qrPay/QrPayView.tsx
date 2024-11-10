import HeaderGoBack from "@/layouts/internal/HeaderGoBack";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import CardAlertQr from "./components/CardAlertQr";
import QRCode from "react-native-qrcode-svg";
import { DataOrdersCreateType } from "../createPay/models/createOrder.model";
import { useWebSocket } from "@/contexts/WebSocketContext";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

interface QrPayViewProps {
    dataOrderPay: DataOrdersCreateType;
}

const QrPayView = (props: QrPayViewProps) => {
    const { dataOrderPay } = props;

    const { width } = Dimensions.get("window");
    const logoUri = require("@/assets/bpay.png");

    // HOOK
    const { navigate } = useNavigation() as any;
    const { status } = useWebSocket();

    useEffect(() => {
        if (status === "success") {
            navigate("FinalOrderPay");
            return;
        }
        if (status === "error") {
            navigate("CreatePay");
            return;
        }
    }, [status]);

    return (
        <View style={styles.container}>
            <HeaderGoBack />
            <View style={styles.body}>
                <CardAlertQr />
                <View style={styles.qrContainer}>
                    <QRCode
                        value={dataOrderPay?.payment_uri}
                        size={width * 0.65}
                        logo={logoUri}
                        logoSize={100}
                        logoBackgroundColor="transparent"
                    />
                </View>
                <Text style={styles.amount}>
                    {dataOrderPay?.expected_input_amount}{" "}
                    {dataOrderPay?.input_currency}
                </Text>
                <Text style={styles.text}>
                    Esta pantalla se actualizará automáticamente.
                </Text>
            </View>
        </View>
    );
};

export default QrPayView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        flex: 1,
        paddingHorizontal: 18,
        paddingVertical: 24,
        gap: 24,
        backgroundColor: "#035AC5",
    },
    qrContainer: {
        width: "100%",
        height: 380,
        borderRadius: 6,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    amount: {
        fontSize: 26,
        color: "#fff",
        textAlign: "center",
        fontWeight: "700",
    },
    text: {
        fontSize: 14,
        color: "#fff",
        textAlign: "center",
    },
});
