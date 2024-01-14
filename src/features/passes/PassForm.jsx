//import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { PassFormGoods } from "./PassFormGoods";
//import schema from "./passForm.schema";
//import { useNewPassMutation } from "./passesApiSlice";

export const PassForm = () => {
  const methods = useForm();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    //watch, wyswietla inputy realtime
    reset,
  } = useForm({
    defaultValues: {
      goods: [
        { name: "testname", amount: 2 },
        { name: "testname1", amount: 3 },
      ],
    },
  });

  //  console.log(watch());
  //  console.log(watch(fieldname));

  console.log(errors);

  const onSubmit = (data) => console.log("data", data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Array of Array Fields</h1>
        <p>
          The following example demonstrate the ability of building nested array
          fields.
        </p>

        {/*  <input
        {...register("personOnPass", { required: "this is required" })}
        placeholder="Person on Pass"
      />
      <p>{errors.personOnPass?.message}</p>
      <input
        {...register("personOnPassCompany", { required: true })}
        placeholder="Company name"
      />
      <input
        {...register("personOnPassID", { required: true })}
        placeholder="some kind of ID numer"
      />
      <input
        {...register("datePass", { required: true })}
        placeholder="2024-02-11"
      />
      <input
        {...register("authorPass", { required: true })}
        placeholder="Pan Dariusz"
      />
      <input
        {...register("directionOfOutflow", { required: true })}
        placeholder="doZakladu"
      />
      <input
        {...register("originOfGoods", { required: true })}
        placeholder="Produkcja odpad"
      />
      <input
        {...register("baseCreatingPass", { required: true })}
        placeholder="przekazanie odpadu, utylizacja"
      /> */}
        <PassFormGoods {...{ control, register, errors }} />

        <button type="button" onClick={() => reset()}>
          Reset
        </button>
        <input type="submit" />
      </form>
    </FormProvider>
  );
};

/* export const PassesForm = () => {
  const {
    data: pass,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useNewPassMutation();

  let content;

  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  } else if (isSuccess) {
    content = pass.newPass;
    //   content = pass.results.docs.map(({_id,passNumber,personOnPassCompany,baseCreatingPass})=> ({id:_id,passNumber:passNumber}))
  }
  console.log(content);
  return <div></div>;
};
<FieldArray
        {...{ control, register, defaultValues, getValues, setValue, errors }}
      />

       {    <input
        {...register("personOnPass", {
          required: "this is required",
          minLength: { value: 5, message: "min leteer" },
        })}
        placeholder="Person on Pass"
      />}

 */
