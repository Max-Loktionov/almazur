import axios from "axios";
import { useEffect, useState } from "react";
const HOST = process.env.HOST;

const Partners = () => {
  const [partner, setPartner] = useState(null);
  const getPartner = async () => {
    try {
      const ROUTE = `${HOST}/partner`;
      const { data } = await axios.get(ROUTE, { withCredentials: true });
      console.log("getPartner7 data :", data.data.result);
      // return (testPartner = data.data.result[0].title);
      setPartner(data.data.result[0].title);
    } catch (error) {
      console.log("getPartner10 error here");
      console.log(error);
    }
  };

  return (
    <>
      <h1>Наші партнери</h1>
      <p>Cards фото та відео</p>
      <div>
        <button onClick={getPartner}>Click for getting</button>

        {partner && <div>{partner}</div>}
      </div>
    </>
  );
};

export default Partners;
