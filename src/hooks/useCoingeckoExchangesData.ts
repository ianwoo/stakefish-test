import ky from "ky";
import { useEffect, useState } from "react";

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
  const [exchanges, setExchanges] = useState<any>({});

  useEffect(() => {
    const fetchBalance = async () => {
      const _exchanges = await getCoingeckoExchangesData();
      setExchanges(_exchanges);
    };
    fetchBalance();
  }, []);

  return exchanges;
};
