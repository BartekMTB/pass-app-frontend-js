import { apiSlice } from "../../app/apiSlice";

export const passesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPass: builder.query({
      query: (passId) => `/passes/${passId}`,
      //({query: (passId) => ({ url: 'passes/${passId}', method: 'get' })})
    }),
    getPasses: builder.query({
      query: (arg) => {
        return {
          url: "/passes",
          params: { ...arg },
        };
      },
    }),
    getPassById: builder.query({
      query: (_id) => {
        return {
          url: `/passes/${_id}`,
        };
      },
    }),
    newPass: builder.mutation({
      query(data) {
        const { ...body } = data;
        return {
          url: `/passes/add`,
          method: "POST",
          body,
        };
      },
    }),
  }),
});

export const {
  useGetPassesQuery,
  useGetPassQuery,
  useNewPassMutation,
  useGetPassByIdQuery,
} = passesApiSlice;
