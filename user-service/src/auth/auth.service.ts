import {Injectable, NotFoundException, UnauthorizedException} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ProfileService } from '../profile/profile.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { TokenPayload } from './token-payload.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private readonly profileService: ProfileService,
        private readonly jwtService: JwtService,
    ) {}



    async register(registerDto: RegisterDto) {
        const { email, phone } = registerDto;

// Check email uniqueness
        try {
            const emailCheck = await this.profileService.findByEmail(email);
            if (emailCheck) throw new UnauthorizedException('Email is already in use');
        } catch (err) {
            if (!(err instanceof NotFoundException)) throw err;
        }

// Check phone uniqueness
        try {
            const phoneCheck = await this.profileService.findByPhone(phone);
            if (phoneCheck) throw new UnauthorizedException('Phone number is already in use');
        } catch (err) {
            if (!(err instanceof NotFoundException)) throw err;
        }

        // Create user
        const hashedPassword = await bcrypt.hash(registerDto.password, 10);
        const { data: user } = await this.profileService.create({
            ...registerDto,
            password: hashedPassword,
        });

        const payload: TokenPayload = { userId: user.id, email: user.email };
        const token = this.jwtService.sign(payload);

        return { token, user };
    }





    async login(loginDto: LoginDto) {
        const { data: user } = await this.profileService.findByEmail(loginDto.email);
        if (!user) throw new UnauthorizedException('Invalid credentials');
        const isPasswordValid = await bcrypt.compare(loginDto.password, user.password);
        if (!isPasswordValid) throw new UnauthorizedException('Invalid credentials');
        const payload: TokenPayload = { userId: user.id, email: user.email };
        const token = this.jwtService.sign(payload);
        return { token, user };

    }



    async validateUser(payload: TokenPayload) {
        return this.profileService.findOne(payload.userId);
    }
}