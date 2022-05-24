import * as genderController from "../controllers/genderController.js";
import { validateRequest } from "../middleware/auth.js";

export default {
  getAllGender:{
    method: "GET",
    url: "/genders",
    handler: genderController.getAllGender,
  },
  createGender: {
    method: "POST",
    url: "/genders",
    preHandler: [validateRequest],
    handler: genderController.createGender,
  },
};

