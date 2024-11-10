import React from "react";
import {
    StyleSheet,
    View,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";
import Header from "./Header";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <Header />
                    <View style={styles.children}>{children}</View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

export default Layout;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    children: {
        flex: 1,
        paddingHorizontal: 18,
        paddingTop: 64,
        paddingBottom: 44,
    },
});
