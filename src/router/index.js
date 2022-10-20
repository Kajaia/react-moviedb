import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import MovieDetailsPage, {
  loader as loadMovieDetails,
} from "../pages/MovieDetailsPage";
import NotFoundPage from "../pages/NotFoundPage";
import PopularMoviesPage from "../pages/PopularMoviesPage";
import PopularShowsPage from "../pages/PopularShowsPage";

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
        path: "movie",
        element: <PopularMoviesPage />,
      },
      {
        path: "movie/:id",
        element: <MovieDetailsPage />,
        loader: loadMovieDetails,
      },
      {
        path: "tv",
        element: <PopularShowsPage />,
      },
      {
        path: "tv/:id",
        element: <MovieDetailsPage />,
        loader: loadMovieDetails,
      },
    ],
  },
]);

export default router;
