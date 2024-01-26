import React from "react";
import { useGetPassByIdQuery } from "./passesApiSlice";
import PropTypes from "prop-types";
/* eslint-disable react/display-name */
export const PassPrintout = React.forwardRef((props, ref) => {
  /*   const {
    data: pass,
    isLoading,
    isSuccess,
    isError,
    error,
    refetch,
  } = useGetPassByIdQuery(_id);
 */

  console.log(props);
  const { data: pass } = useGetPassByIdQuery(props._id);
  console.log(pass);
  return (
    <div ref={ref}>
      My cool content here!
      <p>{JSON.stringify(pass)}</p>
    </div>
  );
});

PassPrintout.propTypes = {
  _id: PropTypes.string.isRequired,
};
