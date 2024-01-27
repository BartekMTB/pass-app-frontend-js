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
        delete response.contactfound._id;
        delete response.contactfound.passNumber;
        delete response.contactfound.goods[0]._id;
        delete response.contactfound.__v;

        //do poprawy- petla w goods
        console.log("transform", response);
        return response;
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
        // const { _id, ...pass } = data;
        //   const { ...body } = pass;
        //  console.log("_id ", _id);
        ///console.log("data ", data);

        return {
          url: `/passes/${_id}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["Passes"],
      /*  async onQueryStarted({ _id, ...data }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          apiSlice.util.updateQueryData("getPassById", _id, (draft) => {
            Object.assign(draft, data);
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      }, */
    }),
  }),
});

export const {
  useGetPassesQuery,
  useNewPassMutation,
  useGetPassByIdQuery,
  useUpdatePassMutation,
} = passesApiSlice;

/* query({ _id, data }) {
  // const { _id, ...pass } = data;
  //   const { ...body } = pass;
  console.log("_id ", _id);
  console.log("data ", data);

  return {
    url: `/passes/${_id}`,
    method: "PUT",
    data,
  };
}, */
