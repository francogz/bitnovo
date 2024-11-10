import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useCurrency } from "@/contexts/CurrencyContext";
import { useNavigation } from "@react-navigation/native";
import { DataFiatType } from "@/views/currencySelector/models/fiat.model";

interface CardCurrencyProps {
    currency: DataFiatType;
}

const CardCurrency = (props: CardCurrencyProps) => {
    const {
        currency: { flagUrl, name, code },
    } = props;

    // HOOKS
    const { goBack } = useNavigation();
    const { setCurrency } = useCurrency();


    //FUNCTIONS
    const handleCurrency = () => {
        setCurrency(props.currency);
        goBack();
    };
    return (
        <Pressable onPress={handleCurrency} style={styles.card}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: flagUrl }} style={styles.image}/>
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.textsContainer}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.symbol}>{code}</Text>
                </View>
                <MaterialIcons
                    name="keyboard-arrow-right"
                    size={24}
                    color="#647184"
                />
            </View>
        </Pressable>
    );
};

export default CardCurrency;

const styles = StyleSheet.create({
    card: {
        width: "100%",
        paddingHorizontal: 12,
        paddingVertical: 10,
        flexDirection: "row",
        height: 52,
        gap: 12,
        borderRadius: 6,
    },
    imageContainer: {
        width: 32,
        height: 32,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        overflow: "hidden",
    },
    image: {
        width: 32,
        height: 32,
    },
    infoContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    textsContainer: {
        gap: 4,
    },
    name: {
        fontSize: 14,
        fontWeight: "700",
        color: "#002859",
    },
    symbol: {
        fontSize: 12,
        color: "#647184",
    },
});
