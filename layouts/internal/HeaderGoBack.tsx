import { Pressable, StyleSheet, Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

interface HeaderGoBackProps {
    title?: string;
}

const HeaderGoBack = (props: HeaderGoBackProps) => {

    const { title } = props;

    const { goBack } = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.containerInfo}>
                <Pressable
                    onPress={() => goBack()}
                    style={styles.currencyButton}
                >
                    <AntDesign name="arrowleft" size={16} color="#002859" />
                </Pressable>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    );
};

export default HeaderGoBack;

const styles = StyleSheet.create({
    container: {
        height: 100,
        width: "100%",
        paddingHorizontal: 20,
        paddingTop: 40,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#fff",
        flexDirection: "row",
    },
    containerInfo: {
        width: "74%",
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
        borderRadius: 100,
        backgroundColor: "#EFF2F7",
        alignItems: "center",
        justifyContent: "center",
        height: 28,
        width: 28,
    },
    currencyText: {
        fontSize: 12,
        color: "#002859",
        fontWeight: "700",
    },
});
