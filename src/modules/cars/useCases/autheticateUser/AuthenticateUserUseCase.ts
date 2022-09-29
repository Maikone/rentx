import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/";


interface IRequest {
    email: string;
    password: string;
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) { }


    async execute({ email, password }: IRequest) {
        const user = await this.usersRepository.findbyEmail(email);


        if(!user){
            throw new Error("Email or password incorrect");
        }
    }

}

export { AuthenticateUserUseCase }