import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import MovieDetailsPage, {
  loader as loadMovieDetails,
} from "../pages/MovieDetailsPage";
import NotFoundPage from "../pages/NotFoundPage";
import PersonDetailsPage, {
  loader as loadPersonDetails,
} from "../pages/PersonDetailsPage";
import PopularMoviesPage from "../pages/PopularMoviesPage";
import PopularPersonsPage from "../pages/PopularPersonsPage";
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
      {
        path: "person",
        element: <PopularPersonsPage />,
      },
      {
        path: "person/:id",
        element: <PersonDetailsPage />,
        loader: loadPersonDetails,
      },
    ],
  },
]);

export default router;
