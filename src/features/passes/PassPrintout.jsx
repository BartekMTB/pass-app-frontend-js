import React from "react";
import { useGetPassByIdQuery } from "./passesApiSlice";
import PropTypes from "prop-types";
import css from "./PassPrintout.module.css";
/* eslint-disable react/display-name */
export const PassPrintout = React.forwardRef((props, ref) => {
  /*   const {
    data: pass,
    isLoading,
    isSuccess,
    isError,
    error,
    refetch,
  } = useGetPassByIdQuery(_id);
 */

  //console.log(props);
  const {
    data: pass,
    isSuccess,
    isError,
    error,
    isLoading,
  } = useGetPassByIdQuery(props._id);

  console.log(pass);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <div>{error.toString()}</div>;
  }
  if (isSuccess) {
    return (
      <div className={css.maindiv} ref={ref}>
        <div>
          <div className={css.addflex}>
            <span>Pieczęć firmowa</span>
            <span>Data: {pass.datePass.substring(0, 10)}</span>
          </div>
          <h2>Przepustka materiałowa nr {pass.passNumber}</h2>
          <span>
            Zezwala sie Panu/Pani: {pass.personOnPass}, ID dokumentu tożsamości:{" "}
            {pass.personOnPassID}, zatrudnionej w firmie:{" "}
            {pass.personOnPassCompany}
          </span>
          <p>
            na transport towaru: {pass.directionOfOutflow}, w dniu:{" "}
            {pass.datePass.substring(0, 10)}, następujących metriałów,
            przedmiotów, urządzeń:
          </p>
          {pass.goods.map((el) => el.goodsName)}
          <p>Dane odnośnie materiałów:</p>
          <p>1. Pochodzenie materiału: {pass.originOfGoods}</p>
          <p>
            2. Miejsce i cel wwozu, wywozu, wniesienia, wyniesienia, zamowienia,
            zwrotu po naprawie
          </p>
          <p>
            3. Podstawa wydania przepustki(nr zlecenia, zamówienia, nr dowodu
            sprzedazy makulatury):
          </p>
          <p>{pass.baseCreatingPass} </p>
          <p>
            4.
            Odebrał:...............................................................
          </p>
        </div>

        <div className={css.singtab}>
          <div>
            <h6>Adnotacja Ochrony</h6>
          </div>
          <div>
            <h6>Adnotacja Ochrony</h6>
          </div>
          <div>
            <h6>Podpis Os. upowaznionej</h6>
          </div>
        </div>
      </div>
    );
  }
});

PassPrintout.propTypes = {
  _id: PropTypes.string.isRequired,
};
