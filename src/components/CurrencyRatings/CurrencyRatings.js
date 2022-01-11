import React from "react";
import { useFetch } from "../../use/useFetch";
import {
  Currency,
  CurrencyCode,
  CurrencyValue,
  Ratings,
} from "./StyledCurrencyRatings";

function CurrencyRatings() {
  const response = useFetch();
  return (
    <Ratings>
      {response.map((currency) => (
        <Currency key={currency.code}>
          <CurrencyCode>{currency.code}</CurrencyCode>
          <CurrencyValue>{currency.rates[0].mid}</CurrencyValue>
        </Currency>
      ))}
    </Ratings>
  );
}

export default CurrencyRatings;
