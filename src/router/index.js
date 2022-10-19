import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import MovieDetailsPage from "../pages/MovieDetailsPage";
import NotFoundPage from "../pages/NotFoundPage";
import PopularMoviesPage from "../pages/PopularMoviesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "movies/:id",
        element: <MovieDetailsPage />,
      },
      {
        path: "movies",
        element: <PopularMoviesPage />,
      },
    ],
  },
]);

export default router;
