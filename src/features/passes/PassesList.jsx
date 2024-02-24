import * as React from "react";
import { useGetPassesQuery } from "./passesApiSlice";
import css from "./PassesList.module.css";
import { useNavigate } from "react-router-dom";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { Box, Button, HStack, Icon } from "@chakra-ui/react";

export const PassesList = () => {
  const navigate = useNavigate();
  const [page, setPage] = React.useState(1);
  const {
    data: pass,
    isLoading,
    isSuccess,
    isError,
    isFetching,
    error,
  } = useGetPassesQuery(page);

  let content = "";

  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  } else if (isSuccess) {
    content = pass.results;
  }

  return (
    <div>
      <HStack spacing="14px">
        <Button
          onClick={() => setPage((prev) => prev - 1)}
          isLoading={isFetching}
          isDisabled={page == 1}
        >
          <Icon as={MdArrowBack} />
        </Button>
        <Button
          onClick={() => setPage((prev) => prev + 1)}
          isLoading={isFetching}
          isDisabled={page === content.totalPages}
        >
          <Icon as={MdArrowForward} />
        </Button>
        <Box>{`${page} / ${content.totalPages}`}</Box>
      </HStack>
      <ul className={css.passesList}>
        {Array.isArray(content.docs)
          ? content.docs.map(
              ({ _id, passNumber, personOnPassCompany, baseCreatingPass }) => (
                <li className={css.passesItem} key={_id}>
                  <p>
                    {passNumber}, {personOnPassCompany}, {baseCreatingPass}
                  </p>
                  <button
                    className={css.passBtn}
                    type="button"
                    onClick={() => {
                      console.log("clicked ", _id);
                      navigate("/editpass", { state: { _id: _id } });
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className={css.passBtn}
                    type="button"
                    onClick={() => {
                      console.log("clicked ", _id);
                      navigate("/printout", { state: { _id: _id } });
                    }}
                  >
                    Print
                  </button>
                </li>
              )
            )
          : null}
      </ul>
    </div>
  );
};
