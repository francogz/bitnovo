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
import ListCountriesSelector from "./components/listCountriesSelector/ListCountriesSelector";

const CountriesSelectorView = () => {
    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <HeaderGoBack  title="Seleccionar país" />
                    <View style={styles.body}>
                        <SearchInput placeholder="Buscar" />
                        <ListCountriesSelector />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

export default CountriesSelectorView;

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
