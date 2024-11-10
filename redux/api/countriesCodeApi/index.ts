import { createApi } from "@reduxjs/toolkit/query/react";
import countriesCode from "../../../assets/mock/countriesCode.json"; // Importa el archivo directamente

const countriesCodeApi = createApi({
    reducerPath: "countriesCodeApi",
    baseQuery: async () => ({ data: countriesCode }),
    endpoints: (builder) => ({
        getCountriesCodeApi: builder.query<any, void>({
            query: () => "",
        }),
    }),
});

export default countriesCodeApi;
export const { useGetCountriesCodeApiQuery } = countriesCodeApi;
