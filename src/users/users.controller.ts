import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('auth')
export class UsersController {

    @Post('signup')
    createSecureServer(@Body() body:CreateUserDto){
        console.log(body);
    }
    

}
