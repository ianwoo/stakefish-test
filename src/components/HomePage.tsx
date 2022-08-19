import { Exchange } from "../hooks/useCoingeckoExchangesData";
import TableRow from "./TableRow";
import "../scss/HomePage.scss";

type Props = {
  coingeckoExchangesData: Exchange[];
};

function HomePage(props: Props) {
  const { coingeckoExchangesData } = props;

  return (
    <div className="stakefish-test">
      <h1>Stakefish Test, Ian Woo</h1>
      <div className="header-row">
        <div className="header first">
          <span>Exchange Name</span>
        </div>
        <div className="header">
          <span>Country</span>
        </div>
        <div className="header">
          <span>URL</span>
        </div>
        <div className="header">
          <span>Logo</span>
        </div>
        <div className="header last">
          <span>Trust Rank</span>
        </div>
      </div>
      {coingeckoExchangesData.map((ex: any, i: number) => (
        <TableRow
          key={i}
          data={{
            name: ex.name,
            country: ex.country,
            url: ex.url,
            logo: ex.image,
            trust_score_rank: ex.trust_score_rank,
          }}
        />
      ))}
    </div>
  );
}

export default HomePage;
