import {
    Keyboard,
    StyleSheet,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import ButtonShareAction from "./ButtonShareAction";
import { DataOrdersCreateType } from "@/views/createPay/models/createOrder.model";
import useSummaryOrderPay from "../../hooks/useSummaryOrderPay";
import ButtonWp from "./ButtonWp";
import ButtonQr from "./ButtonQr";

interface ListShareActionProps {
    dataOrderPay: DataOrdersCreateType;
}

const ListShareAction = (props: ListShareActionProps) => {
    const { dataOrderPay } = props;

    // HOOKS
    const { handleShare, handleShareEmail, handleCopyLink } = useSummaryOrderPay();

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View style={styles.row}>
                    <ButtonShareAction
                        title={dataOrderPay.web_url}
                        icon={require("assets/link.png")}
                        action={() => {
                            handleCopyLink(dataOrderPay.web_url);
                        }}
                    />
                    <ButtonQr dataOrderPay={dataOrderPay}/>
                </View>
                <ButtonShareAction
                    title="Enviar por correo electrónico"
                    icon={require("assets/sms.png")}
                    action={() => {
                        handleShareEmail(dataOrderPay.web_url);
                    }}
                />
                <ButtonWp />
                <ButtonShareAction
                    title="Compartir con otras aplicaciones"
                    icon={require("assets/export.png")}
                    action={() => {
                        handleShare(dataOrderPay.web_url);
                    }}
                />
            </View>
        </TouchableWithoutFeedback>
    );
};

export default ListShareAction;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 16,
    },
    row: {
        width: "100%",
        flexDirection: "row",
        gap: 16,
        justifyContent: "space-between",
        alignItems: "center",
    }
});
