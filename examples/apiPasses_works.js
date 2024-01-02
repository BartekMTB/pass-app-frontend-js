// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define our single API slice object
export const apiPasses = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: 'api',
  // All of our requests will have URLs starting with 'https://passbackend.onrender.com/api/'
  baseQuery: fetchBaseQuery({ baseUrl: 'https://passbackend.onrender.com/api/' }),
  // The "endpoints" represent operations and requests for this server
  endpoints: (builder) => ({
    // The `getPasses` endpoint is a "query" operation that returns data
    getPass: builder.query({
      // The URL for the request is 'https://passbackend.onrender.com/api/passes/${passId}'
      query: (passId) => `passes/${passId}`,
      //({query: (passId) => ({ url: 'passes/${passId}', method: 'get' })})
     
      /*  query: (passId) => ({
        url: `passes/`,
        method: 'GET',
        passId,
      }) */
    }),
    getPasses: builder.query({
      query: () => 'passes/'
    }),
  }),
 

})

// Export the auto-generated hook for the `getPasses` query endpoint
export const { useGetPassesQuery, useGetPassQuery } = apiPasses