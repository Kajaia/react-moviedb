import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";

function Error404() {
  return (
    <Layout>
      <Head>
        <title>404 Not Found - MovieDB</title>
      </Head>
      <div className="d-flex align-items-center justify-content-center min-vh-100">
        <div className="col-md-4 text-center">
          <h1>404</h1>
          <p>Not Found</p>
          <Link href="/" className="text-decoration-none">
            <i className="fas fa-angle-left fa-sm me-1"></i>
            Back to Homepage
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default Error404;
