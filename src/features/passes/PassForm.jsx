import { useForm, FormProvider } from "react-hook-form";
import { PassFormGoods } from "./PassFormGoods";
import css from "./PassForm.module.css";

export const PassForm = () => {
  /*   const defaultValues = {
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
      { name: "testname", amount: 2 },
      { name: "testname1", amount: 3 },
      { name: "testname2", amount: 4 },
    ],
  }; */

  const defaultValues1 = {};
  const methods = useForm({ defaultValues1 });
  console.log(methods);

  const onSubmit = (data) => console.log("data", data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div>
          <input
            className={css.formInput}
            {...methods.register("personOnPass", {
              required: "  this is required",
            })}
            placeholder="Person on Pass"
          />
          <span>{methods.formState.errors.personOnPass?.message}</span>
        </div>
        <input
          className={css.formInput}
          {...methods.register("personOnPassCompany", { required: true })}
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
        <input
          className={css.formInput}
          {...methods.register("authorPass", { required: true })}
          placeholder="issuing passes"
        />
        {/*  <input
          {...methods.register("directionOfOutflow", { required: true })}
          placeholder="doZakladu"
        /> */}
        <select {...methods.register("directionOfOutflow", { required: true })}>
          <option value="">Select directionOfOutflow</option>
          <option value="doZakladu">doZakladu</option>
          <option value="naZewnarz">naZewnarz</option>
        </select>

        <input
          className={css.formInput}
          {...methods.register("originOfGoods", { required: true })}
          placeholder="origin of the goods"
        />
        <input
          className={css.formInput}
          {...methods.register("baseCreatingPass", { required: true })}
          placeholder="basis for creating a pass"
        />
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
