import React from "react";
import { useGetPassByIdQuery } from "./passesApiSlice";
import PropTypes from "prop-types";
import css from "./PassPrintout.module.css";
/* eslint-disable react/display-name */
export const PassPrintout = React.forwardRef((props, ref) => {
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
          <table>
            <tr className={css.addflex}>
              <td style={{ width: 300 }}>Nazwa Materiału</td>
              <td style={{ width: 50 }}>J.m</td>
              <td style={{ width: 60 }}>Ilość</td>
              <td style={{ width: 250 }}>Uwagi</td>
            </tr>
            {pass.goods.map((el, index) => (
              <tr className={css.addflex} key={index}>
                <td style={{ width: 300 }}>{el.goodsName}</td>
                <td style={{ width: 50 }}>{el.unit}</td>
                <td style={{ width: 60 }}>{el.quantity}</td>
                <td style={{ width: 250 }}>{el.comments}</td>
              </tr>
            ))}
          </table>

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

        <div className={css.addflex}>
          <div className={css.singtab}>
            <h3>Adnotacja Ochrony</h3>
            <p>
              Kontrole przeprowadził..........................................
            </p>
            <p>Wpuscił/wypuścił przez brame nr.........</p>
            <p>Data:................20...r. godz....... </p>
          </div>
          <div className={css.singtab}>
            <h3>Adnotacja Ochrony</h3>
            <p>W przypadku zwrotu po naprawie</p>
            <p>Data:................20...r. godz....... </p>
          </div>
          <div className={css.singtab}>
            <h3>Podpis Os. upowaznionej</h3>
            <p>...................................................... </p>
          </div>
        </div>
      </div>
    );
  }
});

PassPrintout.propTypes = {
  _id: PropTypes.string.isRequired,
};
