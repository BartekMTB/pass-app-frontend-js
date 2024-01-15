import { useForm, FormProvider } from "react-hook-form";
import { PassFormGoods } from "./PassFormGoods";
import css from "./PassForm.module.css";

export const PassForm = () => {
  /* const defaultValues = {
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
  }; */

  const defaultValues = {
    goods: [
      {
        goodaName: "",
        unit: "",
        quantity: "",
        comments: "",
      },
    ],
  };
  const methods = useForm({ defaultValues });
  console.log(methods);

  const onSubmit = (data) => console.log("data", data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div>
          <input
            className={css.formInput}
            {...methods.register("personOnPass", {
              required: "  Please enter full name person on Pass",
            })}
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
