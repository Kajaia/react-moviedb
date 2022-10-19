function MovieImages({ images }) {
  return (
    <>
      <div className="container">
        <h2 className="fw-bold mt-4 mb-3">Gallery</h2>
        <div className="d-flex movies-wrapper g-3">
          {images.length > 0 &&
            images.map((image, index) => (
              <div key={index} className="col-6 col-md-3 col-lg-2">
                <div className="card rounded-3 bg-transparent border-0">
                  <img
                    className="rounded-3 "
                    src={`https://image.tmdb.org/t/p/w300${image.file_path}`}
                    alt={`Pic ${index}`}
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default MovieImages;
