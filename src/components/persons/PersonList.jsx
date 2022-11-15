import Link from "next/link";
import LoadingSpinner from "../layout/LoadingSpinner";

function PersonList(props) {
  const persons = props.data;

  return (
    <>
      <h2 className="fw-bold mt-4 mb-3">{props.title}</h2>
      <div className="row justify-content-center mb-4 g-4">
        {persons.length > 0 ? (
          persons.map((person) => (
            <div key={person.id} className="col-6 col-md-3 col-lg-2">
              <div className="card rounded-3 bg-transparent border-0">
                <img
                  width="100%"
                  height="248px"
                  className="rounded-3 cover"
                  src={
                    person.profile_path
                      ? `https://image.tmdb.org/t/p/w300${person.profile_path}`
                      : `https://ui-avatars.com/api/?background=024162&color=fff&size=256&name=${person.name}`
                  }
                  alt={person.name}
                  loading="lazy"
                />
                <Link
                  href={`/person/${person.id}`}
                  className="stretched-link"
                ></Link>
                <div className="mt-2 mx-3">
                  <h6 className="fw-bold mb-0">{person.name}</h6>
                  <small className="text-secondary">Some movies here</small>
                </div>
              </div>
            </div>
          ))
        ) : (
          <LoadingSpinner />
        )}
      </div>
    </>
  );
}

export default PersonList;
