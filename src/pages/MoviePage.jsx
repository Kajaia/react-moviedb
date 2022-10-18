import { useParams } from "react-router-dom";

function MoviePage() {
  const params = useParams();

  return <>{params.id}</>;
}

export default MoviePage;
