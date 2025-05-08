import AppError from "@shared/errors/AppErrors";
import { usersRepositories } from "../database/repositories/UserRepositories";
import { hash } from "bcrypt";
import { User } from "../database/entities/User";

interface ICreateUser {
  name: string;
  email: string;
  password: string;
}

export default class CreateUserService {
  async execute({ name, email, password }: ICreateUser): Promise<User> {
    const emailExists = await usersRepositories.findByEmail(email);

    if (emailExists) {
      throw new AppError("Email already exists", 409);
    }
    const hashedPassword = await hash(password, 10);

    const user = usersRepositories.create({
      name,
      email,
      password: hashedPassword,
    });

    await usersRepositories.save(user);
    return user;

  }
}
