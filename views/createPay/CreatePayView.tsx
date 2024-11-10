import { StyleSheet, View } from "react-native";
import ConceptField from "./components/ConceptField";
import AmountInput from "./components/AmountInput";
import CustomButton from "@/components/common/buttons/CustomButton";
import useCreatePayViewModel from "./hooks/useCreatePayViewModel";

const CreatePayView = () => {
    // HOOKS
    const {
        amountValue,
        textConceptValue,
        isButtonDisabled,
        isLoadingOrdersCreate,
        handleAmountChange,
        handleTextConceptChange,
        handlePostOrderCreate,
    } = useCreatePayViewModel();

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <AmountInput
                    amountValue={amountValue}
                    handleAmountChange={handleAmountChange}
                />
                <ConceptField
                    textConceptValue={textConceptValue}
                    handleTextConceptChange={handleTextConceptChange}
                />
            </View>
            <CustomButton
                disabled={isButtonDisabled}
                title="Continuar"
                handleOnPress={handlePostOrderCreate}
                isLoading={isLoadingOrdersCreate}
            />
        </View>
    );
};

export default CreatePayView;

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: "100%",
    },
    form: {
        width: "100%",
        gap: 50,
    },
});
