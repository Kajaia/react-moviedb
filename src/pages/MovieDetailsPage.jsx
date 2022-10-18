import { useParams } from "react-router-dom";

function MovieDetailsPage() {
  const params = useParams();

  return <>{params.id}</>;
}

export default MovieDetailsPage;
