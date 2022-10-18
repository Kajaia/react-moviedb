import { useEffect, useState } from "react";
import { getMovieDetails } from "../services/ApiService";

function useGetMovieDetails(id) {
  const [data, setData] = useState({});

  useEffect(() => {
    getMovieDetails(id).then((res) => setData(res.data));

    return () => setData({});
  }, [id]);

  return data;
}

export default useGetMovieDetails;
