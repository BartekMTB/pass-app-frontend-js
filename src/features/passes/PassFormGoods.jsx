import { useFieldArray, useFormContext } from "react-hook-form";
import css from "./PassForm.module.css";

export const PassFormGoods = () => {
  const { register } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    name: "goods",
  });

  return (
    <div>
      <span>Fields below can&apos;t be empty</span>
      <ul>
        {fields.map((field, index) => {
          return (
            <li key={field.id}>
              <input
                style={{ width: "180px" }}
                {...register(`goods.${index}.goodaName`, {
                  required: true,
                })}
                placeholder="Products name"
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
                style={{ width: "55px" }}
                className={css.formInputGoods}
                {...register(`goods.${index}.quantity`, {
                  required: true,
                })}
                placeholder="Quantity"
              />
              <input
                style={{ width: "210px" }}
                className={css.formInputGoods}
                {...register(`goods.${index}.comments`, {
                  required: true,
                })}
                placeholder="Comment"
              />
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
        add a line
      </button>
    </div>
  );
};
