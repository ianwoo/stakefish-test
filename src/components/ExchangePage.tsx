import { Exchange } from "../hooks/useCoingeckoExchangesData";

function exchangeDescription(id: string): string {
  let desc = "";
  switch (id) {
    case "binance":
      desc = "Binance was founded by Zhou Changpeng, also known as CZ.";
      break;
    case "okex":
      desc = "OKEx was initially headquartered in Beijing.";
      break;
    case "gdax":
      desc = "The third employee of Coinbase was Olaf Carlson-Wee, who graduated from Vassar College";
      break;
    case "ftx_spot":
      desc = "FTX was founded by Sam Bankman-Fried, who plays League of Legends during meetings";
      break;
    case "kucoin":
      desc = "The CEO of Kucoin is Johnny Lyu";
      break;
    case "huobi":
      desc =
        "I guess these major exchanges felt they are so big, everyone knows them already, so they do not need to write a description?";
      break;
    case "kraken":
      desc = "Release the Kraken!";
      break;
    case "binance_us":
      desc = "Binance was founded by Zhou Changpeng, also known as CZ.";
      break;
    default:
      desc = "No description found.";
  }
  return desc;
}

type Props = {
  exchange: Exchange;
};

function ExchangePage(props: Props) {
  const { exchange } = props;

  //there was no spec for how to style this so I kept it sparse and minimal
  return (
    <div>
      <img src={exchange.image} alt={exchange.name} />
      <h1>{exchange.name + " (" + exchange.country + ")"}</h1>
      <p>Since {exchange.year_established}</p>
      <h2>Trust Rank: #{exchange.trust_score_rank}</h2>
      <h3>Description:</h3>
      <p>{exchange.description === "" ? exchangeDescription(exchange.id) : exchange.description}</p>
    </div>
  );
}

export default ExchangePage;
