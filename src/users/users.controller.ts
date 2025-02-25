import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {

    @Get()

    @Post()
    createUser(@Body() body: any) {
        console.log(body);
    }
}