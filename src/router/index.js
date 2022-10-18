import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import MoviePage from "../pages/MoviePage";
import NotFound from "../pages/NotFound";
import PopularMoviesPage from "../pages/PopularMoviesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "movie/:id",
        element: <MoviePage />,
      },
      {
        path: "movies",
        element: <PopularMoviesPage />,
      },
    ],
  },
]);

export default router;
