import React from "react";
import CurrencyRatings from "../CurrencyRatings/CurrencyRatings";
import { Banner } from "./StyledAppBanner";

function AppBanner() {
  return (
    <Banner>
      <h1>Hello Your app note!</h1>
      <CurrencyRatings />
    </Banner>
  );
}

export default AppBanner;
