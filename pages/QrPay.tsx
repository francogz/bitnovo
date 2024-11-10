import QrPayView from "@/views/qrPay/QrPayView";
import { RouteProp, useRoute } from "@react-navigation/native";

type RootStackParamList = {
    QrPay: { dataOrderPay: any };
};

type QrPayRouteProp = RouteProp<
    RootStackParamList,
    "QrPay"
>;

type SummaryOrderPayProps = {
    route: QrPayRouteProp;
};

const SummaryOrderPay: React.FC<SummaryOrderPayProps> = () => {
    const route = useRoute<QrPayRouteProp>();
    const { dataOrderPay } = route.params;

    return <QrPayView dataOrderPay={dataOrderPay} />;
};

export default SummaryOrderPay;
