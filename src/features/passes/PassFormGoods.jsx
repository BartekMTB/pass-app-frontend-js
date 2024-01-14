//import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import PropTypes from "prop-types";
//import schema from "./passForm.schema";
//import { useNewPassMutation } from "./passesApiSlice";

export const PassFormGoods = () => {
  // console.log(errors);
  // console.log("PassFormGood", defaultValues);
  const { register } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    name: "goods",
  });
  //  console.log(watch());
  //  console.log(watch(fieldname));

  return (
    <div>
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
  defaultValues: PropTypes.object.isRequired,
  control: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.string.isRequired,
};
