import {
    Image,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import useButtonWp from "../../hooks/useButtonWp";
import { useAreaCode } from "@/contexts/AreaCodeContext";
import Entypo from "@expo/vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

const ButtonWp = () => {
    // HOOKS
    const { numberPhone, handleNumberPhone, handleSendWhatsApp } =
        useButtonWp();
    const { areaCode } = useAreaCode();
    const { navigate } = useNavigation() as any;

    // FUNCTIONS
    const handlePressSend = () => {
        const phoneNumber = `${areaCode.code}${numberPhone}`;
        const webUrl = "https://pay.bitnovo.com/59f9g9"; // Aquí va tu URL de pago
        handleSendWhatsApp(phoneNumber, webUrl);
    };

    return (
        <View style={styles.card}>
            <View style={styles.image}>
                <Image source={require("assets/whatsapp.png")} />
            </View>
            <Pressable onPress={() => navigate("CountriesSelector")} style={styles.areaCode}>
                <Text>{areaCode.code}</Text>
                <Entypo name="chevron-small-down" size={20} color="#002859" />
            </Pressable>
            <TextInput
                placeholderTextColor="#647184"
                placeholder="Número de teléfono"
                style={styles.input}
                value={numberPhone}
                keyboardType="numeric"
                onChangeText={(value) => handleNumberPhone(value)}
            />
            <Pressable style={styles.sendButton}>
                <Text onPress={handlePressSend} style={styles.textButton}>
                    Enviar
                </Text>
            </Pressable>
        </View>
    );
};

export default ButtonWp;

const styles = StyleSheet.create({
    card: {
        width: "100%",
        height: 56,
        paddingHorizontal: 16,
        paddingVertical: 18,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        borderRadius: 6,
        borderWidth: 1,
        borderColor: "#d3dce6",
        gap: 12,
    },
    image: {
        width: 32,
        height: 32,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 14,
        color: "#002859",
    },
    areaCode: {
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
    },
    input: {
        flex: 1,
        color: "#002859",
    },
    sendButton: {
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 8,
        paddingVertical: 4,
        backgroundColor: "#035AC5",
        height: 24,
    },
    textButton: {
        color: "#fff",
        fontSize: 12,
        fontWeight: "700",
    },
});
