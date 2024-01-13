// Import the RTK Query methods from the React-specific entry point
import { apiSlice } from "../../app/apiSlice";

export const passesApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
      getPass: builder.query({
      query: (passId) => `/passes/${passId}`
          //({query: (passId) => ({ url: 'passes/${passId}', method: 'get' })})
          
      }),
      getPasses: builder.query({
        query: (arg) => {
         // const { year, passPerPage, numbeOfPage } = arg;
          console.log('arg: ', arg);
          return {
            url: 'passes',
            params: { ...arg },
          }}
        }),
  })
})


export const { useGetPassesQuery, useGetPassQuery } = passesApiSlice
