import { useGetPassesQuery } from "./passesApiSlice";
import css from "./PassesList.module.css";

export const PassesList = () => {
  const queryParams = {
    //  limit: "2",
    //  page: "2",
    datePass: "2023",
  };

  const {
    data: pass,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPassesQuery(queryParams);

  let content;

  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  } else if (isSuccess) {
    content = pass.results.docs;
    //   content = pass.results.docs.map(({_id,passNumber,personOnPassCompany,baseCreatingPass})=> ({id:_id,passNumber:passNumber}))
  }
  //const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));
  console.log(content);

  return (
    <div>
      <ul className={css.passesList}>
        {Array.isArray(content)
          ? content.map(
              ({ _id, passNumber, personOnPassCompany, baseCreatingPass }) => (
                <li className={css.passesItem} key={_id}>
                  <p>
                    {passNumber}, {personOnPassCompany}, {baseCreatingPass}
                  </p>
                  <button className={css.passBtn}>edit</button>
                </li>
              )
            )
          : null}
      </ul>
    </div>
  );
};
