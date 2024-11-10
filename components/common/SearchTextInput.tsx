import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const SearchInput = ({ placeholder }: { placeholder: string }) => {
    return (
        <View style={styles.container}>
            <AntDesign name="search1" size={24} color="#647184" />
            <TextInput
                placeholder={placeholder}
                style={styles.input}
                placeholderTextColor="#647184"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#e5e9f2",
        borderRadius: 6,
        gap: 8,
        paddingHorizontal: 12,
        height: 48,
        backgroundColor: "#fff",
    },
    icon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: "#333",
    },
});

export default SearchInput;
