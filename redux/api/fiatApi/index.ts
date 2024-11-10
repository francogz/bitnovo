import { createApi } from "@reduxjs/toolkit/query/react";
import fiat from "../../../assets/mock/fiat.json"; // Importa el archivo directamente

const fiatApi = createApi({
    reducerPath: "fiatApi",
    baseQuery: async () => ({ data: fiat }),
    endpoints: (builder) => ({
        getFiatApi: builder.query<any, void>({
            query: () => "",
        }),
    }),
});

export default fiatApi;
export const { useGetFiatApiQuery } = fiatApi;
