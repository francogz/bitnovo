import { StyleSheet, Text, View } from "react-native";
import Loader from "@/components/common/Loader";
import CardCurrency from "./components/CardCurrency";
import { useGetFiatApiQuery } from "@/redux/api/fiatApi";
import { DataFiatType } from "../../models/fiat.model";

const ListCurrency = () => {

    const {data: currencySelectorData, isError:isErrorCurrencySelector, isLoading:isLoadingCurrencySelector} = useGetFiatApiQuery();


    if(isLoadingCurrencySelector){
        return <Loader />
    }

    if(isErrorCurrencySelector){
        return <Text>Error al cargar los datos</Text>
    }

    return ( 
        <View style={styles.container}>
            {currencySelectorData?.length > 0 ? currencySelectorData.map((currency: DataFiatType) => (
                <CardCurrency key={currency.id} currency={currency} />
            )) : (
                <Text>No hay datos</Text>
            )}
        </View>
     );
}
 
export default ListCurrency;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 4,
    }
});