import HomePage from "./components/HomePage";
import "./global.scss";
import { Exchange, useCoingeckoExchangesData } from "./hooks/useCoingeckoExchangesData";

function StakefishTest() {
  const coingeckoExchangesData: Exchange[] = useCoingeckoExchangesData();

  console.log(coingeckoExchangesData);
  return <HomePage coingeckoExchangesData={coingeckoExchangesData} />;
}

export default StakefishTest;
