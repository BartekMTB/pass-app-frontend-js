import { useForm, FormProvider } from "react-hook-form";
import { PassFormGoods } from "./PassFormGoods";
import css from "./PassForm.module.css";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";

export const PassForm = () => {
  const PassSchema = Joi.object({
    passNumber: Joi.string().forbidden(),
    personOnPass: Joi.string().required(),
    personOnPassCompany: Joi.string().optional(),
    personOnPassID: Joi.string().optional(),
    datePass: Joi.string().optional(),
    // '2023-02-11T00:00:00.000Z' zrobic validacje bardziej szczegolowa
    authorPass: Joi.string().required(),
    directionOfOutflow: Joi.string().valid("doZakladu", "naZewnarz").required(), // enum
    originOfGoods: Joi.string().required(),
    baseCreatingPass: Joi.string().required(),
    canceled: Joi.boolean().optional(),
    goods: Joi.array()
      .min(1)
      .items({
        goodaName: Joi.string().required(),
        unit: Joi.string().valid("KG", "L", "M2", "M3", "SZT").required(), // enum
        quantity: Joi.number().required(),
        comments: Joi.string().required(),
      })
      .required(),
  });

  const defaultValues = {
    personOnPass: "John",
    personOnPassCompany: "Example Company",
    personOnPassID: "FK 3232",
    datePass: "2023-02-11",
    authorPass: "Pan Dariusz",
    directionOfOutflow: "doZakladu",
    originOfGoods: "Produkcja odpad",
    baseCreatingPass: "przekazanie odpadu, utylizacja",
    canceled: false,
    goods: [
      {
        goodaName: "Makulatura",
        unit: "KG",
        quantity: "500",
        comments: "mutylizacja opon",
      },
    ],
  };

  /* const defaultValues = {
    goods: [
      {
        goodaName: "",
        unit: "",
        quantity: "",
        comments: "",
      },
    ],
  }; */
  const methods = useForm({
    defaultValues,
    resolver: joiResolver(PassSchema),
  });
  console.log(methods);

  const onSubmit = (data) => console.log("data", data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div>
          <input
            className={css.formInput}
            {...methods.register("personOnPass", {})}
            placeholder="Person on Pass"
          />
          <span>{methods.formState.errors.personOnPass?.message}</span>
        </div>
        <input
          className={css.formInput}
          {...methods.register("personOnPassCompany")}
          placeholder="Person's company name"
        />
        <input
          className={css.formInput}
          {...methods.register("personOnPassID")}
          placeholder="ID numer"
        />
        <input
          className={css.formInput}
          {...methods.register("datePass")}
          placeholder="Date Pass"
        />
        <div>
          <input
            className={css.formInput}
            {...methods.register("authorPass", {
              required: "  Please enter pass issuer full name ",
            })}
            placeholder="issuing passes"
          />
          <span>{methods.formState.errors.authorPass?.message}</span>
        </div>
        <div>
          <select
            style={{ width: "220px" }}
            {...methods.register("directionOfOutflow", {
              required: "  Please select the direction of goods distribution",
            })}
          >
            <option value="">Select directionOfOutflow</option>
            <option value="doZakladu">doZakladu</option>
            <option value="naZewnarz">naZewnarz</option>
          </select>
          <span>{methods.formState.errors.directionOfOutflow?.message}</span>
        </div>
        <div>
          <input
            className={css.formInput}
            {...methods.register("originOfGoods", {
              required: "  Please enter origin of the goods",
            })}
            placeholder="origin of the goods"
          />
          <span>{methods.formState.errors.originOfGoods?.message}</span>
        </div>
        <div>
          <input
            className={css.formInput}
            {...methods.register("baseCreatingPass", {
              required: "  Please enter basis for creating a pass",
            })}
            placeholder="basis for creating a pass"
          />
          <span>{methods.formState.errors.baseCreatingPass?.message}</span>
        </div>
        <PassFormGoods {...{ methods }} />
        <div>
          <button
            type="button"
            className={css.passBtn}
            onClick={() => methods.reset()}
          >
            Reset
          </button>
          <button type="submit" className={css.passBtn}>
            Submit
          </button>
        </div>
      </form>
    </FormProvider>
  );
};
