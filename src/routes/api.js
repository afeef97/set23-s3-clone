import { Router } from "express";
import * as authController from "../controllers/auth/authController";

const apiRoutes = Router();

apiRoutes.post("/registerUser", authController.registerUser);
apiRoutes.post("/loginUser", authController.loginUser);
apiRoutes.get("/logoutUser", authController.logoutUser);

export default apiRoutes;
