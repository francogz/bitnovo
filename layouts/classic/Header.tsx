import { Pressable, StyleSheet, Text, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useCurrency } from "@/contexts/CurrencyContext";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
    const { currency } = useCurrency();
    const { navigate } = useNavigation() as any;

    return (
        <View style={styles.container}>
            <View style={styles.containerInfo}>
                <Text style={styles.title}>Crear pago</Text>
                <Pressable
                    onPress={() => navigate("CurrencySelector")}
                    style={styles.currencyButton}
                >
                    <Text style={styles.currencyText}>{currency.code}</Text>
                    <MaterialIcons
                        name="keyboard-arrow-down"
                        size={16}
                        color="#002859"
                    />
                </Pressable>
            </View>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        height: 100,
        width: "100%",
        paddingHorizontal: 20,
        paddingTop: 40,
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderBottomColor: "rgba(0, 0, 0, 0.1)",
        flexDirection: "row",
    },
    containerInfo: {
        width: "75%",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
    },
    title: {
        flexBasis: "65%",
        fontSize: 18,
        fontWeight: "700",
        color: "#002859",
        textAlign: "center",
    },
    currencyButton: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 20,
        backgroundColor: "#EFF2F7",
        flexDirection: "row",
        alignItems: "center",
    },
    currencyText: {
        fontSize: 12,
        color: "#002859",
        fontWeight: "700",
    },
});
