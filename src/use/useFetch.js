import { useState, useEffect } from "react";

const baseApiUrl = "http://api.nbp.pl/api/exchangerates/rates/A/";

export const useFetch = () => {
  const [response, setresponse] = useState([]);
  useEffect(() => {
    const getCurrency = async () => {
      const res = await Promise.all([
        fetch(`${baseApiUrl}EUR`),
        fetch(`${baseApiUrl}USD`),
        fetch(`${baseApiUrl}GBP`),
      ]);
      const json = await Promise.all(res.map((data) => data.json()));
      setresponse(json);
    };
    getCurrency();
  }, []);

  return response;
};
