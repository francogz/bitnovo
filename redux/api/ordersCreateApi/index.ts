import { prepareHeaders } from "@/utils/prepareHeaders";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const ordersCreateApi = createApi({
    reducerPath: "ordersCreateApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.EXPO_PUBLIC_TEST_API}/v1`,
        prepareHeaders: (headers) => prepareHeaders(headers),
    }),
    endpoints: (builder) => ({
        postOrdersCreate: builder.mutation({
            query: (body) => ({
                url: `/orders/`,
                method: "POST",
                body,
            }),
        }),
    }),
});

export default ordersCreateApi;

export const { usePostOrdersCreateMutation } = ordersCreateApi;
