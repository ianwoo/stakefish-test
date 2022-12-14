import ky from "ky";
import { useEffect, useState } from "react";

export type Exchange = {
  country: string;
  description: string;
  has_trading_incentive: boolean;
  id: string;
  image: string;
  name: string;
  trade_volume_24h_btc: number;
  trade_volume_24h_btc_normalized: number;
  trust_score: number;
  trust_score_rank: number;
  url: string;
  year_established: number;
}

const getCoingeckoExchangesData = async () => {
  const result = await ky
    .get(
      "https://api.coingecko.com/api/v3/exchanges?per_page=10&page=1"
    )
    .json()
    .then((res: any) => res);
  return result;
};

export const useCoingeckoExchangesData = () => {
  const [exchanges, setExchanges] = useState<Exchange[]>([]);

  useEffect(() => {
    const fetchExchanges = async () => {
      const _exchanges = await getCoingeckoExchangesData();
      setExchanges(_exchanges);
    };
    fetchExchanges();
    //currently the hook only fetches the data once on mount, but I could add a refresh timeout here and stick it in the dependency array
    //to control exactly when I want the data to re-fetch
  }, []);

  return exchanges;
};
