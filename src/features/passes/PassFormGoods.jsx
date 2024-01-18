import { useFieldArray, useFormContext } from "react-hook-form";
import css from "./PassForm.module.css";

export const PassFormGoods = () => {
  const { register, formState } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    name: "goods",
  });

  return (
    <div>
      {formState.errors.goods && <p>{formState.errors.goods.root?.message}</p>}
      <ul>
        {fields.map((field, index) => {
          return (
            <li key={field.id}>
              <input
                style={{ width: "180px" }}
                {...register(`goods.${index}.goodaName`)}
                placeholder="Products name"
              />

              <select {...register(`goods.${index}.unit`)}>
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
                {...register(`goods.${index}.quantity`)}
                placeholder="Quantity"
              />
              <input
                style={{ width: "210px" }}
                className={css.formInputGoods}
                {...register(`goods.${index}.comments`)}
                placeholder="Comment"
              />
              <button
                className={css.passBtn}
                type="button"
                onClick={() => remove(index)}
              >
                Delete
              </button>
              {formState.errors.goods && (
                <p>{formState.errors.goods[index]?.goodaName?.message}</p>
              )}
              {formState.errors.goods && (
                <p>{formState.errors.goods[index]?.unit?.message}</p>
              )}
              {formState.errors.goods && (
                <p>{formState.errors.goods[index]?.quantity?.message}</p>
              )}
              {formState.errors.goods && (
                <p>{formState.errors.goods[index]?.comments?.message}</p>
              )}
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
/* {Array.isArray(formState.errors.goods) ? (
  <span>{formState.errors.goods[index].goodaName?.message}</span>
) : null} */
