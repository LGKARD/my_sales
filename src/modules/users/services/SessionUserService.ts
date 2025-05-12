import AppError from "@shared/errors/AppErrors";
import { User } from "../database/entities/User";
import { usersRepositories } from "../database/repositories/UserRepositories";
import { compare } from "bcrypt";
import { Secret, sign } from "jsonwebtoken";

interface ISessionUser {
  email: string;
  password: string;
}

interface ISessionResponse {
  user: User;
  token: string;
}

export default class SessionUserService {
  async execute({email, password}: ISessionUser): Promise<ISessionResponse> {
    const user = await usersRepositories.findByEmail(email);
    if (!user) {
      throw new AppError("Email or password incorrect", 401);
    }

    const passwordConfirmed = await compare(password, user.password);
    if (!passwordConfirmed) {
      throw new AppError("Email or password incorrect", 401);
    }

    const token = sign({}, process.env.APP_SECRET as Secret, {
      subject: String(user.id),
      expiresIn: '1d',
    });


    return {
      user,
      token,
    };

  }
}
