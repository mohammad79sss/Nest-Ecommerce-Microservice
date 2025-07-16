import { Controller, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import {MessagePattern, Payload} from "@nestjs/microservices";

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}


  @MessagePattern('register')
  @UsePipes(new ValidationPipe())
  register(@Payload() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @MessagePattern('login')
  @UsePipes(new ValidationPipe())
  login(@Payload() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}