import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Helmet } from "react-helmet";
import css from "./NewPassPage.module.css";
import { useLocation } from "react-router-dom";
import { PassPrintout } from "../features/passes/PassPrintout";

const PrintoutPass = () => {
  // console.log("History.state after pushState: ", history.state);
  const location = useLocation();
  //var ID = loc.state._id;
  //console.log("heh", ID);
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className={css.main_div}>
      <Helmet>
        <title>Printout</title>
      </Helmet>
      <PassPrintout ref={componentRef} _id={location.state._id} />
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  );
};

export default PrintoutPass;
