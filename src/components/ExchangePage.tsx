import { Link } from "react-router-dom";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { Exchange } from "../hooks/useCoingeckoExchangesData";
import "../scss/ExchangePage.scss";

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

function twitterScreenName(id: string): string {
  let twitterScreenName = "";
  switch (id) {
    case "okex":
      twitterScreenName = "okx";
      break;
    case "gdax":
      twitterScreenName = "coinbase";
      break;
    case "ftx_spot":
      twitterScreenName = "FTX_Official";
      break;
    case "gate":
      twitterScreenName = "gate_io";
      break;
    case "kucoin":
      twitterScreenName = "kucoincom";
      break;
    case "huobi":
      twitterScreenName = "HuobiGlobal";
      break;
    case "kraken":
      twitterScreenName = "krakenfx";
      break;
    case "crypto_com":
      twitterScreenName = "cryptocom";
      break;
    case "binance_us":
      twitterScreenName = "BinanceUS";
      break;
    default:
      twitterScreenName = id;
  }
  return twitterScreenName;
}

type Props = {
  exchange: Exchange;
};

function ExchangePage(props: Props) {
  const { exchange } = props;

  //there was no spec for how to style this so I kept it sparse and minimal
  return (
    <div className="exchange-page">
      <Link className="link" to={"/"}>
        <div className="back-button-wrapper">
          <svg
            // even when class names aren't necessary for styling, its helpful to mark elements for other coders
            className="back-button"
            width="20"
            height="15"
            viewBox="0 0 20 15"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4.7875 6.25L9.2625 1.7625L7.5 0L0 7.5L7.5 15L9.2625 13.2375L4.7875 8.75H20V6.25H4.7875Z" />
          </svg>
          <img className="logo" src={exchange.image} alt={exchange.name} />
        </div>
      </Link>
      <div className="content">
        <h1 className="title">{exchange.name + " (" + exchange.country + ")"}</h1>
        <p className="year_established">Since {exchange.year_established}</p>
        <h2 className="trust_score_rank">Trust Rank: #{exchange.trust_score_rank}</h2>
        <h3 className="desc-label">Description:</h3>
        <p className="description">
          {exchange.description === "" ? exchangeDescription(exchange.id) : exchange.description}
        </p>

        {/* I feel like the only relevant social media when it comes to web3 is twitter, and it conveniently helps me fill the page with content */}
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName={twitterScreenName(exchange.id)}
          theme="light"
          noHeader
          noFooter
          options={{ height: "100%" }}
          transparent
          noScrollbar
        />
      </div>
    </div>
  );
}

export default ExchangePage;
