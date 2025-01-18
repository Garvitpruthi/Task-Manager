import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const API_URI = "http://localhost:8800/api";

const baseQuery = fetchBaseQuery({baseUrl: API_URI});

export const apiSlice = createApi({
    baseQuery, 
    tagTypes: [],
    // eslint-disable-next-line no-unused-vars
    endpoints: (builder) => ({}),
    
})