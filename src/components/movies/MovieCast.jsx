import Image from "next/image";
import Link from "next/link";

function MovieCast({ credits }) {
  return (
    <div className="container">
      <h2 className="fw-bold mt-4 mb-3">Cast</h2>
      <div className="d-flex movies-wrapper g-3">
        {credits.length > 0 &&
          credits.map((credit) => (
            <div key={credit.id} className="col-6 col-md-3 col-lg-2">
              <div className="card rounded-3 bg-transparent border-0">
                <div
                  style={{
                    width: "100%",
                    height: "248px",
                    position: "relative",
                  }}
                >
                  <Image
                    className="rounded-3 cover"
                    src={
                      credit.profile_path
                        ? `https://image.tmdb.org/t/p/w300${credit.profile_path}`
                        : `https://ui-avatars.com/api/?background=024162&color=fff&size=256&name=${credit.name}`
                    }
                    alt={credit.name}
                    layout="fill"
                  />
                </div>
                <Link
                  href={`/person/${credit.id}`}
                  className="stretched-link"
                ></Link>
                <div className="mt-2 mx-3">
                  <h6 className="fw-bold mb-0">{credit.name}</h6>
                  <small className="text-secondary">{credit.character}</small>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default MovieCast;
