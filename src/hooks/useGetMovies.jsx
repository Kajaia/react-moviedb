import { useEffect, useState } from "react";
import { getMovies } from "../services/ApiService";

function useGetMovies(endpoint) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getMovies(endpoint).then((res) => setData(res.data.results));

    return () => setData([]);
  }, [endpoint]);

  return data;
}

export default useGetMovies;
