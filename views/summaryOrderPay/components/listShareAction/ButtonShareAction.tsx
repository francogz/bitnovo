import { Image, Pressable, StyleSheet, Text, View } from "react-native";

interface ButtonShareActionProps {
    icon: any;
    title: string;
    action: () => void;
}

const ButtonShareAction = (props: ButtonShareActionProps) => {
    const { icon, title, action } = props;

    return (
        <Pressable style={styles.card} onPress={action}>
            <View style={styles.image}>
                <Image source={icon} />
            </View>
            <Text style={styles.title}>{title}</Text>
        </Pressable>
    );
};

export default ButtonShareAction;

const styles = StyleSheet.create({
    card: {
        flex: 1,
        maxHeight: 56,
        paddingHorizontal: 16,
        paddingVertical: 18,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        borderRadius: 6,
        borderWidth: 1,
        borderColor: "#d3dce6",
        gap: 12,
    },
    image: {
        width: 32,
        height: 32,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 14,
        color: "#002859",
    },
});
