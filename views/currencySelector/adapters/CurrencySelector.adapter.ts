import { DataCurrencySelectorType } from "../models/currencySelector.model";

export const currencySelectorAdapter = (data: any[]): DataCurrencySelectorType[] => {

    return data.map((data : DataCurrencySelectorType) => ({
        symbol: data.symbol,
        name: data.name,
        minAmount: data.minAmount,
        maxAmount: data.maxAmount,
        image: data.image,
        blockchain: data.blockchain,
    }));

}
