import { Router } from "express";
import { methods as usersController } from "../controllers/users.controller";
const router = Router();

router.get("/users", usersController.getUsers);
router.post("/users/add", usersController.addUser);
router.put("/users/:id", usersController.updateUser);
router.put("/users/disable/:id", usersController.disableUser);
router.put("/users/enable/:id", usersController.enableUser);


export default router;