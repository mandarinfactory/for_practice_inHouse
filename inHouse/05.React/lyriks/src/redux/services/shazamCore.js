import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
    reducerPath : 'shazamCoreApi',
    baseQuery : fetchBaseQuery({
        baseUrl : 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders : headers => {
            headers.set('X-RapidAPI-Key', '4bf661b071mshb7293e86ca3d69ap1cc4b0jsn143e9dcba9ca');
            return headers
        },//prepareHeaders
    }),//baseQuery
    endpoints: builder => ({
        getTopCharts: builder.query({ query : () => '/charts/world'}),
    }),//endpoints
});//createApi

export const {
    useGetTopChartsQuery, 
} = shazamCoreApi;