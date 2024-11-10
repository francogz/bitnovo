import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { useAreaCode } from "@/contexts/AreaCodeContext";
import { DataCountriesCodeType } from "@/views/summaryOrderPay/models/countriesCode.model";

interface CardCountryCodeProps {
    countryCode: DataCountriesCodeType;
}

const CardCountryCode = (props: CardCountryCodeProps) => {
    const {
        countryCode: { flag, code, name},
    } = props;

    // HOOKS
    const { goBack } = useNavigation();
    const { setAreaCode } = useAreaCode();


    //FUNCTIONS
    const handleCountryCode = () => {
        setAreaCode(props.countryCode);
        goBack();
    };

    return (
        <Pressable onPress={handleCountryCode} style={styles.card}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: flag }} style={styles.image}/>
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.textsContainer}>
                    <Text style={styles.code}>{code}</Text>
                    <Text style={styles.name}>{name}</Text>
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

export default CardCountryCode;

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
    code: {
        fontSize: 14,
        fontWeight: "700",
        color: "#002859",
    },
    name: {
        fontSize: 12,
        color: "#647184",
    },
});
