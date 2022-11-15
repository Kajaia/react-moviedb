import Link from "next/link";

function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-blue shadow-sm">
      <div className="container py-1">
        <Link href="/" className="navbar-brand">
          MovieDB
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-lg-0">
            <li className="nav-item">
              <Link href="/movie" className="nav-link">
                Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/tv" className="nav-link">
                TV Shows
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/person" className="nav-link">
                People
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
