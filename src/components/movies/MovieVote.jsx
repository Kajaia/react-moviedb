function MovieVote({ vote }) {
  const percentage = vote * 10;

  return (
    <span
      className={`badge bg-${
        percentage < 50
          ? "danger text-white"
          : percentage >= 80
          ? "success text-white"
          : "warning text-dark"
      } rounded-pill shadow-sm position-absolute m-2`}
    >
      {percentage}%
    </span>
  );
}

export default MovieVote;
