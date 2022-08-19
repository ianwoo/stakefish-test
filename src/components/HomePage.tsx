import { Exchange } from "../hooks/useCoingeckoExchangesData";
import TableRow from "./TableRow";
import "../scss/HomePage.scss";
import { useNavigate } from "react-router-dom";

type Props = {
  coingeckoExchangesData: Exchange[];
};

function HomePage(props: Props) {
  const { coingeckoExchangesData } = props;

  //i am programmatically navigating here to avoid the ugly link underlining styling
  //this also should not override the clicking of the URL / link
  const navigate = useNavigate();

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
      {coingeckoExchangesData.map((ex: Exchange, i: number) => (
        <div onClick={() => navigate("/" + ex.trust_score_rank)}>
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
        </div>
      ))}
    </div>
  );
}

export default HomePage;
