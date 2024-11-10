import { DataOrdersCreateType } from "@/views/createPay/models/createOrder.model";
import { Image, StyleSheet, Text, View } from "react-native";

interface CardSummaryPayProps {
    dataOrderPay: DataOrdersCreateType;
}

const CardSummaryPay = (props: CardSummaryPayProps) => {
    const { dataOrderPay } = props;

    return (
        <View style={styles.card}>
            <View style={styles.body}>
                <View style={styles.image}>
                    <Image
                        source={require("assets/icon-card-summary-pay.png")}
                    />
                </View>
                <View style={styles.textsContainer}>
                    <Text style={styles.title}>Solicitud de pago</Text>
                    <Text style={styles.amount}>
                        {dataOrderPay.expected_input_amount} {dataOrderPay.input_currency}
                    </Text>
                </View>
            </View>
            <Text style={styles.legend}>
                Comparte el enlace de pago con el cliente
            </Text>
        </View>
    );
};

export default CardSummaryPay;

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#f9fafc",
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        justifyContent: "space-between",
        alignItems: "center",
    },
    body: {
        gap: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: 58,
        height: 58,
        justifyContent: "center",
        alignItems: "center",
    },
    textsContainer: {
        gap: 2,
        alignItems: "flex-start",
    },
    title: {
        fontSize: 14,
        color: "#647184",
    },
    amount: {
        fontSize: 30,
        color: "#002859",
        fontWeight: "700",
    },
    legend: {
        fontSize: 12,
        color: "#647184",
    },
});
