import { useEffect, useState } from "react";
import { getData } from "../services/ApiService";

function useGetData(category, endpoint) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData(category, endpoint).then((res) => setData(res.data.results));

    return () => setData([]);
  }, [category, endpoint]);

  return data;
}

export default useGetData;
