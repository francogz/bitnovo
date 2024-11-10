import SummaryOrderPayView from "@/views/summaryOrderPay/SummaryOrderPayView";
import { RouteProp, useRoute } from "@react-navigation/native";

type RootStackParamList = {
    SummaryOrderPay: { dataOrderPay: any };
};

type SummaryOrderPayRouteProp = RouteProp<
    RootStackParamList,
    "SummaryOrderPay"
>;

type SummaryOrderPayProps = {
    route: SummaryOrderPayRouteProp;
};

const SummaryOrderPay: React.FC<SummaryOrderPayProps> = () => {
    const route = useRoute<SummaryOrderPayRouteProp>();
    const { dataOrderPay } = route.params;

    return <SummaryOrderPayView dataOrderPay={dataOrderPay} />;
};

export default SummaryOrderPay;
