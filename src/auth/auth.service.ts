import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/interfaces/users.interface';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService, private jwtService: JwtService) { }

    async validateUser(username: string, pass: string): Promise<Partial<User> | null> {
        const user = await this.usersService.findOne(username);

        if (user && user.password === pass) {
            const { password, ...result } = user;
            return result;
        }

        return null

    }

    async login(user: User) {
        const payload = { username: user.username, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload)
        }


    }



}
