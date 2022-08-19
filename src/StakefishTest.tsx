import "./global.scss";
import { useCoingeckoExchangesData } from "./hooks/useCoingeckoExchangesData";

function StakefishTest() {
  const coingeckoExchangesData = useCoingeckoExchangesData();

  console.log(coingeckoExchangesData);
  return (
    <div className="stakefish-test">
      <h1>Stakefish Test, Ian Woo</h1>
    </div>
  );
}

export default StakefishTest;
