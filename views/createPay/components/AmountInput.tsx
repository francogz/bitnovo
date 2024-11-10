import { useCurrency } from "@/contexts/CurrencyContext";
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import CurrencyInput from "react-native-currency-input";

interface AmountInputProps {
    amountValue: number | null;
    handleAmountChange: (value: number) => void;
}

const AmountInput = (props: AmountInputProps) => {
    const { amountValue, handleAmountChange } = props;

    // HOOKS
    const { currency } = useCurrency();

    // FUNCTIONS
    const getCurrencySymbol = () => {
        switch (currency.code) {
            case "USD":
                return "$";
            case "EUR":
                return "€";
            case "GBP":
                return "£";
            default:
                return "$";
        }
    };

    const isSymbolAfter =
        currency.code === "EUR" || currency.code === "GBP";

    return (
        <View style={styles.container}>
            {!isSymbolAfter && (
                <Text style={[styles.symbol, !amountValue && styles.placeholder]}>
                    {getCurrencySymbol()}
                </Text>
            )}
            <CurrencyInput
                value={amountValue}
                onChangeValue={(value) => handleAmountChange(value)}
                delimiter=","
                separator="."
                precision={2}
                placeholder="0.00"
                placeholderTextColor="#C0CCDA"
                style={[styles.input, !amountValue && styles.placeholder]}
                keyboardType="numeric"
            />
            {isSymbolAfter && (
                <Text
                    style={[styles.symbol, !amountValue && styles.placeholder]}
                >
                    {getCurrencySymbol()}
                </Text>
            )}
        </View>
    );
};

export default AmountInput;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
    },
    symbol: {
        fontSize: 40,
        color: "#035AC5",
    },
    input: {
        fontSize: 40,
        color: "#035AC5",
    },
    placeholder: {
        color: "#C0CCDA",
    },
});
