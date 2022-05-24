import * as movieController from "../controllers/movieController.js";
import { validateRequest } from "../middleware/auth.js";

export default {
    getAllMovies:{
    method: "GET",
    url: "/movies",
    handler: movieController.getAllMovies,
  },
  getUniqueMovie:{
    method: "GET",
    url: "/movies/:id",
    handler: movieController.getUniqueMovie,
  },
    createMovies: {
    method: "POST",
    url: "/movies",
    preHandler: [validateRequest],
    handler: movieController.createMovies,
  }, 
  updateMovies: {
  method: "PUT",
  url: "/movies/:id",
  preHandler: [validateRequest],
  handler: movieController.updateMovies,
},
  deleteMovies: {
  method: "DELETE",
  url: "/movies",
  preHandler: [validateRequest],
  handler: movieController.deleteMovies,
}
};
