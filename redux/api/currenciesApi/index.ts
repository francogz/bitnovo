import { prepareHeaders } from "@/utils/prepareHeaders";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const currenciesApi = createApi({
    reducerPath: "currenciesApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.EXPO_PUBLIC_TEST_API}/v1`,
        prepareHeaders: (headers) => prepareHeaders(headers),
    }),
    endpoints: (builder) => ({
        getCurrenciesApi: builder.query<any, void>({
            query: () => ({
                url: "/currencies",
                method: "GET",
            }),
        }),
    }),
});

export default currenciesApi;
export const { useGetCurrenciesApiQuery } = currenciesApi;
