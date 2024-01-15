import { useFieldArray, useFormContext } from "react-hook-form";
import css from "./PassForm.module.css";

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
              <input
                className={css.formInputGoods}
                {...register(`goods.${index}.goodaName`)}
                placeholder="Good name"
              />
              <select {...register(`goods.${index}.unit`, { required: true })}>
                <option value="">Select unit</option>
                <option value="KG">KG</option>
                <option value="L">L</option>
                <option value="M2">M2</option>
                <option value="M3">M3</option>
                <option value="SZT">SZT</option>
              </select>
              <input
                className={css.formInputGoods}
                {...register(`goods.${index}.quantity`)}
              />
              <input
                className={css.formInputGoods}
                {...register(`goods.${index}.comments`)}
              />
              {/* unit: Joi.string().valid('KG', 'L', 'M2', 'M3', 'SZT').required(), // enum */}
              <button
                className={css.passBtn}
                type="button"
                onClick={() => remove(index)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
      <button
        className={css.passBtn}
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
