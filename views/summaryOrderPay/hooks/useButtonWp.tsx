import { useState } from "react";
import { Linking, Alert } from "react-native";

const useButtonWp = (): {
    numberPhone: string;
    handleNumberPhone: (value: string) => void;
    handleSendWhatsApp: (phoneNumber: string, webUrl: string) => void;
} => {
    // STATES
    const [numberPhone, setNumberPhone] = useState<string>("");

    // FUNCTIONS
    const handleNumberPhone = (value: string) => {
        setNumberPhone(value);
    };

    const handleSendWhatsApp = async (phoneNumber: string, webUrl: string) => {
        // Verificar si el número ingresado no está vacío
        if (!phoneNumber) {
            Alert.alert("Por favor, ingresa un número de teléfono");
            return;
        }
        const formattedNumber = phoneNumber.replace(/\D/g, "");

        const message = `Te comparto mi link de pago: ${webUrl}`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodedMessage}`;

        const canOpen = await Linking.canOpenURL(whatsappUrl);
        if (canOpen) {
            Linking.openURL(whatsappUrl);
        } else {
            Alert.alert(
                "No se pudo abrir WhatsApp. Asegúrate de tener WhatsApp instalado."
            );
        }
    };

    return {
        numberPhone,
        handleNumberPhone,
        handleSendWhatsApp,
    };
};

export default useButtonWp;
