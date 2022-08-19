import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import "./global.scss";
import { Exchange, useCoingeckoExchangesData } from "./hooks/useCoingeckoExchangesData";

function StakefishTest() {
  const coingeckoExchangesData: Exchange[] = useCoingeckoExchangesData();

  console.log(coingeckoExchangesData);

  //since the test specifically stated for each of the exchanges to be in its own *page* I decided
  //to use react-router to handle it, which gives the added advantage of helping me scope my css
  //since each scss file will be scoped to each route
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage coingeckoExchangesData={coingeckoExchangesData} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default StakefishTest;
