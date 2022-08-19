import { Exchange } from "../hooks/useCoingeckoExchangesData";

type Props = {
  exchange: Exchange;
};

function ExchangePage(props: Props) {
  const { exchange } = props;
  return <div>{exchange.name}</div>;
}

export default ExchangePage;
