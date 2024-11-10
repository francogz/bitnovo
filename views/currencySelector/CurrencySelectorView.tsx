import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import HeaderGoBack from "../../layouts/internal/HeaderGoBack";
import SearchInput from "@/components/common/SearchTextInput";
import ListCurrency from "./components/listCurrency/ListCurrency";

const CurrencySelectorView = () => {
    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <HeaderGoBack  title="Selecciona una divisa" />
                    <View style={styles.body}>
                        <SearchInput placeholder="Buscar moneda" />
                        <ListCurrency />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

export default CurrencySelectorView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        flex: 1,
        paddingHorizontal: 18,
        paddingBottom: 24,
        gap: 8,
    },
});
