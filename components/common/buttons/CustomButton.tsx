import { Pressable, StyleSheet, Text, View } from "react-native";
import Loader from "../Loader";

interface CustomButtonProps {
    title: string;
    icon?: JSX.Element;
    disabled?: boolean;
    isLoading?: boolean;
    variant?: "primary" | "secondary";
    handleOnPress: () => void;
}

const CustomButton = (props: CustomButtonProps) => {
    const {
        title,
        disabled,
        icon,
        isLoading,
        variant = "primary",
        handleOnPress = () => {},
    } = props;

    return (
        <Pressable
            disabled={disabled}
            style={[
                styles.buttonContainer,
                variant === "secondary" && { backgroundColor: "#f9fafc" },
                disabled && { backgroundColor: "#eaf3ff" },
            ]}
            onPress={handleOnPress}
        >
            {isLoading ? (
                <Loader color={variant === "secondary" ? "#035AC5" : "#fff"} />
            ) : (
                <View style={styles.row}>
                    <Text
                        style={[
                            styles.textButton,
                            variant === "secondary" && { color: "#035AC5" },
                            disabled && { color: "#71B0FD" },
                        ]}
                    >
                        {title}
                    </Text>
                    {icon && <View style={styles.icon}>{icon}</View>}
                </View>
            )}
        </Pressable>
    );
};

export default CustomButton;

const styles = StyleSheet.create({
    buttonContainer: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#035AC5",
        padding: 18,
        borderRadius: 6,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
    },
    textButton: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
        lineHeight: 20,
    },
    icon: {
        height: 20,
        width: 20,
    },
});
