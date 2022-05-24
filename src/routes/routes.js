import userRoutes from "./users-routes.js";
import authRoutes from "./authRoutes.js";
import genderRoutes from "./genderRoutes.js";
import movieRoute from "./movieRoute.js";

export const renderRoutes = [
  {
    method: "GET",
    url: "/health",
    handler: (_, res) => {
      res.status(200).send();
    },
  },
  ...Object.values(userRoutes),
  ...Object.values(authRoutes),
  ...Object.values(genderRoutes),
  ...Object.values(movieRoute),

];

export default (fastify, opts, next) => {
  fastify.decorateRequest("user", null);

  fastify.addHook("onRequest", (req, res, next) => {
    console.log("onRequest");
    req.user = null;
    next();
  });
  for (let route of renderRoutes) {
    fastify.route(route);
  }
  next();
};
