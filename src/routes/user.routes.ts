import { Router } from "express";

import UserModule from "../app/modules/user.module";

const userRouter = Router();

const userModule = UserModule.build();

userRouter.post("/", userModule.create.bind(userModule));

export default userRouter;
