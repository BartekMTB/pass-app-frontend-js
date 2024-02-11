import { apiSlice } from "../../app/apiSlice";

export const passesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPasses: builder.query({
      query: (page = 1) => {
        console.log("page", page);
        return {
          url: `/passes/?limit=6&page=${page}`,
        };
      },
      providesTags: ["Passes"],
    }),
    getPassById: builder.query({
      query: (_id) => {
        return {
          url: `/passes/${_id}`,
        };
      },
      providesTags: ["Passes"],
      transformResponse: (response) => {
        //  delete response.contactfound._id;
        //  delete response.contactfound.passNumber;
        //  delete response.contactfound.goods[0]._id;
        //  delete response.contactfound.__v;
        // because in joi striUnknown: true

        //do poprawy- petla w goods
        console.log("transform", response);
        return response.contactfound;
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
      invalidatesTags: ["Passes"],
    }),
    updatePass: builder.mutation({
      query: ({ _id, data }) => {
        return {
          url: `/passes/${_id}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["Passes"],
    }),
  }),
});

export const {
  useGetPassesQuery,
  useNewPassMutation,
  useGetPassByIdQuery,
  useUpdatePassMutation,
} = passesApiSlice;
