import { useWebSocket } from "@/contexts/WebSocketContext";
import { useNavigation } from "@react-navigation/native";
import { Alert, Linking, Share } from "react-native";
import { useDispatch } from "react-redux";
import * as Clipboard from "expo-clipboard";

const useSummaryOrderPay = (): {
    handleShare: (webUrl: string) => Promise<void>;
    handleShareEmail: (webUrl: string) => Promise<void>;
    handleNewOrder: () => void;
    handleCopyLink: (webUrl: string) => void;
} => {

    // REDUX
    const dispatch = useDispatch();

    // HOOKS
    const { navigate } = useNavigation() as any;
    const { setIdentifier } = useWebSocket();

    // FUNCTIONS
    const handleShare = async (webUrl: string) => {
        try {
            await Share.share({
                message: "Te comparto mi link de pago",
                url: webUrl,
            });
        } catch (error) {
            console.log("Error al compartir:", error);
        }
    };

    const handleShareEmail = async (webUrl: string) => {
        const emailSubject = encodeURIComponent("Link de pago");
        const emailBody = encodeURIComponent(
            `Te comparto mi link de pago ${webUrl}`
        );
        const emailLink = `mailto:?subject=${emailSubject}&body=${emailBody}`;

        const canOpen = await Linking.canOpenURL(emailLink);
        if (canOpen) {
            Linking.openURL(emailLink);
        } else {
            Alert.alert("Error", "No se puede abrir la aplicación de correo");
        }
    };

    const handleNewOrder = () => { 
        dispatch({ type: "NEW_ORDER" });
        setIdentifier("");
        navigate("CreatePay");
    };

    const handleCopyLink = async (webUrl: string) => {

        await Clipboard.setStringAsync(webUrl);

        Alert.alert("¡Copiado!", "El texto ha sido copiado al portapapeles.");
    };

    return {
        handleShare,
        handleShareEmail,
        handleNewOrder,
        handleCopyLink,
    };
};

export default useSummaryOrderPay;
