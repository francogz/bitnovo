import { NavigationContainer } from "@react-navigation/native";
import { enableScreens } from "react-native-screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreatePay from "./pages/CreatePay";
import Layout from "./layouts/classic/Layout";
import { CurrencyProvider } from "./contexts/CurrencyContext";
import CurrencySelector from "./pages/CurrencySelector";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import SummaryOrderPay from "./pages/SummaryOrderPay";
import { AreaCodeProvider } from "./contexts/AreaCodeContext";
import CountriesSelector from "./pages/CountriesSelector";
import QrPay from "./pages/QrPay";
import FinalOrderPay from "./pages/FinalOrderPay";
import { WebSocketProvider } from "./contexts/WebSocketContext";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as Sentry from "@sentry/react-native";

enableScreens();
const Stack = createNativeStackNavigator();

Sentry.init({
    dsn: "https://fbf768e3a19564c8fd5302f1bf647300@o4507221154660352.ingest.us.sentry.io/4507867801452544",
    // Set tracesSampleRate to 1.0 to capture 100% of transactions for tracing.
    // We recommend adjusting this value in production.
    tracesSampleRate: 1.0,
    _experiments: {
        // profilesSampleRate is relative to tracesSampleRate.
        // Here, we'll capture profiles for 100% of transactions.
        profilesSampleRate: 1.0,
    },
});

const App = () => {
    return (
        <SafeAreaProvider>
            <Provider store={store}>
                <WebSocketProvider>
                    <CurrencyProvider>
                        <AreaCodeProvider>
                            <NavigationContainer>
                                <Stack.Navigator
                                    initialRouteName="CreatePay"
                                    screenOptions={{
                                        headerShown: false,
                                        contentStyle: {
                                            backgroundColor: "#FFFFFF",
                                        },
                                    }}
                                >
                                    <Stack.Screen name="CreatePay">
                                        {() => (
                                            <Layout>
                                                <CreatePay />
                                            </Layout>
                                        )}
                                    </Stack.Screen>
                                    <Stack.Screen
                                        name="CurrencySelector"
                                        component={CurrencySelector}
                                    />
                                    <Stack.Screen
                                        name="SummaryOrderPay"
                                        component={SummaryOrderPay}
                                    />
                                    <Stack.Screen
                                        name="CountriesSelector"
                                        component={CountriesSelector}
                                    />
                                    <Stack.Screen
                                        name="QrPay"
                                        component={QrPay}
                                    />
                                    <Stack.Screen
                                        name="FinalOrderPay"
                                        component={FinalOrderPay}
                                    />
                                </Stack.Navigator>
                            </NavigationContainer>
                        </AreaCodeProvider>
                    </CurrencyProvider>
                </WebSocketProvider>
            </Provider>
        </SafeAreaProvider>
    );
};

export default Sentry.wrap(App);
