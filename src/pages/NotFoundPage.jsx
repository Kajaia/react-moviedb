import { Link, useRouteError } from "react-router-dom";

function NotFoundPage() {
  const error = useRouteError();

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100">
      <div className="col-md-4 text-center">
        <h1>{error.status}</h1>
        <p>{error.statusText}</p>
        <Link to="/" className="text-decoration-none">
          <i className="fas fa-angle-left fa-sm me-1"></i>
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
