import { Image, StyleSheet, Text, View } from "react-native";
import { DataOrdersCreateType } from "../createPay/models/createOrder.model";
import HeaderSummaryOrderPay from "./components/HeaderSummaryOrderPay";
import CardSummaryPay from "./components/CardSummaryPay";
import ListShareAction from "./components/listShareAction/ListShareAction";
import CustomButton from "@/components/common/buttons/CustomButton";
import useSummaryOrderPay from "./hooks/useSummaryOrderPay";
import { useWebSocket } from "@/contexts/WebSocketContext";
import { useEffect } from "react";

interface SummaryOrderPayViewProps {
    dataOrderPay: DataOrdersCreateType;
}

const SummaryOrderPayView = (props: SummaryOrderPayViewProps) => {
    const { dataOrderPay } = props;

    // HOOKS
    const { handleNewOrder } = useSummaryOrderPay();

    // CONTEXT
    const { setIdentifier } = useWebSocket();
    // Setea nuevo identifier

    useEffect(() => {
        dataOrderPay && setIdentifier(dataOrderPay.identifier);
    }, [dataOrderPay]);

    return (
        <View style={styles.container}>
            <HeaderSummaryOrderPay />
            <View style={styles.body}>
                <CardSummaryPay dataOrderPay={dataOrderPay} />
                <ListShareAction dataOrderPay={dataOrderPay} />
                <CustomButton
                    title="Nueva solicitud"
                    variant="secondary"
                    handleOnPress={handleNewOrder}
                    icon={<Image source={require("assets/wallet-add.png")} />}
                />
            </View>
        </View>
    );
};

export default SummaryOrderPayView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        flex: 1,
        paddingHorizontal: 18,
        paddingTop: 16,
        paddingBottom: 44,
        justifyContent: "space-between",
    },
});
