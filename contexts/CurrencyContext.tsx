import { DataFiatType } from "@/views/currencySelector/models/fiat.model";
import React, { createContext, useState, useContext } from "react";

interface CurrencyContextProps {
    currency: DataFiatType;
    setCurrency: (currency: DataFiatType) => void;
}

const CurrencyContext = createContext<CurrencyContextProps | undefined>(
    undefined
);

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [currency, setCurrency] = useState<DataFiatType>({
        id: 1,
        name: "Euro",
        code: "EUR",
        flagUrl: "https://flagcdn.com/w320/eu.png"
      },);

    return (
        <CurrencyContext.Provider value={{ currency, setCurrency }}>
            {children}
        </CurrencyContext.Provider>
    );
};

export const useCurrency = () => {
    const context = useContext(CurrencyContext);
    if (!context) {
        throw new Error("ERROR");
    }
    return context;
};
