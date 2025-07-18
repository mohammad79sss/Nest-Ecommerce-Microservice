import {Module} from '@nestjs/common';
import {AuthService} from './auth.service';
import {AuthController} from './auth.controller';
import {ProfileModule} from "../profile/profile.module";
import {JwtModule} from "@nestjs/jwt";

@Module({
    imports: [
        ProfileModule,
        JwtModule.register({
            secret: 'yourSecretKey',
            signOptions: {expiresIn: '1h'},
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService],
})
export class AuthModule {
}
