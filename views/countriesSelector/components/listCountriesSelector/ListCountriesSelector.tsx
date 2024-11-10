import { StyleSheet, Text, View } from "react-native";
import Loader from "@/components/common/Loader";
import { useGetCountriesCodeApiQuery } from "@/redux/api/countriesCodeApi";
import { DataCountriesCodeType } from "@/views/summaryOrderPay/models/countriesCode.model";
import CardCountryCode from "./components/CardCountryCode";

const ListCountriesSelector = () => {
    const { data, isError, isLoading } = useGetCountriesCodeApiQuery();

    if (isLoading) {
        return <Loader />;
    }

    if (isError) {
        return <Text>Error al cargar los datos</Text>;
    }

    return (
        <View style={styles.container}>
            {data?.length > 0 ? (
                data.map((countryCode: DataCountriesCodeType) => (
                    <CardCountryCode key={countryCode.id} countryCode={countryCode} />
                ))
            ) : (
                <Text>No hay datos</Text>
            )}
        </View>
    );
};

export default ListCountriesSelector;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 4,
    },
});
