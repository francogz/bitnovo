import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

interface ConceptFieldProps {
    textConceptValue: string;
    handleTextConceptChange: (value: string) => void;
}

const ConceptField = (props: ConceptFieldProps) => {
    const { textConceptValue: text, handleTextConceptChange } = props;

    const [height, setHeight] = useState<number>(50);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Concepto</Text>
            <TextInput
                placeholderTextColor="#647184"
                placeholder="Añade una descripción del pago"
                style={[styles.input, { height: Math.max(40, height) }]}
                value={text}
                multiline
                onChangeText={(value) => handleTextConceptChange(value)}
                onContentSizeChange={(event) => {
                    setHeight(event.nativeEvent.contentSize.height);
                }}
                maxLength={140}
            />
            <Text style={styles.charCount}>{text.length}/140 caracteres</Text>
        </View>
    );
};

export default ConceptField;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        gap: 4,
    },
    label: {
        color: "#002859",
        fontSize: 14,
        fontWeight: "600",
    },
    input: {
        borderWidth: 1,
        borderColor: "#e5e9f2",
        minHeight: 50,
        paddingVertical: 18,
        paddingHorizontal: 12,
        borderRadius: 6,
        backgroundColor: "#fff",
        fontSize: 14,
        lineHeight: 20,
        color: "#002859",
    },
    charCount: {
        alignSelf: "flex-end",
        fontSize: 12,
        color: "#647184",
    },
});
