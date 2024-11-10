import { DataCountriesCodeType } from "@/views/summaryOrderPay/models/countriesCode.model";
import React, { createContext, useState, useContext } from "react";

interface AreaCodeContextProps {
    areaCode: DataCountriesCodeType;
    setAreaCode: (areaCode: DataCountriesCodeType) => void;
}

const AreaCodeContext = createContext<AreaCodeContextProps | undefined>(
    undefined
);

export const AreaCodeProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [areaCode, setAreaCode] = useState<DataCountriesCodeType>({
        id: 1,
        name: "España",
        code: "+34",
        flag: "https://flagcdn.com/es.png",
        currency: "EUR",
    });

    return (
        <AreaCodeContext.Provider value={{ areaCode, setAreaCode }}>
            {children}
        </AreaCodeContext.Provider>
    );
};

export const useAreaCode = () => {
    const context = useContext(AreaCodeContext);
    if (!context) {
        throw new Error("ERROR");
    }
    return context;
};
