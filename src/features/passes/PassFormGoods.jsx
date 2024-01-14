//import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import PropTypes from "prop-types";
//import schema from "./passForm.schema";
//import { useNewPassMutation } from "./passesApiSlice";

export const PassFormGoods = ({ control }) => {
  // console.log(errors);
  const { register } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "goods",
  });
  //  console.log(watch());
  //  console.log(watch(fieldname));

  return (
    <div>
      {console.log(fields)}
      <ul>
        {fields.map((field, index) => {
          return (
            <li key={field.id}>
              <input {...register(`goods.${index}.name`)} />

              <input {...register(`goods.${index}.amount`)} />

              <button type="button" onClick={() => remove(index)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
      <button
        type="button"
        onClick={() => {
          append({
            name: "append",
            amount: 0,
          });
        }}
      >
        Append
      </button>
    </div>
  );
};

PassFormGoods.propTypes = {
  control: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.string.isRequired,
};
